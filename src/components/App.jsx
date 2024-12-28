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
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
      {label: 'Home', href: '/'},
      {label: 'Shop', href: '/shop'},
      {label: 'About', href: '/about'},
  ]
    const handleCardClick = (id) => {
        navigate(`/shop/${id}`)
    }
  const addToCart = (item) => {
    setCartItem(prevItem => [...prevItem, item]);
  }
  const handleCartClick = () => {
    navigate('cart')
  }
  const deleteCartItem = (id) => {
    setCartItem((prevItem) =>
        prevItem.filter((item) => item.id !== id)
    )
  }
  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }
  const handleSearch = (e) => {
    const value = e.target.value 
    setSearchTerm(value)

    if (value.trim() === '') {
        setSuggestions([])
        setShowSuggestions(false)
        return
    }
    const filteredSuggestions = data.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase())
    )
    setSuggestions(filteredSuggestions)
    setShowSuggestions(true)
  }
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title)
    handleCardClick(suggestion.id)
    setSuggestions([])
    setShowSuggestions(false)
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
                            <button>
                                <Search color="#f8fafc" size={24}/>
                            </button>
                            <div className='relative w-40'>
                                <input 
                                type="search"
                                placeholder="Search" 
                                className="px-2 rounded-md"
                                value={searchTerm}
                                onChange={handleSearch}
                                onBlur={() => {
                                    setTimeout(() => setShowSuggestions(false), 200)
                                }}
                                onFocus={() => {
                                    if (searchTerm) setShowSuggestions(true)
                                }}
                                />
                                {showSuggestions && suggestions.length > 0 && (
                                    <ul className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto text-sm">
                                    {suggestions.map((suggestion) => (
                                        <li
                                        key={suggestion.id}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                        {suggestion.title}
                                        </li>
                                    ))}
                                    </ul>
                                )}
                            </div>
                              
                          </div>
                          <div>
                              <button 
                              onClick={() => handleCartClick()}
                              className='relative'
                              >
                                <span className='bg-black text-white text-[8px] font-bold absolute top-0 w-4 rounded-sm'>{cartItem.length === 0 ? '' : cartItem.length}</span>
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
            <Outlet context={{data, cartItem, addToCart, deleteCartItem, handleCardClick}} />
        </main>
        <FooterContent />
      </div>
  )
}


export default App
