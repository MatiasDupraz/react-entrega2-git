import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemCards/ItemListContainer/ItemListContainer';
import ItemCount from  './components/ItemCards/ItemCount/ItemCount.jsx'
import ItemDetailContainer from './components/ItemCards/ItemDetailContainer/ItemDetailContainer.jsx'
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category/:categoryId' element={<HomePage/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>Error 404: Not Found.</h1>}/>
      </Routes>    
    </BrowserRouter>
  );
}
export default App;
