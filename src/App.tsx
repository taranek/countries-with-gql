import * as React from 'react';
import CountryManager from './components/CountryManager/CountryManager';
import CountryDetails from './components/CountryDetails/CountryDetails';
import countryReducer from './redux/reducers/countryReducer/countryList';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const store = createStore(countryReducer, applyMiddleware(thunk));

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/country/">
              <CountryDetails />
            </Route>
            <Route path="/">
              <CountryManager />
            </Route>

          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
