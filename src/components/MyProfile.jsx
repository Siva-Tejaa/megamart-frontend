import React from "react";
import { useGetUserDetails } from "../services/hooks/useProfile";
import FallbackUI from "./LoadingIndicator/FallbackUI";

const MyProfile = () => {
  const { data, isLoading, error } = useGetUserDetails();

  if (isLoading) {
    return <FallbackUI />;
  }

  if (error) {
    return (
      <div className="min-h-60 flex items-center justify-center">
        Something Went Wrong
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold text-xl border-b-[1px] border-b-gray-200 pb-1">
        MyProfile
      </div>
      <div className="p-4 flex items-center gap-6 border-[1px] border-gray-200 rounded-md">
        <img
          src={data?.data?.data?.profileImage}
          className="rounded-full w-32 h-32"
          alt="user image"
        />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 font-bold text-xl">
            <p>{data?.data?.data?.firstName}</p>
            <p>{data?.data?.data?.lastName}</p>
          </div>
          <div>{data?.data?.data?.email}</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 border-[1px] border-gray-200 rounded-md">
        <div className="font-bold text-xl">Personal Information</div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 flex-col w-[100%] laptop:flex-row laptop:w-[100%]">
            <label className="flex flex-col gap-1 w-[100%]">
              <span className="font-bold">First Name</span>
              <input
                value={data?.data?.data?.firstName}
                className="bg-[#f5f5f6] outline-none leading-6 w-[100%] text-[#81858F] p-2 pl-4 border border-solid border-[#f5f5f6] rounded-sm"
                disabled
              />
            </label>
            <label className="flex flex-col gap-1 w-[100%]">
              <span className="font-bold">Last Name</span>
              <input
                value={data?.data?.data?.lastName}
                className="bg-[#f5f5f6] outline-none leading-6 w-[100%] text-[#81858F] p-2 pl-4 border border-solid border-[#f5f5f6] rounded-sm"
                disabled
              />
            </label>
          </div>
          <div className="flex gap-2 flex-col w-[100%] laptop:flex-row laptop:w-[100%]">
            <label className="flex flex-col gap-1 w-[100%]">
              <span className="font-bold">Email</span>
              <input
                value={data?.data?.data?.email}
                className="bg-[#f5f5f6] outline-none leading-6 w-[100%] text-[#81858F] p-2 pl-4 border border-solid border-[#f5f5f6] rounded-sm"
                disabled
              />
            </label>
            <label className="flex flex-col gap-1 w-[100%]">
              <span className="font-bold">Mobile Number</span>
              <input
                value={data?.data?.data?.mobileNumber}
                className="bg-[#f5f5f6] outline-none leading-6 w-[100%] text-[#81858F] p-2 pl-4 border border-solid border-[#f5f5f6] rounded-sm"
                disabled
              />
            </label>
          </div>
        </div>
        <div>
          <span className="font-bold">Account Created At: </span>{" "}
          {new Date(data?.data?.data?.createdAt)?.toLocaleString("en-US", {
            timeZone: "UTC",
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
