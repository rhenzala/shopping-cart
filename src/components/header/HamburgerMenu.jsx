

const HamburgerMenu = ({ menuItems, handleMenuClick, isOpen }) => {
    return (
        <div>
            <button
            onClick={() => handleMenuClick()}
            aria-expanded={isOpen}
            aria-label="Main menu"
            >
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
    )
}

export default HamburgerMenu