import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from '../slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log("Cart is here :", cart);
  return (
    <>
    <div className=" h-screen flex flex-wrap gap-5 justify-center items-center mx-20 my-10">
            {
                cart.map((product) => {
                    return (
                    <>
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
                                <button className='bg-red-500 w-full font-bold rounded-lg py-1' onClick={()=> dispatch(removeFromCart({
                                  id: product.id,
                                  qty: 1,
                                  image:product.image,
                                  price:product.price,
                                  title:product.title,
                                  description:product.description,
                                  category:product.category,
                                }))}>Remove From Cart</button>
                            </div>
                        </div>
                    </>
                    )
                })
            }

        </div>
    </>
  )
}

export default Cart