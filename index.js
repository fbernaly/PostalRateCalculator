const express = require('express');
const formidable = require('express-formidable');

var app = express();

const rates = {
  stamped : function(weight) {
    var name = 'Letters (Stamped)';
    if (weight <= 1)
      return { rate: 0.49, name: name};
    else if (weight <= 2)
      return { rate: 0.70, name: name};
    else if (weight <= 3)
      return { rate: 0.91, name: name};
    else if (weight <= 3.5)
      return { rate: 1.12, name: name};
    else 
      return rates['flats'](weight);
  },
  metered : function(weight) {
    var name = 'Letters (Metered)';
    if (weight <= 1)
      return { rate: 0.46, name: name};
    else if (weight <= 2)
      return { rate: 0.67, name: name};
    else if (weight <= 3)
      return { rate: 0.88, name: name};
    else if (weight <= 3.5)
      return { rate: 1.09, name: name};
    else 
      return rates['flats'](weight);
  },
  flats : function(weight) {
    var name = 'Large Envelopes (Flats)';
    if (weight <= 1)
      return { rate: 0.98, name: name};
    else if (weight <= 2)
      return { rate: 1.19, name: name};
    else if (weight <= 3)
      return { rate: 1.40, name: name};
    else if (weight <= 4)
      return { rate: 1.61, name: name};
    else if (weight <= 5)
      return { rate: 1.82, name: name};
    else if (weight <= 6)
      return { rate: 2.03, name: name};
    else if (weight <= 7)
      return { rate: 2.24, name: name};
    else if (weight <= 8)
      return { rate: 2.45, name: name};
    else if (weight <= 9)
      return { rate: 2.66, name: name};
    else if (weight <= 10)
      return { rate: 2.87, name: name};
    else if (weight <= 11)
      return { rate: 3.08, name: name};
    else if (weight <= 12)
      return { rate: 3.29, name: name};
    else if (weight <= 13)
      return { rate: 3.50, name: name};
    else 
      return { rate: 4, name: name};
  },
  parcels : function(weight) {
    var name = 'Parcels';
    if (weight <= 1)
      return { rate: 2.67, name: name};
    else if (weight <= 2)
      return { rate: 2.67, name: name};
    else if (weight <= 3)
      return { rate: 2.67, name: name};
    else if (weight <= 4)
      return { rate: 2.67, name: name};
    else if (weight <= 5)
      return { rate: 2.85, name: name};
    else if (weight <= 6)
      return { rate: 3.03, name: name};
    else if (weight <= 7)
      return { rate: 3.21, name: name};
    else if (weight <= 8)
      return { rate: 3.39, name: name};
    else if (weight <= 9)
      return { rate: 3.57, name: name};
    else if (weight <= 10)
      return { rate: 3.75, name: name};
    else if (weight <= 11)
      return { rate: 3.93, name: name};
    else if (weight <= 12)
      return { rate: 4.11, name: name};
    else if (weight <= 13)
      return { rate: 4.29, name: name};
    else 
      return { rate: 5, name: name};
  }
};

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(formidable());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('pages/index');
});

// rate page
app.post('/rate', function (request, response) {
  var weight = request.fields.weight;
  var mail = request.fields.mail;
  
  var result = rates[mail](weight);
  
  // render the `rate.ejs` template with the rate
  response.render('pages/rate', {
    rate: result.rate,
    name: result.name,
    weight: weight
  });
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
