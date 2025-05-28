import Home from "../pages/Home"
import Formen from "../pages/For_men"
import Cart from "../pages/Cart"
import Forwomen from "../pages/For_women"
import ResponsiveAppBar from "./components/Nav"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Contact from "../pages/Contact"

const MainLayout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      {children}
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />

        <Route path="/formen" element={
          <MainLayout>
            <Formen />
          </MainLayout>
        } />

        <Route path="/forwomen" element={
          <MainLayout>
            <Forwomen />
          </MainLayout>
        } />

        <Route path="/cart" element={
          <MainLayout>
            <Cart />
          </MainLayout>
        }></Route>

        <Route path="/contact" element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
