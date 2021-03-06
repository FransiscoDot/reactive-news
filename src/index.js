import React from 'react';
import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Provider} from "react-redux";
import {getBreakingNews} from "./actions/newsActions";
import configureStore from "./store/configureStore";
import App from "./App";

const store = configureStore();

store.dispatch(getBreakingNews());

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById("root"),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./index", () => {
    render(App);
  });
}
