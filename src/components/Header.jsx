import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Header = () => {
    const { tempItems}=useSelector(state=>state.cart);
    return (
        <header className="text-white body-font bg-purple-600 sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    
                    <h1 className="ml-3 font-extrabold text-3xl cursor-pointer hover:text-yellow-100"><span className="text-red-600 italic">E</span>-commerce</h1>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-gray-900 font-extrabold text-xl">Home</Link>
                </nav>
                <Link to="/cart">
                <button className="inline-flex items-center bg-purple-600 border-0 py-1 px-3 focus:outline-none hover:bg-purple-500 hover: text-white rounded text-base mt-4 md:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" text-white mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg><h1 className='text-white'>{tempItems.length}</h1>
                </button>
                </Link>
                
            </div>
        </header>



    )
}

export default Header
