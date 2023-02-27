# 03 Implementation

Nous allons implémenter la première application de Brush2Earn qui, grâce à une brosse à dents intelligente, nous permet de gagner des récompenses lorsque nous nous brossons les dents.

Pour ce faire, nous allons mettre en place:

1. Un Smart Contract qui enregistre le brossage de dents et donne une récompense lorsque celui-ci est régulier et efficace.
2. Une brosse à dents intelligente qui envoie les informations de brossage au Smart Contract
3. Une interface qui nous permet de voir nos récompenses!

## 1 Déploiement du Smart Contract

Nous allons tester et déployer le Smart Contract.

Voir [01 Smart Contract](./01-smart-contract.md)

## 2 Brosse à dents intelligente

Nous allons développer une petite application simulant une brosse à dents envoyant les informations de brossage

Si ce n'est déjà fait, assurez vous d'exécuter `npm install` dans ce répertoire:

```sh
npm install
```

Puis nous allons exécuter la démo [02 Toothbrush](./02-toothbrush):

```sh
cd 02-toothbrush

node server.mjs
Serveur de brosse à dents écoute sur le port 8123
```

Enfin, ouvrez `http://localhost:8123` dans un navigateur.

Chaque clic sur la brosse à dent appelera la fonction `brushTeeth` de notre [Smart Contract situé ici](https://mumbai.polygonscan.com/address/0x09cA4C1294930523D39213E8002883C3BdcF301c) et si 30 secondes se sont écoulées vous pourrez voir le nouveau montant de votre récompense que vous pourrez plus tard réclamer au fabriquant.
