import '../App.css'
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import renshop from '../assets/logo/renshop.png'
import HamburgerMenu from "./HamburgerMenu"
import { Search, ShoppingCart } from 'lucide-react'
import FooterContent from './footer/Footer'



const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([])
  const [cartItem, setCartItem] = useState([])
  const navigate = useNavigate();

  const menuItems = [
      {label: 'Home', href: '/'},
      {label: 'Shop', href: '/shop'},
      {label: 'About', href: '/about'},
  ]
  const addToCart = () => {
    setCartItem();
  }
  const handleCartClick = () => {
    navigate('cart')
  }
  useEffect(() => {
    let isMounted = true;
    function fetchProduct() {
        fetch(`https://fakestoreapi.com/products/`, { mode: "cors" })
        .then((response) => response.json())
        .then((response) => { 
            if (isMounted) {
                setData(response.slice(0,20))
            }
        })
        .catch((error) => console.error(error));
    }
    fetchProduct()
    return () => {
        isMounted = false
    }
    }, []);
  const handleMenuClick = () => {
      setIsOpen(!isOpen)
  }


  return(
      <div className='grid'>
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
                              <button onClick={() => handleCartClick()}>
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
            <Outlet context={{data, cartItem}} />
        </main>
        <FooterContent />
      </div>
  )
}


export default App
