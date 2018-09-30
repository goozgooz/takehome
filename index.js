'use strict';


const app = require('express')();
app.use(require('morgan')('common'));
app.use(express.static(`${__dirname}/build`));
app.get('*', res.sendFile(`${__dirname}/build/index/html`));
app.listen(process.env.PORT, () => {
  console.log('__SERVER_UP__', process.env.PORT);
});