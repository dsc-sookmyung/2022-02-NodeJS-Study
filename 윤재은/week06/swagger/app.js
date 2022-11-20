'use strict';

var SwaggerExpress = require('swagger-express-mw');
var SwaggerUI = require('swagger-tools/middleware/swagger-ui');

var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname, // required config
  swaggerSecurityHandlers:{
    api_key: function (req, authOrSecDef, scopesOrApiKey, cb){
      //요청 헤더 값이 api_key이고, 값이 'my_key'일 경우에만 실행을 허용
      if(scopesOrApiKey == 'my_key'){
        cb();
      }else{
        cb(new Error('Access Denied!'));
      }
    }
  }
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.runner.swagger.host = '127.0.0.1:10010';
  app.use(SwaggerUI(swaggerExpress.runner.swagger));
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
