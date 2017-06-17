# Postal Rate Calculator

A Node.js app using [Express 4](http://expressjs.com/) and [deployed](https://postalratecalculator.herokuapp.com) to [Heroku](http://www.heroku.com).

This application uses Node.js and Express to create a web application that determines the postage required for a single piece of retail first-class mail. It has a form that allows a user to specify 1) the weight of the item and then 2) select one of the following types of mail:

- Letters (Stamped)

- Letters (Metered)

- Large Envelopes (Flats)

- Parcels

After submitting the form, the user is taken to a page that displays the information they submitted along with the resulting price.

The rates can be found on this page from the [USPS](https://pe.usps.com/text/dmm300/Notice123.htm#_c096).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).



## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
