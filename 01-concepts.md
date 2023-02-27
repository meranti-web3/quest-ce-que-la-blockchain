# 01 Concepts

La blockchain est un type d'implémentation de ce qu'on appelle plus génériquement une Distributed Ledger Technology ou DLT.
Un Ledger signifie un registre, ou un livre de comptes, qui retrace l'historique des transactions entre personnes.
La blockchain a été initialement inventée comme étant un livre de comptes ouvert à tous à la fois en lecture et en écriture.

## Livre de comptes traditionnel

Un livre de compte classique se trouve généralement maintenu par une personne ou entité (comptable, banque) ayant la confiance de l'économie qui l'utilise.
Celui-ci peut être digitalisé ou même maintenu dans un simple cahier en papier.

3 défauts principaux caractérisent ce livre de compte classique:

1. Centralisé: Une personne ou autorité supervise la mise à jour de ce livre de compte lorsqu'une transaction est reportée
2. Falsifiable: La personne ayant accès au livre de compte peut en modifier l'historique
3. Opaque: Le livre de compte n'est généralement pas public

## Livre de compte distribué

Grâce aux progrès en cryptographie, technologie permettant de garantir l'intégrité de données digitalisées et en sécuriser les échanges, nous avons pu mettre en place un livre de compte décentralisé permettant de corriger ces défauts:

1. Décentralisé: Le livre de compte existe à plusieurs endroits différents (créant un réseau), chaque participant peut écrire une transaction dans ce livre de compte qui sera ensuite synchronisé avec les autres copies via un mécanisme de validation, consensus et réplication.
2. Infalsifiable: Chaque copie du livre de compte est identique, un livre de compte falsifié ne pourrait plus ajouter de nouvelles transactions et serait rejeté par le réseau.
3. Transparent: Chacun peut obtenir une copie du livre de compte et éplucher ses transactions.

## Types de transactions

Les premières blockchains ne permettaient que l'échange d'une monnaie digitale (un jeton, ou "coin") lors de transactions, par exemple Bitcoin.
Les blockchains de nouvelles générations permettent également d'inscrire des informations dans la blockchain via des Smart Contracts qui permettent de stocker et lire/écrire des données, par exemple Ethereum.

## La blockchain, une simple base de données

D'un point de vue purement technologique, un registre distribué n'est qu'une base de données, dans laquelle on lit et écrit des informations.
De ce point de vue là, elle entre en concurrence directe avec d'autres bases de données que vous connaissez, parmis:

1. Base de données relationnelle: les informations y sont stockées selon leur type dans des tables prédéterminées
2. Base de données orientées graphes: les données y sont stockées dans des noeuds et liées par des vecteurs en fonction de leur relation
3. Base de données séries chronologiques: les données y sont stockées dans l'ordre chronologique de production
4. Base de données orientée documents ou clés/valeurs: les données y sont stockées sous formats plus utilisés dans le Web type JSON ou XML

Certaines base de données sont considérées immutables ou "append only" ce qui signifie qu'on ne peut plus modifier une entrée de cette base de données, on va simplement enregistrer le nouvel état qui va masquer l'état précédent. On conserve donc l'historique.

En ce sens, une blockchain peut être considérée comme une base de données séries chronologiques immutable, "append only" qui serait ouverte à tous les participants en lecture et écriture.

## Compte blockchain

Chaque participant à la blockchain est identifié de manière unique par son adresse publique, qui est au format hexadécimal et générée par des algorithmes cryptographiques.
Un compte est composé donc de son adresse publique ainsi que d'une clé privée. La clé privée permet de signer de manière unique, sécurisée et infalsifiable des transactions.
Seul le compte propriétaire de la clé privée peut prétendre posséder l'adresse publique.

## Smart Contract

La blockchain permet d'échanger une monnaie digitale native (jeton) ainsi que des informations qui peuvent être lues et écrites.
Les implémentations modernes permettent de programmer ces échanges via des Smart Contracts.
Un Smart Contract est un bout de code dont le language est spécifique à la blockchain, et qui est déployé directement sur cette blockchain. Une fois déployé, le code du Smart Contract
ne peut plus être changé, il faudrait déployer une nouvelle version. On identifie un Smart Contract à son adresse hexadécimale qui est similaire à celle d'une compte blockchain.
Un Smart Contract ne peut plus être modifié une fois déployé (immutabilité), mais les données qu'il stocke peuvent être modifiées via une nouvelle transaction. Le nouvel état sera simplement ajouté à la blockchain ("append only") et viendra remplacer le précédent.
