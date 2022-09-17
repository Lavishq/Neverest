// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();

// const { API_URL, PRIVATE_KEY, POLYGONSCAN_API_KEY } = process.env;

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.7",
//   networks: {
//     mumbai: {
//       url: API_URL,
//       accounts: [`0x${PRIVATE_KEY}`],
//     },
//   },
//   etherscan: { apiKey: POLYGONSCAN_API_KEY },
// };
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const MUMBAI_PRIVATE_KEY = process.env.PRIVATE_KEY;

const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

module.exports = {
  solidity: "0.8.7",
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [`0x${MUMBAI_PRIVATE_KEY}`], //[`0x${PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};
