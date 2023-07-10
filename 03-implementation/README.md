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

cmd sh depuis la racine

```sh
cd 03-implementation/02-toothbrush
```

puis...

```sh
node server.mjs
```

résultat :
```sh
Serveur de brosse à dents écoute sur le port 8123
```

Enfin, ouvrez `http://localhost:8123` dans un navigateur.

Chaque clic sur la brosse à dents appelera la fonction `brushTeeth` de notre [Smart Contract situé ici](https://mumbai.polygonscan.com/address/0x09cA4C1294930523D39213E8002883C3BdcF301c) et si 30 secondes se sont écoulées vous pourrez voir le nouveau montant de votre récompense que vous pourrez plus tard  réclamer au fabriquant.

Si le serveur s'arrête soudainement, cela signifie que l'adresse du fabricant ainsi que celle de la brosse ne disposent pas de fonds nécessaire, dans ce cas, un message d'erreur apparaîtra sur le terminal une fois le serveur coupé. `no funds`

Pour remédier à cela, rendez vous sur le site `Polygon Faucet` pour demander des MATIC, ils représentent des "Test Token" (Tokens sans aucune valeur pécuniaire) qui vont permettre d'ajouter les fonds nécessaires pour payer les transactions (techniquement appelés Gaz).
