import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Navbar from './components/Navbar/Navbar';
const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products/*' element={<Catalog />} />
        </Routes>
    </BrowserRouter>
);

export default Router;