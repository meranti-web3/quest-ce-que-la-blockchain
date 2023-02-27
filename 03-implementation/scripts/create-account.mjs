import { ethers } from "ethers";

const { address, privateKey } = ethers.Wallet.createRandom();

console.log(`
  address: ${address}
  private key: ${privateKey}
`);
