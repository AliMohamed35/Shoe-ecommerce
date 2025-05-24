import About from "./components/About"
import Hero from "./components/Hero"
import ResponsiveAppBar from "./components/Nav"
import MostSearch from "./components/MostSearch"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Hero />
      <About />
      <MostSearch />
      <Footer />
    </>
  )
}

export default App
