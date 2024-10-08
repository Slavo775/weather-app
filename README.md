# Weather app

The Weather App was created using Create React App with TypeScript.

The app uses the https://www.weatherapi.com/ to fetch weather forecasts.

Users can enter a location in the search input and submit the form, triggering a request to the API. If the API returns a 400 error, the app displays an empty result screen. If the API returns valid data, the app renders a weather content screen with all the relevant information.

State management is handled by Redux Toolkit, which stores three values: `isFetching`, `emptyResult`, and `weatherData`. These values are set in the SearchForm component and accessed in the App component.

## Other external packages

 - Axios
 - Prettier
 - Pure react carousel
 - redux
 - redux-toolkit

## Deploy 

App deploy to production (aws) is through Github action and its trigger on push to main branch.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Environment Variables

For local development, create .env file, and define following variables

| Name                                 | Type                           | Desc                                                           |
|--------------------------------------|--------------------------------|----------------------------------------------------------------|
| REACT_APP_WEATHER_API_BASE_URL                      | string                         |  Basae url of weather api e.g. http://api.weatherapi.com/v1/ |                     
| REACT_APP_WAETHER_API_KEY                        | string                         | Your api key |

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
