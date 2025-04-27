import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { useGetAllProducts } from "../services/hooks/useProducts";
import FallbackUI from "../components/LoadingIndicator/FallbackUI";

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  const { data, isLoading, error } = useGetAllProducts();

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
      <div className="p-2 flex flex-start justify-around gap-2 flex-wrap">
        {data?.data?.data?.products?.map((product) => (
          <div key={product?._id} className="shadow-lg rounded-md p-2 w-40">
            <img src={product?.productImage} className="w-32 h-36" />
            <p className="text-base font-bold">{product?.title}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default React.memo(HomePage);
