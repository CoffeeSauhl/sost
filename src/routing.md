# Routing

## Prérequis

- AppRoutingModule doit être dans les imports de app.module.ts

- Dans authorizations-routing.module.ts on ajoute les routes :
    ```
    const routes: Routes = [
        {
            path:'...',
            loadChildren: () => import('¡module!').then(m => m.AuthorizationsModule)
        }
    ];
    ```

- Dans <i>module</i>-routing.moduls.ts
```
const routes: Routes = [
  {
    path: '',
    component: AuthorizationsComponent
  }
];
```