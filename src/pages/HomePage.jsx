import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { useGetAllProducts } from "../services/hooks/useProducts";
import FallbackUI from "../components/LoadingIndicator/FallbackUI";
import { FaStar } from "../assets/iconImports";
import { getRatingColor } from "../utils/utils";

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  const { data, isLoading, error } = useGetAllProducts();

  console.log("products data", data?.data);

  if (isLoading) {
    return <FallbackUI />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[100svh]">
        Something Went Wrong 😟
      </div>
    );
  }

  return (
    <>
      <Header />
      <SearchBar />
      <div className=" text-center font-extrabold">Under Development</div>
      <div className="p-2 flex flex-start justify-around gap-4 flex-wrap">
        {data?.data?.data?.products?.map((product) => (
          <div
            key={product?._id}
            className="shadow-[2px_7px_13px_0px_rgba(0,0,0,0.2)] rounded-md p-2 max-w-52 flex flex-col gap-1"
          >
            <img src={product?.productImage} className="w-52 h-56 bg-white" />
            <p className="text-lg font-bold line-clamp-1">{product?.title}</p>
            <p className="flex items-center gap-1">
              <span
                className={`items-center gap-1 px-[6px] rounded-sm font-bold  inline-flex ${getRatingColor(
                  product?.rating
                )}`}
              >
                ({product?.rating}) <FaStar />
              </span>
              <span className="text-gray-500">
                {product?.totalRatings} Ratings
              </span>
            </p>
            <p>
              {product?.isAvailable
                ? `In Stock (${product?.stock})`
                : "Stock Not Available"}
            </p>
            <p className="flex items-center gap-1">
              <span className="text-xl font-bold flex items-center">
                ₹ {product?.price}
              </span>
              {product?.discountPercentage > 0 && (
                <span className="text-[#388e3c]">
                  {product?.discountPercentage}%off
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default React.memo(HomePage);
