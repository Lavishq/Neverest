const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const Contract = await ethers.getContractFactory("Rate");

  // deploy the contract
  const deployedContract = await Contract.deploy();

  await deployedContract.deployed();

  // print the address of the deployed contract
  console.log("Contract Address:", deployedContract.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(10000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedContract.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
