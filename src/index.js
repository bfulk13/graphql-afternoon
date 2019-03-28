import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
    uri: "http://localhost:3001/graphql"
})

client
    .query({
        query: gql`
            {
                rates(currency: "USD"){
                    currency
                }
            }
        `
    })
    .then(result => console.log(result));

const App = () => (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
    </ApolloProvider>
  );
  
  render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
