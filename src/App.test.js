import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import UI from './UI';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'

configure({adapter: new Adapter()});

it("renders without crashing", () => {
  shallow(
  <Provider store={store}>
    <UI />
  </Provider>
  );
});

it("renders header", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
    );
  const header = <h1>Add Equipment Data and Sensor Data</h1>;
  expect(wrapper.contains(header));
});
