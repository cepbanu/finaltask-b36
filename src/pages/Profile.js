import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="text-white ml-20">
          <h1 className="mb-3 font-bold text-4xl text-white">My Profile</h1>
          <div className="flex">
            <div>
              <img
                className="w-40 h-fit object-cover"
                src={require("../img/profile.png")}
                alt="product"
              />
            </div>
            <div className="ml-6 flex flex-col justify-between">
              <div className="mb-2">
                <h2 className="text-base font-semibold text-[#CD2E71]">
                  Full Name
                </h2>
                <p className="text-sm font-light">Andi</p>
              </div>
              <div className="mb-2">
                <h2 className="text-base font-semibold text-[#CD2E71]">
                  Email
                </h2>
                <p className="text-sm font-light">andigans@gmail.com</p>
              </div>
              <div className="mb-2">
                <h2 className="text-base font-semibold text-[#CD2E71]">
                  Phone
                </h2>
                <p className="text-sm font-light">0821-3456-7891</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white mr-20">
          <h1 className="mb-3 font-bold text-4xl text-white">
            History Transaction
          </h1>
          <div className="bg-[#CD2E71]/40 w-full flex justify-between p-3">
            <div className="flex w-full">
              <div className="basis-1/2 flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white">
                    Tom and Jerry
                  </h3>
                  <p className="text-xs mb-2 text-white">
                    <strong>Saturday,</strong> 14 Juli 2021
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#CD2E71]">
                    Total : 500.000
                  </p>
                </div>
              </div>
              <div className="basis-1/2 justify-end flex flex-col">
                <div className="p-2 bg-[#00FF47]/10 w-full">
                  <p className="text-center text-sm text-[#00FF47]">success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
