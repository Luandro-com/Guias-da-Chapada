#Guias da Chapada
Página feita para Time Rupestre de guias da Chapada dos Veadeiros, em Alto Paraíso de Goiás.

Page created for Time Rupestre team of guides from the Chapada dos Veadeiros, in Brazil.

##Usage

Make sure you have [NodeJs](http://nodejs.org) installed in your system.

Install npm dependencies 
`npm i`

Start client and server watch 
`npm run dev`


##Deploy

###Heroku
To make sure `devDependencies` get installed as well: 
`heroku config:set NPM_CONFIG_PRODUCTION=false`

Set server environment to producttion: 
`heroku config:set NODE_ENV=production`

###Dokku
SSH to the remote server and 
`dokku config:set pre NPM_CONFIG_PRODUCTION=false NODE_ENV=production`
