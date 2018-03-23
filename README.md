## Webpack-Heroku Template

A template for running an Express.js server on Heroku with Webpack, along with ESLint, Babel, Karma, Jasmine & other amenities.

## Installing

```
git clone https://github.com/rhofvendahl/webpack-heroku-template
cd webpack-heroku-template

npm install
```
To start development server:
```
npm run start
```

To start express server (needed for heroku):
```
npm run express
```
and visit http://localhost:8080

To run on Heroku:
```
#you will need to make a Heroku account if you have not already
heroku login
heroku create
git push heroku master
heroku open
```
