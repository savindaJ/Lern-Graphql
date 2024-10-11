// App.js or index.js
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client'; 
import PropertyListings from './components/PropertyListings';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Real Estate App</h1>
        <PropertyListings />
      </div>
    </ApolloProvider>
  );
}

export default App;
