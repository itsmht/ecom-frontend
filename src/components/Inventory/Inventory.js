import React, { useEffect, useState } from 'react'
import Navigation from '../Shared/Navigation'
import Searchbar from '../Shared/Searchbar'

export const Inventory = () => {
    const[items,setItems] = useState([]);
    console.log(items);

    useEffect(()=>{
        fetch('https://corp.glbpowerplant.com/api/homepageProducts')
        .then(res=>res.json())
        .then(data=>{
            setItems(data.data);
            // console.log(data.data);
        })
        
       

    },[]);
  return (
    <div>
        <Navigation></Navigation>
        {/* <Searchbar></Searchbar> */}
        
        <div style={{
            marginLeft:'20px',
            marginRight:'20px'
        }}>
            <p className='text-left text-bold text-xl'>Inventory</p>

            {
                    items.map((item) => (
                        <>
                        <div className='flex justify-evenly justify-items-center content-center' key={item.id}>
                            <img width='107px' src={item.thumbnail} alt=''/>
                            <p className='text-bold text-xl mt-7'>{item.title}</p>
                            <p className='text-xl mt-7'> Avilable {item.stock}</p>
                           
                            <button className="btn btn-warning mt-7" onClick={()=>document.getElementById('my_modal_5').showModal()}>Sell</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                            <div className='flex'>
                            <img width='225px' src={item.thumbnail} alt=''/>
                                <div className='mt-7'>
                                <h3 className="font-bold text-2xl">{item.title}</h3>
                                <p className="pt-2">Available {item.stock}</p>
                                </div>
                            </div>


                                <div className="modal-action">

                                <form method="dialog">
                                   
                                    <button className="btn">Cancle</button>
                                </form>
                                </div>
                            </div>
                            </dialog>
                        </div>
                        <div className="divider"></div> 
                        </>
                        
                    ))
                    
                }

        </div>
    </div>
  )
}
