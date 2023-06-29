import logo from './logo.svg';
import './App.css';
import productFrom from './component/ProductForm';
import ProductTable from './component/ProductTable';
import {Routes,Route,Navigate} from 'react-router-dom'

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<ProductTable/>}></Route>
        <Route path="/form" element={<productFrom/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
