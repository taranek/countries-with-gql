import * as React from 'react';
import { render } from '@testing-library/react';
import { State } from '../../../redux/reducers/countryReducer/countryReducer.types';
import { Provider } from 'react-redux';
import countryList from '../../../redux/reducers/countryReducer/countryList';
import CountryDetails from '../CountryDetails';
import { connector } from '../CountryDetails.types';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
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

test('renders active country name', () => {
  const { getAllByText } = render(<Provider store={createStore(mockReducer, applyMiddleware(thunk))}>
    <Router>
      <CountryDetails />
    </Router>
  </Provider>);
  const countryName = getAllByText('First');
  expect(countryName).toBeTruthy();
});

test('renders active country other attributes', () => {
  const { getByText } = render(<Provider store={createStore(mockReducer, applyMiddleware(thunk))}>
    <Router>
      <CountryDetails />
    </Router>
  </Provider>);
  expect(getByText('key')).toBeTruthy();
  expect(getByText('value')).toBeTruthy();
});

test('renders remove button', () => {
  const { getByText } = render(<Provider store={createStore(mockReducer, applyMiddleware(thunk))}>
    <Router>
      <CountryDetails />
    </Router>
  </Provider>);
  expect(getByText('Remove Country')).toBeTruthy();
});
