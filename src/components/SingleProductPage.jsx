import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { FaFacebook, FaInstagram, FaStar, FaTwitter } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { addProduct } from "../redux/Cart.Slice";
import Button from "./common/Button";

const SingleProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  const fetchSingleProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  const AddToCart = () => {
    const item = {
      id: data.id,
      title: data.title,
      image: data.image,
      price: data.price,
      quantity: 1,
    }
    toast.success('Successfully toasted!')
    dispatch(addProduct(item));
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="lg:max-w-[1290px] mx-auto px-6 container  py-24">
        <div className="flex gap-6 items-center">
          <img src={data.image}
            alt="ecommerce"
            className="lg:w-[40%] w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          <div className="w-full">
            <h2 className="text-sm uppercase title-font text-primary tracking-widest">
              {data.category}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              {data.title}
            </h1>
            <div className="flex mb-4 items-center gap-3">
              <span className="flex items-center">
                <FaStar className="fill-blue-600" />
                <FaStar className="fill-blue-600" />
                <FaStar className="fill-blue-600" />
                <FaStar className="fill-blue-600" />
                <FaStar />
              </span>
              <span className="text-gray-700 ml-3">4 Reviews</span>
              <span className="flex gap-2 pl-3 py-2 border-l-2 border-gray-200">
                <Link to={""} className="text-gray-700">
                  <FaFacebook />
                </Link>
                <Link to={""} className="text-gray-700">
                  <FaTwitter />
                </Link>
                <Link to={""} className="text-gray-700">
                  <FaInstagram />
                </Link>
              </span>
            </div>
            <p className="leading-relaxed text-gray-700">
              {data.description}
            </p>
            <div className="flex justify-between mt-3 border-t pt-3 items-center">
              <span className="title-font font-medium text-2xl text-gray-700">
                ${data.price}
              </span>
              <span onClick={AddToCart}>
                <Button btnContent="Add to card" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
