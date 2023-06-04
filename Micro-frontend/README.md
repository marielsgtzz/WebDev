# Micro-frontends con Module Federation

## Set-up

1. yarn create mf-app y elegir los settings del modulo
2. entrar al directorio de la recien creada aplicacion
3. yarn install
4. yarn start

## Arrancar los micro-frontends

- Cada vez que se haga un cambio a `webpack.config.js` o a las `dependencias` del proyecto hay que reiniciar la aplicación

## Recomendaciones

- Usar `Styled Components` para evitar la colision de estilos entre host y remote.

## Deploys

1. `yarn build` para crear la carpeta dist dentro de los projectos
2. `yarn build:start` para levantar la aplicación en **entorno local**
3. Arrastrar la carpeta `dist` en el servidor para deploy de **prod** (asegurarse de cambiar el publicPath en el webconfig)

### Counter app:

MF 1: https://counter-microfrontend.netlify.app/ <br>
Mf 2: https://navbar-udemy-microfrontend.netlify.app/ <br>
Host 1: https://host-udemy.netlify.app/ <br>
