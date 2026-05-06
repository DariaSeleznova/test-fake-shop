import Header from './Components/Header/Header.jsx'
import Bestsellers from './Pages/Bestsellers/Bestsellers.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Item from './Pages/Item/Item.jsx'
import Category from './Pages/Category/Category.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Checkout from './Pages/Checkout/Checkout.jsx'
import Footer from './Components/Footer/Footer.jsx'

import './App.css'

function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Bestsellers /> },
      { path: 'item/:id', element: <Item /> },
      { path: 'category/:slug', element: <Category /> },
      { path: 'cart', element: <Cart /> },
      { path: 'contact', element: <Contact /> },
      { path: 'checkout', element: <Checkout /> }
    ]
  }
]);

function App() {
  return (<CartProvider>
    <RouterProvider router={router} />
  </CartProvider>)
}

export default App
