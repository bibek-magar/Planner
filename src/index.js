import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import firebase from "firebase/app";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";

import thunk from "redux-thunk";

import rootReducer from "./store/reducers";
import firebaseConfig from "./config/firebaseConfig";

import * as serviceWorker from "./serviceWorker";

const initialState = {};

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares), reduxFirestore(firebaseConfig))
);

const rrfProps = {
  firebase,
  config: {
    userProfile: "users"
  },
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
