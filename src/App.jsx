import Home from "../pages/Home"
import Formen from "../pages/For_men"
import Forwomen from "../pages/For_women"
import ResponsiveAppBar from "./components/Nav"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
