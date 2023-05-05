const path = require('path')
require('dotenv').config({path:".env"});


async function start(){

  const app = require('./app');
  app.listen({  port : process.env.PORT || 3000}, function (err) {
    if (err) {
      console.log(err)
      process.exit(1)
    }
    console.log(`listening on port ${ process.env.PORT }`)
  })
}

start()