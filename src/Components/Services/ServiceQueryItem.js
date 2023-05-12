import React from 'react';
import { Link } from 'react-router-dom';

const ServiceQueryItem = ({ service }) => {
    console.log(service);
    const { _id, slugTitle, developerInfo, serviceImage, price, category } = service || {};



    return (
        <Link to={`/services/slug/${_id}`}>
            <div>
                <div className="hero mx-auto lg:w-1/2">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={serviceImage?.img1} className=" lg:max-w-xs rounded-lg shadow-2xl " alt='' />
                        <div >
                            <h1 className="text-2xl  font-semibold font-serif text-gray-600 ml-8 ">{slugTitle}</h1>

                            <div >
                                <div className="card-body bg-state-300 mb-6">
                                    <div className='flex'>
                                        <div className="avatar-group -space-x-6">
                                            <div className="avatar ">
                                                <div className="w-12">
                                                    <img src={developerInfo?.photoURL} alt='' />
                                                </div>
                                            </div>

                                        </div>
                                        <div className='pl-4'>
                                            <h3 className='text-left font-bold'>{developerInfo?.username}</h3>
                                            <h2 className='font-medium'>{category?.name}</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-actions justify-between items-center border-t-2 pt-4">
                                    <div>
                                        <div className="rating flex items-center">
                                            <input type="radio" name="rating-1" className="mask text-sm mask-star base-400 bg-warning" />
                                            <h2 className='text-lg pl-1'>4.8</h2>
                                            <h3 className='text-lg pl-1'>(35)</h3>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <h2 className='text-sm flex items-center font-medium pt-1 pr-1' >STARTING AT</h2>
                                        <h3 className='text-2xl font-semibold'>${price}</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default ServiceQueryItem;