/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import UploadImages from "./UploadImages";
import React, { useEffect, useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateService() {
  const [imgUrl, setImgUrl] = useState("");
  const [isImgUploading, setIsImgUploading] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [services, setServices] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleEventBlur = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newServices = { ...services };
    newServices[field] = value;
    setServices(newServices);
  };
  console.log(imgUrl);
  console.log(isImgUploading);
  let location = useLocation();
  const from = location.state?.from?.pathname || `/developer-register`;
  const [profile, setProfile] = useState([]);
  const [profileLoading, setProfileLoading] = useState(true);

  const navigate = useNavigate();
  console.log(profile);
  useEffect(() => {
    try {
      setProfileLoading(true)
      const user = async () => {
        const user = localStorage.getItem("jwt");
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        };
        const { data } = await axios.get(
          `https://devhiveserver.vercel.app/developer/singledeveloper/${localStorage.getItem(
            "user_id"
          )}`,

          config
        );
        setProfile(data);
        // console.log(data);
        setProfileLoading(false)
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, []);

    useEffect(() => {
      if (profile.length === 0 &&  profileLoading===false) {
        navigate(from, { replace: true });
      }
    }, [profile]);
  console.log(profile);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://devhiveserver.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
    // setLoading(false);
  }, []);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory, setSelectedCategory]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const slugTitle = services.slugTitle;
    const price = services.price;
    const developerInfo = profile[0];
    const aboutService = services.aboutService;
    const serviceDetails = services.serviceDetails;
    const features = selectedFeature;
    const technology = selected;
    // const selectedCategory = selectedCategory;
    const serviceImage = imgUrl;
    const serviceData = {
      slugTitle,
      price,
      developerInfo,
      aboutService,
      serviceDetails,
      features,
      technology,
      category: selectedCategory,
      serviceImage,
    };
    console.log(serviceData);
    try {
      const user = localStorage.getItem("jwt");
      const config = {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      };
      const response = await axios.post(
        "https://devhiveserver.vercel.app/service",
        serviceData,
        config
      );
      console.log(response);
      navigate(`/developer-profile/${localStorage.getItem("user_id")}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleSelectChange = (e) => {
    const selectedCategoryObject = JSON.parse(e.target.value);
    setSelectedCategory(selectedCategoryObject);
  };
  return (
    <form onSubmit={handleFormSubmit} className="mx-2 mt-3 lg:mx-6">
      <h1 className="text-lx lg:text-3xl font-semibold text-center mb-2">Create an amazing service for your consumers</h1>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="slugTitle"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Slug Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="slugTitle"
                    onBlur={handleEventBlur}
                    id="slugTitle"
                    autoComplete="slugTitle"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Completed wordpress website"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="slugPrice"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Slug Price
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="price"
                    onBlur={handleEventBlur}
                    id="slugPrice"
                    autoComplete="slugPrice"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="ট 99"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="aboutservice"
                  onBlur={handleEventBlur}
                  name="aboutService"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about your slug.
              </p>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Service Details
              </label>
              <div className="mt-2">
                <textarea
                  id="serviceDetails"
                  onBlur={handleEventBlur}
                  name="serviceDetails"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Detailed info about your slug.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </label>

              <UploadImages
                setIsImgUploading={setIsImgUploading}
                setImgUrl={setImgUrl}
              />
            </div>
            <div>
              <label
                htmlFor="technology"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Technology Used
              </label>
              {/* <pre>{JSON.stringify(selected)}</pre> */}
              <TagsInput
                tags={selected}
                value={selected}
                onChange={setSelected}
                name="technology"
                width="w-full"
                required="true"
                placeHolder="enter used technology"
                className="w-full"
              />
              <em>press enter or comma to add new tag</em>
            </div>
            <div>
              <label
                htmlFor="features"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Service Features
              </label>
              {/* <pre>{JSON.stringify(selected)}</pre> */}
              <TagsInput
                tags={selectedFeature}
                value={selectedFeature}
                onChange={setSelectedFeature}
                name="features"
                width="w-full"
                required="true"
                placeHolder="enter features"
                className="w-full"
              />
              <em>press enter or comma to add new feature</em>
            </div>
            <br />
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Service Category
              </label>
              <select
                value={JSON.stringify(selectedCategory)}
                onChange={handleSelectChange}
                className="select select-bordered w-full max-w-xs"
              >
                <option selected value="">
                  Select the category
                </option>
                {categories.map((category) => (
                  <option key={category?._id} value={JSON.stringify(category)}>
                    {category?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={() => navigate(from, { replace: true })}
          className="text-sm btn btn-outline font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        {isImgUploading == false ? (
          <button
            // type="submit"
            onClick={handleSubmit}
            disabled={
              !services.serviceDetails ||
              !services.aboutService ||
              !services.slugTitle ||
              !services.price ||
              selectedFeature.length == 0 ||
              selected.length == 0 ||
              !selectedCategory
            }
            className="rounded-md btn btn-primary  bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        ) : (
          <button
            type="submit"
            disabled="true"
            className="rounded-md btn disabled bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Uploading...
          </button>
        )}
      </div>
    </form>
  );
}
