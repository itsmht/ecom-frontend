import React from 'react';

const Menubar = () => {
    return (
        <div className='my-8' style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{ width: "80%" }} className="bg-zinc-300 p-4 rounded-lg text-black text-center">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4  pb-4">
                    <div>
                        <h4>Free Delivery</h4>
                        <p>From 275 AED</p>
                    </div>
                    <div>
                        <h4>Free Delivery</h4>
                        <p>From 275 AED</p>
                    </div>
                    <div>
                        <h4>Free Delivery</h4>
                        <p>From 275 AED</p>
                    </div>
                    <div>
                        <h4>Free Delivery</h4>
                        <p>From 275 AED</p>
                    </div>
                    <div>
                        <h4>Free Delivery</h4>
                        <p>From 275 AED</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;
