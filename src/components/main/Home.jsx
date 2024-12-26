import homeImage from '/src/assets/onlineshop.jpg'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
    const navigate = useNavigate();

    const handleShopNow = () => {
        navigate('/shop')
    }
    return (
        <div className='mt-16 text-white'>
            <section className='h-[calc(100vh-4rem)] w-full relative'>
                <div className='p-8 flex flex-col gap-8 absolute z-10'>
                    <h1 className="text-4xl font-sans font-semibold drop-shadow-2xl">Your one-stop shop for amazing products</h1>
                    <button 
                    className='px-3 py-1 text-whitefont-semibold bg-red border-red border border-solid rounded-md w-40'
                    aria-label='Shop now'
                    onClick={handleShopNow}
                    >
                        SHOP NOW
                    </button>
                </div>
                <div className='w-full h-full absolute' >
                    <img 
                    src={homeImage} 
                    alt=""
                    className='h-full w-full object-cover'
                    />
                </div>
            </section>
        
            
        </div>
    )
}

export default HomePage