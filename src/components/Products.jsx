import { useEffect } from "react"
import { fetchProducts } from "../Redux/productSlice";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import Spineer from "../spineer/Spineer";
import { addedCart } from "../Redux/cartSlice";

const Products = () => {
    const { items, status } = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }

    }, [status])
    if (status === 'loading') return <Spineer />
    if (status === 'failed') return <h1 className="mt-28 p-32 text-center">Failed to load products...</h1>
    return (
        <>
            <Header />
            <section className="text-gray-600 body-font  ">
                <div className="container px-5 py-24 mx-auto ">
                    <h1 className="ml-3 font-extrabold text-3xl hover:text-purple-700 text-center">Top-Products</h1>
                    <div className="flex flex-wrap  justify-center align-middle-m-4 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
                        {
                            items.map((item) => (
                                <div key={item.id} className="  relative m-10 flex w-60 max-w-xs flex-col  overflow-hidden rounded-lg border
                                     border-purple-600 bg-white  transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-400  ">
                                    <div className="relative mx-3 mt-3 flex  overflow-hidden rounded-sm justify-center">
                                        <img className=" object-contain h-40   transition-transform duration-300 ease-in-out hover:scale-110" src={item.image} alt="image" />
                                    </div>
                                    <div className="mt-4 px-5 pb-5">
                                        <h5 className="text-xl tracking-tight text-slate-900">{item.title.substring(0, 11)}</h5>
                                        <div className="mt-2 mb-5 flex items-center justify-between">
                                            <span className="text-3xl font-medium text-slate-900"> <span className="text-red-500">$</span>:{item.price}</span>
                                        </div>
                                        
                                        <div  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 
                                            text-center text-sm font-medium text-white hover:bg-purple-600 focus:outline-none
                                            focus:ring-4focus:ring-blue-300" onClick={()=>dispatch(addedCart(item))} >
                                                <svg xmlns="http://www.w3.org/2000/svg" className=" text-white mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                        </div>
                                        
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
