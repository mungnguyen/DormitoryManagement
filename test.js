var bcrypt = require('bcrypt-nodejs');

var x = '10';

var y = bcrypt.hashSync(x, bcrypt.genSaltSync(8), null);

var z = '10';

var t = bcrypt.compareSync(z, y);

console.log(t);