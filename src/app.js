import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './redux';
import Movies from './Movies';
import Confirmation from './Confirmation';


// Create Redux store
const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

// Fetch movie data
store.dispatch({type: 'GET_MOVIE_DATA'});

// React view routing
const RouteApp = StackNavigator({
    Movies: { screen : Movies},
    Confirmation:{ screen: Confirmation}
});

const RouteMapper = (route, navigator) => {
  if (route.name === 'movies') {
    return (
      <Movies navigator={navigator} />
    );
  }
  else if (route.name === 'confirmation') {
    return (
      <Confirmation code={route.code} navigator = {navigator} />
    );
  }
};

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Navigator
          // Default to movies route
          initialRoute = {{ name: 'movies' }}
          // Use FlotFromBottom transition between screens
          configureScene = {(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          // Pass a route mapper function
          renderScene = {RouteMapper}
        />
      </Provider>
    );
  }
}
