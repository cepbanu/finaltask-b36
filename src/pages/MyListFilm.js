import React from "react";

const MyListFilm = () => {
  return (
    <>
      <div>
        <h1 className="text-white font-medium">MyListFilm</h1>
      </div>
      <br />
      <div className="grid grid-cols-6 w-full gap-12">
        <div className="w-36 h-44 bg-lime-500">Film 1</div>
        <div className="w-36 h-44 bg-lime-500">Film 2</div>
        <div className="w-36 h-44 bg-lime-500">Film 3</div>
        <div className="w-36 h-44 bg-lime-500">Film 4</div>
        <div className="w-36 h-44 bg-lime-500">Film 5</div>
        <div className="w-36 h-44 bg-lime-500">Film 6</div>
      </div>
    </>
  );
};

export default MyListFilm;
