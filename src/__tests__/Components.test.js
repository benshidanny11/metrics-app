/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import NavBar from '../components/NavBar';
import store from '../redux/store/store';
import Home from '../components/pages/Home';
import CountryItem from '../components/items/CountryItem';
import Details from '../components/pages/Details';

let history = null;
beforeAll(() => {
  Element.prototype.scrollIntoView = jest.fn();
  history = createMemoryHistory();
});

describe('Test header', () => {
  test('Should Render header', () => {
    render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </Router>,
    );
    const linkElement = screen.getByText(/World population/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Test home page', () => {
  test('Should lendere home page', () => {
    render(
      <Provider store={store}>
        <Home />
        ,
      </Provider>,
    );
    const linkElement = screen.getByText(/Overall population/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Test item component', () => {
  test('Should render component item', () => {
    const name = 'Rwanda';
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <CountryItem country={{ name }} />
        </Router>
        ,
      </Provider>,
    );
    const linkElement = screen.getByText(/Rwanda/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Test details', () => {
  test('Should render detailes page', async () => {
    await act(async () => render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Details performance={{ navigation: { type: 1 } }} />
        </Router>
        ,
      </Provider>,
    ));
    const linkElement = screen.getByText(/Number/i);
    expect(linkElement).toBeInTheDocument();
  });
});
