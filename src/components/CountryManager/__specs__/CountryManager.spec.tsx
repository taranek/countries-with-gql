import * as React from 'react';
import { render } from '@testing-library/react';
import { State } from '../../../redux/reducers/countryReducer/countryReducer.types';
import { Provider } from 'react-redux';
import CountryManager from '../CountryManager';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';

const mockState: State = {
  activeCountry: { id: 1, name: 'First', key: 'value' },
  loading: false,
  countries: [{ id: 1, name: 'First' }, { id: 2, name: 'Second' }],
  errorMessage: null,
};
function mockReducer(initState, action): any {
  return mockState;
}

test('renders countries list', () => {
  const { getByText } = render(<Provider store={createStore(mockReducer, applyMiddleware(thunk))}>
    <Router>
      <CountryManager />
    </Router>
  </Provider>);
  expect(getByText('First')).toBeTruthy();
  expect(getByText('Second')).toBeTruthy();
});


test('renders loading message', () => {
  const loadingState = { loading: true };
  function mockReducer(state, action) {
    return loadingState;
  }
  const { getByText } = render(<Provider store={createStore(mockReducer, applyMiddleware(thunk))}>
    <Router>
      <CountryManager />
    </Router>
  </Provider>);
  expect(getByText('List of countries is loading...')).toBeTruthy();
});
