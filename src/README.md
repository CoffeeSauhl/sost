# Environement ionic android / Lancement d'un projet

## Créer un projet

- Run <i> npm install @ionic/cli </i> dans le projet créé
- <i>npm install cordova</i>

- <i>npx ionic integration enable cordova
- npx ionic integration disable capacitor </i>

</br>

___
## Error trigger : 


### Pour savoir ce qu'il manque  <i>npx ionic cordova run --device</i> -fail- 
```diff 
Prerequis : 
+ Java V8
+ Gradle
+ SDK build tools
+ native-run
+ Licences 
```

</br>

___

## Passer le téléphone en mode developpeur : 

```
 Voir sur youtube ?
 Taper plusieurs fois sur le "build number"
```

### Activer l'option "USB Debugging"  </br >
</br>

___
## Lancement du projet
### <i>npx ionic cordova run android --device</i>

<b>OU</b>

### <i>npx ionic cordova run android --emulator</i>
</br>

____
____
____
</br>

# Modules

## Authentification
- Login
- Sign up

## Contacts
- Liste
- Ajout
- Filtre ?

## >>> Groups 

```
Discussions
- Messages
- Wall
- Zone de saisie

```


# Commandes (build)

## Modules

npx ng generate module shared

npx ng generate module authorizations --routing

npx ng generate module contacts --routing

npx ng generate module contacts/groups --routing


## Components

- Authorizations
```
npx ng generate component authorizations/authorizations

npx ng generate component authorizations/home

npx ng generate component authorizations/login

npx ng generate component authorizations/signup
```

- Contacts
```
npx ng generate component contacts/contacts

npx ng generate component contacts/contact-list

npx ng generate component contacts/contact-search

npx ng generate component contacts/contact-discussion
```

- Groups
```
npx ng generate component contacts/groups/groups

npx ng generate component contacts/groups/group-form

npx ng generate component contacts/groups/group-discussion
```

- Contacts/shared
```
npx ng generate component contacts/shared/navbar

npx ng generate component contacts/shared/sendbox

npx ng generate component contacts/shared/username-search
```