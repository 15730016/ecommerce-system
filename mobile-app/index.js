import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './App';

// Wrap the App component with Redux Provider
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// Register the app
AppRegistry.registerComponent('mobileapp', () => ReduxApp);
