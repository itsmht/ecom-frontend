
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ElectronicsItem = () => {
    const[electronics,setElectronics] = useState([]);

    useEffect(()=>{
        fetch('https://corp.glbpowerplant.com/api/homepageProducts')
        .then(res=>res.json())
        .then(data=>{
            console.log(data.data);
            const firstThreeItems = data.data.slice(0, 3);
            setElectronics(firstThreeItems)
        })
        
        

    },[]);
    return (
       <div className='container mx-auto'>
        <h1 className="text-left text-4xl antialiased font-bold my-5">Electronic Items</h1><br/>
        <div className="grid grid-cols-4 gap-x-32 card-normal">
        {electronics.map(item => (
            
            <div className="card w-96 bg-base-100 shadow-xl">
                
              <Link to='/'><img src={item.images[0]} alt="" /></Link>
          <div className="card-body">
            <Link to='/'><h2 className="card-title">{item.title}</h2></Link>
            <p className='text-left'>Price:{item.price}</p>
            <p className='text-left'>
                                Rating:
                                {Array.from({ length: item.rating }, (_, index) => (
                                   <p>ll</p>
                                ))}
                            </p>
          </div>
          </div>
        ))}
         {/* see more */}
       
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} class="card w-70 bg-transparent text-center shadow-xl">
            
      <button style={{width:'50%'}} className="rounded-full p-5 bg-stone-200 text-black font-bold">See more...</button>
    
  </div>



            {/* -- */}
      </div>
     





       </div>
    );
};

export default ElectronicsItem;