

const HamburgerMenu = ({ handleMenuClick, isOpen }) => {
    return (
            <button
            onClick={() => handleMenuClick()}
            className="md:hidden p-2 rounded-md ml-auto"
            aria-expanded={isOpen}
            aria-label="Main menu"
            >
                <div className="space-y-2">
                    <span className={`block w-6 h-0.5 bg-white transform transition duration-300 delay-150 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transform transition duration-300 delay-150 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transform transition duration-300 delay-150 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
            </button>
            
    )
}

export default HamburgerMenu