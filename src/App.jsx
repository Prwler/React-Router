import { Link, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Book from "./Pages/Book.jsx"
import BookList from "./Pages/BookList.jsx"
import Contact from "./Pages/Contact.jsx"
import NewBook from "./Pages/NewBook.jsx"
import NotFound from "./Pages/NotFound.jsx"
function App() {
  
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Book />}/>
        <Route path="/booklist" element={<BookList />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/NewBook" element={<NewBook />}/>
        <Route path="/NotFound" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
