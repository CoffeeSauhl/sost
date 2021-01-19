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