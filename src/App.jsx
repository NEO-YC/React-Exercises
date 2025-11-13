import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import ProductList from "./components/ProductList";
import BooksList from "./components/BooksList";
import MovieList from "./components/MovieList";
import UseEffect1 from "./components/UseEffect1";
import UseEffect2 from "./components/UseEffect2";
import UseEffect3 from "./components/UseEffect3";
import Userlist1 from "./components/Userlist1";
import { createContext } from "react";

function App() {


  return (
<> 
   


    <div style={{ textAlign: "center" }}>
      <BrowserRouter>
        <Header />
        <Routes>
      
          <Route path="/Products" element={<ProductList/>} />
          <Route path="/Books" element={<BooksList/>} />
          <Route path="/Student" element={<StudentList/>} />
          <Route path="/movies" element={<MovieList/>} />
          <Route path="/useeffect" element={<UseEffect1/>} />
          <Route path="/useeffect2" element={<UseEffect2/>} />
          <Route path="/useeffect3" element={<UseEffect3/>} />
          <Route path="/userlist1" element={<Userlist1/>} />
      
        </Routes>
      </BrowserRouter>
    </div>
  </>
  );
}


export default App;


