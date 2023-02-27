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
