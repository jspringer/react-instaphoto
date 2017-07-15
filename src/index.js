import 'babel-polyfill'; // For Redux-Saga
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  hashHistory
} from 'react-router';

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import reducer from './reducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// Components
import Layout from './components/layout';
import { HomeContainer } from './components/home';
import { DetailContainer } from './components/detail';
import { AddContainer } from './components/add';

import '../dist/css/style.css';

// Filestack API required to set a key
filepicker.setKey("AFyNGJ89gSkmVSLGgqopIz");

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f // Connect to Redux DevTools
  )
);
sagaMiddleware.run(rootSaga);

// The 3 paths of the App
const routes = <Route component={Layout}>
  <Route path="/" component={HomeContainer} />
  <Route path="/detail/:id" component={DetailContainer} />
  <Route path="/add" component={AddContainer} />
</Route>;

// Add provider as first component and connect the store to it
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);
