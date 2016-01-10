var express = require('express');
var app = express();
var cors = require('cors');
var port = 3000;
var router = express.Router();

var profile = {
  first_name: 'David',
  last_name: 'Adams',
  age: 5,
  city: 'Denver',
  state: 'CO',
  profile_image: 'http://thesource.com/wp-content/uploads/2015/04/0919927001426705549_filepicker.jpg'
};

app.use(cors());

router.get('/', function(req, res) {
  res.send('Request in correct API format.');
});

router.get('/profile', function(req, res) {
  res.json(profile);
});

app.use('/api', router);
app.listen(port);
console.log('Listening on port: ' + port);
