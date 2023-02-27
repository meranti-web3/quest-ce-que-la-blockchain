require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "../.env" });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    polygontestnet: {
      url: "https://polygon-testnet.public.blastapi.io",
      accounts: [process.env.TOOTHBRUSHMAKER_WALLET_PRIVATEKEY],
    },
  },
};
