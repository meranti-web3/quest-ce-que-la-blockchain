# Concepts

La blockchain est un type d'implémentation de ce qu'on appelle plus génériquement une Distributed Ledger Technology ou DLT.
Un Ledger signifie un registre, ou un livre de comptes.
La blockchain a été initiallement inventée comme étant un livre de comptes ouvert à tous à la fois en lecture et en écriture.
Livre de comptes signifie un recueil de transactions entre personnes.

## Livre de comptes traditionnel

Un livre de compte classique se trouve généralement maintenu par une personne ou entité (comptable, banque) ayant la confiance de l'économie qui l'utilise.

3 défauts principaux caractérisent ce livre de compte classique:

1. Centralisé: Une personne ou autorité supervise la mise à jour de ce livre de compte lorsqu'une transaction est reportée
2. Falsifiable: La personne ayant accès au livre de compte peut en modifier l'historique
3. Opaque: Le livre de compte n'est généralement pas public

## Livre de compte distribué

Grâce aux progrès en cryptographie, technologie permettant de garantir l'intégrité de données digitalisées, nous avons pu mettre en place un livre de compte décentralisé permettant de corriger ces défauts:

1. Décentralisé: Le livre de compte existe à plusieurs endroits différents (créant un réseau), chaque participant peut écrire une transaction dans ce livre de compte
2. Infalsifiable: Chaque copie du livre de compte est identique, un livre de compte falsifié serait différent des autres et rejeté par le réseau
3. Transparent: Chacun peut obtenir une copie du livre de compte et éplucher ses transactions

## Types de transactions

Les premières blockchains ne permettaient que l'échange d'une monnaie digitale (un jeton, ou "coin") lors de transactions, par exemple Bitcoin.
Les blockchains de nouvelles générations permettent également d'inscrire des informations dans la blockchain via des Smart Contracts qui permettent de stocker et lire/écrire des données, par exemple Ethereum.

## La blockchain, une simple base de données

D'un point de vue purement technologique, un registre distribué n'est qu'une base de données, dans laquelle on lit et écrit des informations.
De ce point de vue là, elle entre en concurrence directe avec d'autres bases de données que vous connaissez, parmis:

1. Base de données relationnelle: les informations y sont stockées selon leur type dans des tables prédéterminées
2. Base de données orientées graphes: les données y sont stockées dans des noeuds et liées par des vecteurs en fonction de leur relation
3. Base de données séries chronologiques: les données y sont stockées dans l'ordre chronologique de production
4. Base de données orientée documents et clés/valeurs: les données y sont stockées sous formats plus utilisés dans le Web type JSON ou XML

Certaines base de données sont considérées immutables ou "append only" ce qui signifie qu'on ne peut plus modifier une entrée de cette base de données, on va simplement enregistrer le nouvel état qui va masquer l'état précédent. On conserve donc l'historique.

En ce sens, une blockchain peut être considérée comme une base de données séries chronologiques immutable, "append" only qui serait ouverte à tous les participants en lecture et écriture.
