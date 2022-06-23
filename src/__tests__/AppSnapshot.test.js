import React from 'react';
import Renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import App from '../components/App';

test('renders learn react link', () => {
  const tree = Renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
