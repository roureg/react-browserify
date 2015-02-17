


# react-browserify
Sample of use of react with browserify

## Intro
Ce petit exemple a pour but d'illustrer l'utilisation de browserfify avec react.

Sur la première page, il présente un formulaire de login comportant un champ email et un champ password. Les contrôles sur les champs sont au minimum mais illustrent la notion d’état de react. Il présente aussi la liste des derniers commentaires.
Sur la seconde page, il présente la liste de tous les commentaires et un petit formulaire pour rajouter des commentaires.

Pour l’exemple, les commentaires sont stockés en localStorage, il faudra donc en saisir pour en voir apparaitre. De même, pour l’exemple, les formulaires sont en `GET` car le projet a été développé avec le server http `node-serve` qui ne fournit que du `GET`. 

Il fournit un exemple :
* de réutilisation des composants react, les listes de commentaires sont le même composant réutilisé.
* d'utilisation de modules présent dans `npm` comme `domReady` ou `local-storage`
* de lint du code jsx
* de mignification de code js
* de bundle du code js

## Compilation du JS
Après avoir cloné le dépôt, il faut compiler la partie js.

### Installation des dépendances
```
cd js
npm install
```
### Compilation / Watch des fichiers JS
Pour cela, cet exemple s'appuie sur gulp. Un tache gulp est définie dans le package.json sous le nom de build-js.
```
  cd js
  npm run build-js
```
Cet exemple propose aussi une tache `watch-js`, qui recompile le js des que qu’un fichier est modifié.
```
  cd js
  npm run watch-js
```
## Visualisation du résultat
Je me suis servi de `node-serve` pour visualiser le résultat, sinon il suffirait de déployer le dossier au webapp au sein d’un server http.

### Installation de `node-serve`
```
npm install –g node-serve
```
### Exécution de `node-serve`
```
cd webapp
serve
```
Serve ouvre un serveur sur le port 8080. On utilise ensuite son navigateur avec l’url `http://loalhost:8080`

## Améliorations possibles
On pourra se servir de ce projet comme base à un projet utilisant REACT et y ajouter assez grâce à gulp le support de LESS / SASS .



