import { useState } from "react"
import renshop from '../../assets/logo/renshop.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        {label: 'Home', href: '#'},
        {label: 'Home', href: '#'},
    ]
    return (
        <header>
            <div className="logo">
                <img src={renshop} alt="Renshop logo" />
            </div>
            <div className="navBar">
            <nav>
            {menuItems.map(item =>(
                <a key={item.label}
                href={item.href}>
                    {item.label}
                </a>
            ))}
            </nav>
            </div>
        </header>
    )
}

export default Header