# 01 Smart Contract

Tout d'abord, nous allons déployer le Smart Contract que ChatGPT nous a généré.
Pour ce faire, nous allons choisir une blockchain.

Comme le Smart Contract est écrit en Solidity, je vais choisir une blockchain compatible Ethereum (EVM compatible).

`Polygon` est une blockchain compatible Ethereum (c'est un layer 2), est très rapide et peut coûteuse.
Nous allons déployer notre application sur un réseau Polygon de test, afin de ne pas avoir à payer les frais d'exécution.

## Compte Ethereum du fabriquant

Pour pouvoir déployer le Smart Contract `ToothbrushRewards` il nous faut un compte compatible Ethereum (comme MetaMask).
Puisque le contrat appartient au fabricant de brosse à dents, nous allons créer un compte fabricant. //créer un compte MetaMask

Deux informations nous seront utiles afin de déployer notre Smart Contract :

1° = la clé publique (se trouve une fois le compte MetaMask créé)
2° = la clé privée (clé personnelle qu'il ne faut pas communiquer, se trouve en cliquant tout d'abord sur les 3 pointillés en haut à droite, puis en sélectionnant "Account details")

Nous venons de récupérer ces deux clés appartenant au fabricant de brosses à dents, maintenant, il est nécessaire de récupérer deux autres clés, cette fois-ci, qui appartiennent à la brosse à dent, pour faire cela, nul besoin de recréer un autre compte MetaMask il suffit de générer deux clés à l'aide d'une commande shell sur le terminal.

Deplacez vous à la racine et rendez vous dans le dossier `03-implementation/` puis dans le dossier `scripts/` enfin exécuter la commande shell suivante :

```sh
node create-account.mjs
```

Créer ensuite un fichier `.env` à la racine de votre dossier et notez y les différentes clés comme ceci :

```sh
TOOTHBRUSHMAKER_WALLET_ADDRESS=`copiez la clé reçue ici` #clé publique du fabricant
TOOTHBRUSHMAKER_WALLET_PRIVATEKEY=`copiez la clé reçue ici` #clé privée du fabricant

TOOTHBRUSH_WALLET_PUBLICKEY=`copiez la clé reçue ici` #clé publique de la brosse à dents
TOOTHBRUSH_WALLET_PRIVATEKEY=`copiez la clé reçue ici` #clé privée de la brosse à dents
```


Il nous reste une dernière information à retenir, qui est l'adresse de la récompense, il faudra également la stocker dans le fichier .env à la suite des autres clés.

Pour ce faire, nous allons utiliser [hardhat](https://hardhat.org/), qui est une suite d'outils pour le développement de Smart Contracts ethereum.

Après avoir initialisé le projet dans `./contracts` avec `npx hardhat` nous allons coller le contrat `ToothbrushRewards` de ChatGPT dans `contracts/contracts`.

Nous pouvons ensuite compiler le contrat (`npx hardhat compile`), après avoir corrigé quelques erreurs.

Nous sommes maintenant prêts à déployer le contrat sur Polygon Testnet, notre blockchain de choix (ici MetaMask).



## Deploiement du Smart Contract

Pour ce faire, nous allons utiliser [hardhat](https://hardhat.org/), qui est une suite d'outils pour le développement de Smart Contracts ethereum.

Après avoir initialisé le projet dans `./contracts` avec `npx hardhat` nous allons coller le contrat `ToothbrushRewards` de ChatGPT dans `contracts/contracts`.

Nous pouvons ensuite compiler le contrat (`npx hardhat compile`), après avoir corrigé quelques erreurs.

Nous sommes maintenant prêts à déployer le contrat sur Polygon Testnet, notre blockchain de choix.

```sh
npx hardhat run ./scripts/deploy.js --network polygontestnet
```

résultat :
```sh
ToothbrushRewards deployed to [chaîne de caractère en hexadécimal]
```

l'adresse affichée représente l'adresse de récompense qu'il ne faut pas oublier de stocker dans le fichier .env

```sh
TOOTHBRUSH_REWARDS_ADDRESS=`copiez l'adresse déployée`
RPC_URL="https://polygon-testnet.public.blastapi.io"
```

Vous pouvez trouver le contrat à cette adresse. [`0x09cA4C1294930523D39213E8002883C3BdcF301c`](https://mumbai.polygonscan.com/address/0x09cA4C1294930523D39213E8002883C3BdcF301c)
