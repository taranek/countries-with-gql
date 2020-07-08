# countries-with-gql
This is to try out using GraphQL inside a React app
# API Keys
To use this app, you need to acquire a key for Everbase API:
https://www.everbase.co/
after that, create a `.env` file in root directory, using this template:

`REACT_APP_API_URL = https://api.everbase.co/graphql?apikey=`

`REACT_APP_API_KEY = YOURKEY`

`REACT_APP_MIN_POPULATION = 20000000`

The last variable in this file sets the minimal population a country needs to have to be included in the list.

After that go to next section and run the app.
# Start the app:
Just execute `yarn install` or `npm install` followed by `yarn start` or `npm start`
