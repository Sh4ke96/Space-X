import Card from "./components/card/card";
import Header from "./components/header/header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Card />
      </div>
    </ApolloProvider>
  );
}

export default App;
