# I - Introduction à ExpressJS

## Exercice 1

Créer un serveur ExpressJS simple

![ sur la route principale](ecran/1.png)

![ sur la route /date](ecran/2.png)

## Exercice 2

Configuration d'un projet ExpressJS

![ Cofiguration de base d'un projet express](ecran/3.png)

# II - Routage avec ExpressJS

## Exercice 1

Créer un ensemble de routes pour une API de gestion de tâches

Récupérer toutes les tâches

![ ](ecran/4.png)

Récupérer une tâche spécifique

![](ecran/5.png)

Créer une nouvelle tâche

![](ecran/6.png)

Mettre à jour une tâche existante

![](ecran/7.png)

Supprimer une tâche

![](ecran/8.png)

## Exercice 2

Créez une API pour un blog avec des routes paramétrées :

Récupérer les articles d'une année et optionnellement d'un mois spécifique

je sais pas pourquoi mais mon express n'arrive pas a supporter les parametres optionnel donc j'ai cree deux route distinct

pour get /posts/:year/

![](ecran/9.png)

pour get /posts/:year/month

![](ecran/10.png)

Récupérer les articles d'une catégorie spécifique

/categories/:categoryName/posts

![](ecran/11.png)

## Exercice 3

Organiser une application avec des routeurs modulaires
le screenshot est un exemple de la route blog separe dans les dossier controller , routes et index.js

![](ecran/12.png)

# II - Les Middlewares dans ExpressJS

## Exercice 1

Créer un middleware de logging personnalisé

log de url /posts/2022

![](ecran/13.png)

## Exercice 3

Intégrer plusieurs middlewares tiers

![](ecran/14.png)
