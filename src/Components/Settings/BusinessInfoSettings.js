import React from "react";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { getAuth } from "firebase/auth";
import app from "../../Configs/Firebase.config";
import { useSelector } from "react-redux";
const BusinessInfoSettings = () => {
 
  const auth = getAuth(app);  
  const user = useSelector((state) => state.login.userData); 
     


  return (
      <div className="bg-white  w-full lg:w-[750px]">
    <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h3 className="text-base font-semibold leading-7 text-gray-900">BusinessInformation</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.displayName}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user?.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Business Assest</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About Business</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Devhive is a one kind of service platform for a newcomer jobe or work hunter.
               This can help them to get work from here also can be buyer and seller with along business.
            </dd>
          </div>
          
        </dl>
      </div>
    </div>
  )


    
  
  
  
    
};

export default BusinessInfoSettings;
