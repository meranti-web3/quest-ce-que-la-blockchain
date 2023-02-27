# 01 Smart Contract

Tout d'abord, nous allons déployer le Smart Contract que ChatGPT nous a généré.
Pour ce faire, nous allons choisir une blockchain.

Comme le Smart Contract est écrit en Solidity, je vais choisir une blockchain compatible Ethereum (EVM compatible).

`Polygon` est une blockchain compatible Ethereum (c'est un layer 2), est très rapide et peut coûteuse.
Nous allons déployer notre application sur un réseau Polygon de test, afin de ne pas avoir à payer les frais d'exécution.

## Compte Ethereum du fabriquant

Pour pouvoir déployer le Smart Contract `ToothbrushRewards` il nous faut un compte compatible Ethereum.
Puisque le contrat appartient au fabriquant de brosse à dents, nous allons créer un compte fabriquant.

```sh
node ./scripts/create-account.mjs

address: 0x<adresse publique>
private key: 0x<clé privée>
```

Nous allons garder ces informations dans le `.env` pour que l'application puisse les utiliser.

## Deploiement du Smart Contract

Pour ce faire, nous allons utiliser [hardhat](https://hardhat.org/), qui est une suite d'outils pour le développement de Smart Contracts ethereum.

Après avoir initialisé le projet dans `./contracts` avec `npx hardhat` nous allons coller le contrat `ToothbrushRewards` de ChatGPT dans `contracts/contracts`.

Nous pouvons ensuite compiler le contrat (`npx hardhat compile`), après avoir corrigé quelques erreurs.

Nous sommes maintenant prêts à déployer le contrat sur Polygon Testnet, notre blockchain de choix.

```sh
npx hardhat run ./scripts/deploy.js --network polygontestnet
ToothbrushRewards deployed to 0x09cA4C1294930523D39213E8002883C3BdcF301c
```

Vous pouvez trouver le contrat à cette adresse. [`0x09cA4C1294930523D39213E8002883C3BdcF301c`](https://mumbai.polygonscan.com/address/0x09cA4C1294930523D39213E8002883C3BdcF301c)
