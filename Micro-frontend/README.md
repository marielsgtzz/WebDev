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
