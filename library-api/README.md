# 📚 Library API
Library API est une application de gestion de bibliothèque permettant de manipuler des livres et des auteurs via une API REST.
Elle offre aux utilisateurs la possibilité de créer, consulter, mettre à jour et supprimer des livres et des auteurs, tout en respectant certaines règles métier.

## 🎯 Objectif du projet
Le but de cette API est de fournir une base pour la gestion de bibliothèques, avec un modèle de données clair et des relations cohérentes entre les entités.

## 🛠 Technologies utilisées
- Java 21
- Spring Boot (Web, Data JPA)
- Hibernate (ORM)
- MySQL
- Maven (gestion de projet)

### 📝 Fonctionnalités principales

#### Gestion des auteurs

- Créer un auteur avec ou sans livre associé
- Consulter la liste des auteurs ou un auteur précis
- Mettre à jour les informations d’un auteur
- Supprimer un auteur (si aucune contrainte d’intégrité n’est violée)

#### Gestion des livres

- Créer un livre obligatoirement lié à un auteur existant
- Consulter la liste des livres ou un livre précis
- Mettre à jour les informations d’un livre
- Supprimer un livre

#### Architecture DRY / classes génériques

- Le projet utilise des classes génériques pour éviter la répétition du code CRUD (ex. GenericController, GenericService, I_GenericService).
- Ces classes fournissent un contrat et une implémentation réutilisable pour les opérations courantes (liste paginée, recherche par id, création/mise à jour, suppression), ce qui permet de gagner du temps et de garder le code propre.

### Règles métier

- Un livre ne peut pas exister sans auteur
- Un auteur peut exister sans livre
- Suppression sécurisée avec gestion des exceptions (erreurs 404, 400, 500)

### 🚀 Lancer le projet
1. Cloner le projet
````
git clone https://github.com/mon-projet/library-api.git
````
2. Configurer la base de données dans application.properties.
````
spring.datasource.url=jdbc:mysql://localhost:3306/name
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
````

3. Lancer l'application
````
mvn spring-boot:run
````
4. Tester l'API via Postman ou Swagger (si activé).

Postman : https://www.postman.com/ \
Swagger : http://localhost:8080/swagger-ui/index.html#/


