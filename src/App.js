import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProducts from './pages/inventory/listProducts';
import NavBar from './components/common/NavBar';
import CreateProduct from './pages/inventory/createProduct';
import DetailProduct from './pages/inventory/detailProduct';
import EditProduct from './pages/inventory/editProduct';
import DeleteProduct from './pages/inventory/deleteProduct';
import SellingProducts from './pages/selling/sellingProducts';
import Orders from './pages/selling/Orders';
import DetailCard from './components/selling/DetailCard';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next'
import englishTranslation from './translation/en';
import spanishTranslation from './translation/es';


function App() {
  i18n.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: 'en', // language to use by default
    resources: {
      en: englishTranslation,
      es: spanishTranslation
    }
  });
  return (
    <I18nextProvider i18n={i18n}>
      <NavBar />
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<ListProducts />} />
          <Route path="/products" element={<ListProducts />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/products/detail/:id" element={<DetailProduct />} />
          <Route path="/products/delete/:id" element={<DeleteProduct />} />
          <Route path="/selling" element={<SellingProducts />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/detail/:orderId" element={<DetailCard />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
