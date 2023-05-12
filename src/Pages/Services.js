import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import {
  useGetQueryPriceQuery,
  useGetServiceQuery,
  useSortingServicePriceQuery,
} from "../features/api/Services/ServicesApi";
import ServiceItem from "../Components/Services/ServiceItem";
import { FaVideo } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterPrice, getPrice } from "../features/api/Services/ServiceSlice";

const Services = () => {
  const [service, setService] = useState(
    "https://devhiveserver.vercel.app/service"
  );
  const [serviceLoad, setServiceLoad] = useState([]);

  useEffect(() => {
    fetch(service)
      .then((res) => res.json())
      .then((data) => setServiceLoad(data));
  }, [service, setService]);

  // const [price, setPrice] = useState("");
  // const { data: serviceData } = useGetServiceQuery();
  // const { data: queryPrice } = useGetQueryPriceQuery(price);
  // console.log(queryPrice);

  return (
    <div className="container mx-auto">
      <div>
        <div className="lg:ml-0 mt-10 ml-6">
          <h3 className="text-4xl font-bold text-left">Our Services</h3>
          <div className="flex items-start lg:flex-row flex-col pt-4 ">
            <h4 className="text-lg text-left font-medium text-slate-400  flex  items-start">
              Get a beautiful website design that people love to engage with.
            </h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtu.be/p8bHoWgLVig"
            >
              <button className=" border-2 rounded-xl px-2 text-lg font-semibold text-slate-700 lg:ml-2 flex">
                <span className="px-1 pt-1.5">
                  <FaVideo></FaVideo>
                </span>
                How Devhive Works
              </button>
            </a>
          </div>
        </div>
        <div className="mt-8 flex">
          <div className="mr-10">
            <select
              onClick={(e) => setService(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option selected disabled>
                Service Option
              </option>
              <option value="https://devhiveserver.vercel.app/service/query/Programming & Tech">
                Web Design
              </option>
              <option value="https://devhiveserver.vercel.app/service/query/Graphics & Design">
                Graphic Design
              </option>
              <option value="https://devhiveserver.vercel.app/service/query/Digital Marketing">
                Digital Marketing
              </option>
            </select>
          </div>

          <div className="mr-10">
            <select
              onClick={(e) => setService(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option selected disabled>
                Budget
              </option>
              <option value="https://devhiveserver.vercel.app/service/filterPrice/50">
                $5 - $50
              </option>
              <option value="https://devhiveserver.vercel.app/service/filterPrice/200">
                $50 - $200
              </option>
              <option value="https://devhiveserver.vercel.app/service/filterPrice/1000">
                $200 - $1000
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols gap-6 ">
        {serviceLoad?.map((data) => (
          <ServiceItem key={data._id} data={data}></ServiceItem>
        ))}
      </div>
      <div className="btn-group my-10 mb-10 flex justify-center">
        <button className="border-2 border-slate-700 py-1 px-3 mx-1">
          <MdOutlineArrowBackIos />
        </button>
        <button className="border-2 border-slate-700 py-1 px-3 mx-1">1</button>
        <button className="border-2 border-slate-700 py-1 btn-primary px-3 mx-1">
          2
        </button>
        <button className="border-2 border-slate-700 py-1 px-3 mx-1">3</button>
        <button className="border-2 border-slate-700 py-1 px-3 mx-1">4</button>
        <button className="border-2 border-slate-700 py-1 px-3 mx-1">
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Services;
