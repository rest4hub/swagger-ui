# Swagger UI

This is a simple node.js server with a /makecookie endpoint.
It is mostly swagger-ui stuff.

Make sure you have node.js installed
Then in the root of this repo
```shell
npm install  # install dependencies
npm start # start the server at environment PORT or 3000
```

#### Purpose
Loading up http://localhost:3000/dist/index.html will load swagger-ui with the '/makecookie' endpoint preset.
This end point will create a cookie with a random value.

THere is also the '/cookie' endpoint which shows the same spec file but does **NOT** create a cookie.

Have fun!
