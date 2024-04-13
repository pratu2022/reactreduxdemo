import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from '../slices/productSlice';
import { addToCart } from '../slices/cartSlice';

const Home = () => {

    const dispatch = useDispatch();

    const products = useSelector((state) => state.product.products);
    // console.log("Products are here:", products)

    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(addProducts(data));
    };

    useEffect(() => {
        getData();
    }, []);

    return <>
        <div className=" h-screen flex flex-wrap gap-5 justify-center items-center mx-20 my-10">
            {
                products.map((product) => {
                    return (<>
                        <div className='flex flex-col border-2 w-[250px] h-[320px] justify-center items-center rounded-md hover:scale-105 hover:shadow-md hover:cursor-pointer transition-all ease-in-out' key={product.id}>

                            <img className=" h-[250px] object-contain p-3 overflow-hidden" src={product.image} alt="" srcset="" />
                            <div className='p-3 flex flex-col gap-1'>
                                <h3 className='font-bold'>{product.title.slice(0,10)}</h3>
                                <span className='text-sm text-gray-400 font-semibold flex justify-between'>
                                <span>{product.category}</span>
                                <span className='text-yellow-500'>₹{product.price}</span>
                                </span>
                                <p className='text-sm'>{product.description.slice(0, 50)}
                                </p>
                                {/* <h3 className='text-right'>{product.price}</h3> */}
                                <button className='bg-yellow-500 w-full font-bold rounded-lg py-1' onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
                            </div>
                        </div>
                    </>)
                })
            }

        </div>
    </>;

};

export default Home;