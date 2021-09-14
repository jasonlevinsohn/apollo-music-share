import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { ApolloProvider } from "@apollo/react-hooks";

import { darkTheme } from "./theme";
import client from "./graphql/client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
