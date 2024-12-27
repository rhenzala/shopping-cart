
import '../App.css'
import { Link, useParams } from "react-router-dom";
import { useState } from "react"
import renshop from '../assets/logo/renshop.png'
import HamburgerMenu from "./HamburgerMenu"
import { Search, ShoppingCart } from 'lucide-react'
import HomePage from './main/Home'
import FooterContent from './footer/Footer'
import ShopPage from './main/Shop';
import AboutPage from './main/About';




const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([])
  const { name } = useParams();

  const handleData = (arr) => {
    setData(arr)
  }

  const menuItems = [
      {label: 'Home', href: '/'},
      {label: 'Shop', href: '/shop'},
      {label: 'About', href: '/about'},
  ]

  const handleMenuClick = () => {
      setIsOpen(!isOpen)
  }

  const renderPage = () => {
    switch (name) {
      case 'shop':
        return <ShopPage data={data} handleData={handleData} />;
      case 'about':
        return <AboutPage />;
      case undefined: 
        return <HomePage />;
      default:
        return <HomePage />;
    }
  };
  return(
      <div>
        <header className="bg-red w-full fixed top-0 z-50">
          <div className="w-full px-4">
              <div className="flex items-center justify-between">
                  <div className="logo">
                      <img 
                      src={renshop}
                      className="h-16" 
                      alt="Renshop logo" />
                  </div>
                  <div className="flex gap-4 items-center">
                      <div className="hidden sm:hidden md:flex space-x-8 ml-auto">
                          <nav>
                          {menuItems.map(item =>(
                              <Link key={item.label}
                              to={item.href}
                              className="text-white hover:underline-offset-8 px-3 py-2"
                              >
                                  {item.label}
                              </Link>
                          ))}
                          </nav>
                      </div>
                      <div className="flex gap-4">
                          <div className="md:flex gap-1 hidden sm:hidden">
                              <input 
                              type="search"
                              placeholder="Search" 
                              className="px-2 rounded-md"
                              />
                              <button>
                                  <Search color="#f8fafc" size={24}/>
                              </button>
                          </div>
                          <div>
                              <button>
                                  <ShoppingCart color="#f8fafc" size={24}/>
                              </button>
                          </div>
                      </div>
                      <HamburgerMenu
                      handleMenuClick={handleMenuClick}
                      isOpen={isOpen}
                      />
                  </div>
              </div>
              <div className={`bg-red md:hidden absolute top-16 left-0 right-0 bg-gray-800 transform transition-all duration-300 delay-150 ease-in-out origin-top ${
            isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}> 
                  <nav  className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                  {menuItems.map((item) =>(
                      <Link key={item.label}
                      to={item.href}
                      className='block text-white px-3 py-2 rounded-md'
                      >
                          {item.label}
                      </Link>
                  ))}
                  </nav>
              </div>
          </div>
        </header>
        <main>
            {renderPage()}
        </main>
        <FooterContent />
      </div>
  )
}


export default App
