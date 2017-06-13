# Fb-Login
Sprint - 5 | 42 - AJAX Y API CALLS | Ejercicio guiado
## Descripción
  Se ha implementado el uso de la API de facebook en la cual muestra que puede haber una conectividad con tu cuenta de la misma. El browser debe tener un servidor a levantar para la visualización del proyecto
  
## RECURSOS 
```
- jQuery
- HTML
- CSS
- API facebook
```
  
## OBJETIVO
+ Usar componentes
+ Implementar API de facebook
+ Tener propiamente una appID
## CÓDIGO(javascript)
+ components/login.js
```javascript
'use strict';

const Login = () => {
    const login         = $('<div class="login"></div>');
    const title         = $('<h1>Log into Laboratoria</h1>');
    const email         = $('<input type="email" class="username" placeholder="Correo Electrónico">');
    const password      = $('<input type="password" class="password" placeholder="Contraseña">');
    const loginButton   = $('<button >Ingresa</button>');
    const faceButton    = $('<button >Ingresa con Facebook</button>');

    login.append(title);
    login.append(email);
    login.append(password);
    login.append(loginButton);
    login.append(faceButton);

    loginButton.on('click', (e) => {
        e.preventDefault();
        alert('Not implement yet');
    });
    faceButton.on('click', (e) => {
        e.preventDefault();
        doLogin();
    })
    return login;
}
```
+ components/header.js
```javascript
'use strict';

const Header = () => {
    const header    = $('<header></header>');
    const img       = $('<img src="assets/img/logo.png" alt="facebook logo">');

    header.append(img);
    return header;
}

```
+ components/dashboard
```javascript
'use strict';

const Dashboard = () => {
const dashboard = $('<div class="dashboard">Dashboard Component</div>');
if(state.user) {
    const name  = $('<h1>'+state.user.name+'</h1>');
    const email = $('<p>'+state.user.email+'</p>');

    dashboard.append(name);
    dashboard.append(email);

    const logout = $('<button>Salir</button>');
    logout.on('click', _ => {
        FB.logout(response => {
            state.user = null;
            state.doRender();
        });
    });
    dashboard.append(logout);
}
return dashboard;
}
```


## GH-PAGES
Nota: Este proyecto está subido al GH-PAGES [aquí](https://mgmp2.github.io/Fb-Login/).
