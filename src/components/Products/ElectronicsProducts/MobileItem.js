import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation';

const MobileItem = () => {
    const[mobileItems, setMobileItems] = useState([]);

    // console.log(mobileItems);

    useEffect(()=>{
            fetch('https://corp.glbpowerplant.com/api/homepageProducts')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setMobileItems(data.data);
            })
    },[])

    return (
        <div>
            <Navigation></Navigation>
            <h1 className='text-center my-10 text-bold text-4xl'>Mobile Items</h1>

           <div className='grid grid-cols-3 gap-2 flow-col auto-cols-max md:auto-cols-min'>
            <div>

            </div>
            <div style={{width:"70%"}} className='col-start-2 col-span-4'>
            {
                mobileItems.map(item=>
                    <div className="card lg:card-side bg-yellow-50 shadow-xl">
                    <img style={{ width: '300px' }} src={item.product_images[0].product_image_value} alt="Product" />
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold">{item.product.product_name}</h2>
                        <div className="product-info">
                            <p className='text-start text-gray-600'>
                                Price: ${item.product.product_actual_price}
                            </p>
                            <p className='text-start text-green-500'>
                                Discount: ${item.product.product_discount_percentage}
                            </p>
                            <p className='text-start text-blue-500'>
                                Min Buy Quantity: {item.product.product_min_buy_quantity} pieces
                            </p>
                        </div>
                        <div>
                            <p>{item.ratings}</p>

                        </div>
                        <div className="card-actions mt-4 flex justify-between">
                            {/* <p className="text-start text-gray-700">
                                {item.ratings.toFixed(1)} <span className="text-sm text-gray-500">Rating</span>
                            </p> */}
                            <button className="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div>
                
                )
            }
            </div>
            <div>

            </div>
            

           </div>



        </div>
    );
};

export default MobileItem;