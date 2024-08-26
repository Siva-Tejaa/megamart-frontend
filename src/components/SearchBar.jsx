import React from "react";

const SearchBar = () => {
  return (
    <div className="m-5 flex items-center justify-center laptop:hidden">
      <input
        type="text"
        placeholder="Search for products, brands and more..."
        className="outline-none leading-6 w-96 text-[#81858F] p-2 pl-4 border-[1.5px] border-solid border-[#E4E4E4] rounded-l-sm"
      />
      <button className="px-3 py-[7.4px] border-[1.5px] border-solid border-[#E4E4E4] border-l-0 rounded-r-sm text-[#3466E8] font-bold">
        Search
      </button>
    </div>
  );
};

export default React.memo(SearchBar);
