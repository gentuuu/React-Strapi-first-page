import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import OffersDetails  from "./components/Offer/OffersDetails";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Offers from "./components/Offer/Offers";
import Blogs from "./components/Blog/Blogs";
import BlogsDetails from "./components/Blog/BlogsDetails";
import Projects from "./components/Project/Projects";
import ProjectsDetails  from "./components/Project/ProjectsDetails";
import Footer from "./components/Footer";


// initialize apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>

            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/offer" element={<Offers />} />
              <Route path="/offer/:id" element={<OffersDetails />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogsDetails />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectsDetails />} />
            </Routes>
            <Footer />


      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;