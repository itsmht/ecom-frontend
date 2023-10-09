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
        <Searchbar></Searchbar>
        <div className="divider"></div> 
        <div style={{
            marginLeft:'20px',
            marginRight:'20px'
        }}>
            <p className='text-left text-bold text-xl'>Inventory</p>

            {
                    items.map((item) => (
                        <div key={item.id}>
                            {item.title}
                        </div>
                    ))
                }

        </div>
    </div>
  )
}
