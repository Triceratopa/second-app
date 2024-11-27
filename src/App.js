import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Component/MyNav";
import { Container } from "react-bootstrap";
import MyFooter from "./Component/MyFooter";

import MyAlert from "./Component/MyAlert";
import books from "./books/fantasy.json";

import BookList from "./Component/BookList";
import Search from "./Component/Search";

function App() {
  return (
    <div>
      <header>
        <MyNavbar />
      </header>
      <MyAlert />
      <main>
        <Container>
          <Search />
          <h1>Lista Libri</h1>
          <BookList books={books} />
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
