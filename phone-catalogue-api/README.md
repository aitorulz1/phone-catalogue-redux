## Phone Catalogue RESTful API

In the project directory, you can run:

### `npm i`

For install all dependencies and devDependencies necessary for the API run correctly

### `npm run dev`

Runs the app in the development mode and listen for changes<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run seeds` 

Launches the seeds configuration for creating a MongoDB <br />
The db calls phones and the collections also phones
The db only have a length of 7 items for testing, you can add as much as you like

### `Heroku`

It comes with the necessary configuration for the deployment in Heroku, you only need to configure your own database

See the section about [deployment](https://devcenter.heroku.com/articles/git) for more information.

### `Cors`

Cors (HTTP access control) configuration implemented, the API works in PORT [http://localhost:5000](http://localhost:5000)

In case you want to use the API with a library like React.js that uses port 3000 by default