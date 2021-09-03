'use strict';

const jwksClient = require('jwks-rsa');
// const domain = 'dev-y5ehm8nw.us.auth0.com';
const client = jwksClient({
  jwksUri: 'https://dev-1n4otpy6.us.auth0.com/.well-known/jwks.json',
});

module.exports = (header, callback) => {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};
