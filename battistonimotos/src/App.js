import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Navbar/ItemDetailContainer';

function App() {


  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Productos destacados"} />} />
          <Route path='category/:categoryId' element={<ItemListContainer greeting={"Productos filtrados"} />} /> 
          <Route path='Detail/:productId' element={<ItemDetailContainer />} />        
        </Routes>
      </BrowserRouter>
    </div>

  );

}

export default App;
