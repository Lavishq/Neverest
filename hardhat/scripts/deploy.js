const hre = require("hardhat");

async function main() {
  const Rate = await hre.ethers.getContractFactory("Rate");
  const rate = await Rate.deploy();

  await rate.deployed();

  console.log(` deployed to ${rate.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
