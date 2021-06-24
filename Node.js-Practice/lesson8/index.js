const app = require('./app');

 const host = '127.0.0.1';
 const port = 4000;

 app.listen(port, () => {
   console.log(`Server is running on http://${host}:${port}`);
 });