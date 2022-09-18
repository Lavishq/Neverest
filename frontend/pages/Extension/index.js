//Extension Window Resolution:  W -> 390 , H -> 590
//Inner Box resolution: W -> 325 , H -> 425

import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Home.module.css";
import Web3Modal from "web3modal";
import { Contract, providers, utils } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "/constants/index.js";
import { useRouter } from "next/dist/client/router";

const Index = () => {
  const router = useRouter();
  let navi = () => router.push("/sitelist");

  const [walletConnected, setWalletConnected] = useState(false);
  const [sitelink, setSitelink] = useState();
  const [_rating, set_rating] = useState("");
  const [_comment, set_comment] = useState("");
  const web3ModalRef = useRef();
  const [currentAccount, setCurrentAccount] = useState("");

  const ratingValue = (e) => {
    set_rating(e.target.value);
  };

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Use Metamask!");
      } else {
        console.log("Ethereum object found", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account ", account);
        setCurrentAccount(account);
      } else {
        console.log("Could not find an authorized account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Mumbai network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert("Change the network to Mumbai");
      throw new Error("Change network to Mumbai");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const rateWebsite = async () => {
    try {
      // We need a Signer here since this is a 'write' transaction.
      const signer = await getProviderOrSigner(true);
      // Create a new instance of the Contract with a Signer, which allows
      // update methods
      const rateContract = new Contract(CONTRACT_ADDRESS, ABI, signer);
      // call the functions
      const tx = await rateContract.rating(sitelink, _rating, _comment);
      await tx.wait();
      window.alert("You successfully rated/commented, lol");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    try {
      setSitelink(window.location.host);
      console.log(sitelink);
    } catch (err) {
      console.log(err);
    }
  }, [sitelink]);

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "mumbai", // i edited mumbai to rinkeby
        providerOptions: {},
        disableInjectedProvider: false,
      });
      checkIfWalletIsConnected();
      connectWallet();
    }
  }, [walletConnected]);

  return (
    <div className={styles.Container}>
      <div className={styles.mainContentContainer}>
        <div className={styles.nameAddressRating}>
          {walletConnected ? (
            <p className={styles.address}>
              {currentAccount.substring(0, 5)}...
              {currentAccount.substring(currentAccount.length - 4)}
            </p>
          ) : (
            <button className="" onClick={connectWallet}>
              Connect
            </button>
          )}
          <p className={styles.website}>{sitelink}</p>
          <input
            type="number"
            className={styles.rating}
            value={_rating}
            placeholder="rating 0-5"
            onChange={ratingValue}
          />
        </div>
        <div className={styles.reviewVoting}>
          <input
            type="text"
            placeholder="Write your review"
            className={styles.inputField}
            value={_comment}
            onChange={(e) => set_comment(e.target.value)}
          />
          <button className={styles.rateBtn} onClick={rateWebsite}>Rate</button>

          <div className={styles.ratingButtons}></div>
        </div>
        <div className={styles.redirectToReviews}>
          <p>View All Reviews</p>
          <img
            src="./arrow-right.png"
            alt="right-arrow"
            className={styles.redirectButton}
            onClick={navi}
          ></img>
        </div>
      </div>
      <div className={styles.biggestCircle}></div>
      <div className={styles.smallCircle1}></div>
      <div className={styles.smallCircle2}></div>
    </div>
  );
};

export default Index;
