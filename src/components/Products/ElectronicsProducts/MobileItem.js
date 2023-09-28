import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Shared/Footer/Footer';
import BannerHome from '../../Home/Banner/BannerHome';
import FilterProducts from '../FilterProducts/FilterProducts';

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const MobileItem = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [mobileItems, setMobileItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('https://corp.glbpowerplant.com/api/homepageProducts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMobileItems(data.data);
            })
    }, []);


  
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // const displayedItems = mobileItems.slice(startIndex, endIndex);
    const displayedItems = filteredProducts.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <Navigation></Navigation>
            <h1 className='text-center my-10 text-bold text-4xl'>Mobile Items</h1>

            <div className='grid grid-cols-3 gap-2 flow-col auto-cols-max md:auto-cols-min'>


                <div>
                <FilterProducts filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}></FilterProducts>


                </div>




                <div style={{ width: "70%", marginBottom: '10px' }} className='col-start-2 col-span-4'>
                   <div  style={{marginBottom:'20px'}}>
                   <BannerHome></BannerHome>
                   </div>


                {
                FilterProducts &&
     
                    <div>
                    {displayedItems.map(item =>
                        <div className="card lg:card-side bg-yellow-50 shadow-xl mb-10" key={item.id}>
                            <img style={{ width: '300px' }} src={item.images[0]} alt="Product" />
                            <div className="card-body">
                                <h2 className="card-title text-xl font-bold">{item.title}</h2>
                                <div className="product-info">
                                    <p className='text-start text-gray-600'>
                                        Price: ${item.price}
                                    </p>
                                    <p className='text-start text-green-500'>
                                        Discount: ${item.discountPercentage}
                                    </p>
                                    <p className='text-start text-blue-500'>
                                        Stock: {item.stock} pieces
                                    </p>
                                </div>
                                <div className="card-actions mt-2 flex justify-between">
                                    <p className='text-left'>
                                        Rating:
                                        {Array.from({ length: 5 }, (_, index) => {
                                            if (index < Math.floor(item.rating)) {
                                               
                                                return <FontAwesomeIcon icon={faStar} key={index} style={{ color: 'gold' }} />;
                                            } else if (index === Math.floor(item.rating)) {
                                                
                                                return (
                                                    <span key={index}>
                                                        <FontAwesomeIcon  icon={faStarHalfAlt} style={{ color: 'gold' }} />
                                                    </span>
                                                );
                                            } else {
                                                
                                                return <FontAwesomeIcon icon={faStar} key={index} style={{ color: 'white' }} />;
                                            }
                                        })}
                                    </p>
                                </div>
                                <button className="btn btn-warning">Buy</button>
                            </div>
                        </div>
                    )}

</div>

                                    }






                </div>
                <div></div>
            </div>

            {/* Pagination controls */}
       
<div className="flex justify-center mt-4 mb-10">
    {currentPage > 1 && (
        <button className="btn btn-accent mr-2" onClick={() => handlePageChange(currentPage - 1)}>
            Previous
        </button>
    )}
    {Array.from({ length: Math.ceil(mobileItems.length / ITEMS_PER_PAGE) }, (_, index) => (
        <button
            key={index}
           
            className={`btn ${currentPage === index + 1 ? 'btn-warning' : 'btn-primary'} mr-2`}
            onClick={() => handlePageChange(index + 1)}
        >
            {index + 1}
        </button>
    ))}
    {endIndex < mobileItems.length && (
        <button className="btn btn-accent" onClick={() => handlePageChange(currentPage + 1)}>
            Next
        </button>
    )}
</div>
<Footer></Footer>
        </div>
    );
};

export default MobileItem;
