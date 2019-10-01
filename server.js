const potatoes = {
  '1': {
    color: 'golden',
    size: 'large',
    type: 'russet',
    weight: 3
  },
  '2': {
    color: 'orange',
    size: 'medium',
    type: 'yam',
    weight: 70
  },
  '3': {
    color: 'purple',
    size: 'small',
    type: 'tiny potato',
    weight: 1
  }
};

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');
const port = 8080;

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// browse
app.get('/potatoes', (request, response) => {
  const templateVars = {
    potatoes
  };
  response.render('potatoes', templateVars);
});

// add
// get the form
app.get('/potatoes/new', (request, response) => {
  response.render('new-potato');
});

// handle the form submission
app.post('/potatoes', (request, response) => {
  const potato = request.body;
  const potatoId = uuid().split('-')[0];
  potatoes[potatoId] = potato;
  response.redirect('/potatoes');
});

// read
app.get('/potatoes/:id', (request, response) => {
  const potatoId = request.params.id;
  const templateVars = {
    potato: potatoes[potatoId],
    potatoId
  };
  response.render('potato-details', templateVars);
});

// edit
app.post('/potatoes/:id', (request, response) => {
  const potatoId = request.params.id;
  const {color, size, type, weight} = request.body;
  potatoes[potatoId].color = color;
  potatoes[potatoId].size = size;
  potatoes[potatoId].type = type;
  potatoes[potatoId].weight = weight;
  response.redirect(`/potatoes/${potatoId}`);
});

// delete
app.post('/potatoes/:id/delete', (request, response) => {
  const potatoId = request.params.id;
  delete potatoes[potatoId];
  response.redirect('/potatoes');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
