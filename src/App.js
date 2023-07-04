import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/admin'
import AddProduct from './components/addProduct';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Admin}></Route>
        <Route path='/addproduct' element={AddProduct}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
