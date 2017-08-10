const express = require('express');
const app = express();

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", function (request, response) {
  const leads = require('./mocks/leads.json');
  response.render('leads', { leads });
});

app.get("/my", function (request, response) {
  const funnel = require('./mocks/customers.json');
  response.render('my-customers', { funnel });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
