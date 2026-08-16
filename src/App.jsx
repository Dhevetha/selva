import { useState } from 'react'
import Header from './component/header'
import Footer from './component/footer'
import Home from './component/home'
import About from './component/about'
import Services from './component/services'
import Contact from './component/contact'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home />
      case 'about': return <About />
      case 'services': return <Services />
      case 'contact': return <Contact />
      default: return <Home />
    }
  }

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
    </>
  )
}

export default App