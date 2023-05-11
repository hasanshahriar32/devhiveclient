import React from "react";
import { useLocation } from "react-router-dom";
import ServiceQueryItem from './ServiceQueryItem';
 

const SingleServiceQuery = () => {
  const {state} = useLocation()
  const { data } = state;
  console.log( data );
  return (<div>{
                data?.map(serviceItem => <ServiceQueryItem key={serviceItem._id} service={serviceItem}></ServiceQueryItem>)
            }</div>);
};

export default SingleServiceQuery;
