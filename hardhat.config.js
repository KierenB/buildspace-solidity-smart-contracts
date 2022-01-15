require("@nomiclabs/hardhat-waffle");

//Importing and configuring our .env file that we use to securely store our environment variables
require("dotenv").config();

// Some quick checks to make sure our .env is working.
if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY == "") {
  console.log("🛑 Private key not found.")
}

if (!process.env.STAGING_ALCHEMY_API_URL || process.env.STAGING_ALCHEMY_API_URL == "") {
  console.log("🛑 Alchemy API URL not found.")
}

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
