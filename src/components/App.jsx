import { Routes, Route, Link } from "react-router-dom";

import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';


export const App = () => {
  return ( 
  <Layout>
        <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/movies">Movies</Link>

      </nav>
      <Routes>
        <Route path="/" element={"sdadsaddsadasdaa"} />
        <Route path="/movies" element={"sdadsada"} />
        <Route path="/movies:movieId" element={"sdadsada"} >
          <Route path="cast" element={"dsadasda"} />
          <Route path="reviews" element={"dsadasda"} />
        </Route>
        <Route path="*" element={"dsadsada"} />
      </Routes>
    <GlobalStyle />
  </Layout>)
};
