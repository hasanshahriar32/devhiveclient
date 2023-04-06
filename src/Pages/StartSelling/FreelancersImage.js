import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FreelancersImage = () => {
    const [Persons, setParsons] = useState([])

    useEffect(() => {
        fetch('FackData.json')
            .then(res => res.json())
            .then(data => setParsons(data))
    }, [])


    return (
        <div className='px-5'>
            <h1 className='text-center text-3xl font-bold mt-20 px-5'>Join our growing freelance community</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-5  gap-5'>

                {
                    Persons.map(person => <>
                        <Link to="#" class="group relative block bg-black">
                            <img
                                alt="Developer"
                                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div class="relative p-4 sm:p-6 lg:p-8">
                                <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                                    Developer
                                </p>

                                <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
                                <div class="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p class="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                    )
                }
            </div>
        </div>
    );
};

export default FreelancersImage;