const jwt = require('jsonwebtoken');

// async function test(request, response) {
//   const token = request.headers.authorization.split(' ')[1];

//   jwt.verify(token, getKey, {}, function (err, user) {
//     if (err) {
//       response.send('invalid token');
//     } else {
//       response.send(user);
//     }
//   });
// }
//module.exports = { test, jwt } ;

module.exporsts = jwt;