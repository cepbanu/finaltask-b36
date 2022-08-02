import React from "react";
// import "../img/deadpool.png"

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-82 mx-32 px-28 py-8 flex flex-wrap">
        <div className="text-white">
          <h1 className="font-bold text-5xl text-[#A52620]">DEAD</h1>
          <h1 className="font-bold text-5xl">POOL</h1>
          <br />
          <h3 className="font-medium">Action</h3>
          <h3 className="font-medium">Rp. 99.000</h3>
          <br />
          <p className="font-light text-sm">
            Hold onto your chimichangas, folks. From the studio that brought you
            all 3 Taken films comes the block-busting, fourth-wall-breaking
            masterpiece about Marvel Comics sexiest anti-hero! Starring Gods
            perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL
            is a giddy slice of awesomeness packed with more twists than
            Deadpools enemies intestines and more action than prom night.
            Amazeballs!
          </p>
          <br />
          <button>
            <div className="bg-[#CD2E71] py-2 px-8 text-white rounded-md font-semibold">
              Buy Now
            </div>
          </button>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-white font-bold">List Film</h1>
        </div>
        <br />
        <div className="grid grid-cols-6 w-full gap-12">
          <div className="w-40 h-48 bg-lime-500">Film 1</div>
          <div className="w-40 h-48 bg-lime-500">Film 2</div>
          <div className="w-40 h-48 bg-lime-500">Film 3</div>
          <div className="w-40 h-48 bg-lime-500">Film 4</div>
          <div className="w-40 h-48 bg-lime-500">Film 5</div>
          <div className="w-40 h-48 bg-lime-500">Film 6</div>
        </div>
      </div>
    </>
  );
};

export default Home;
