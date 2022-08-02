import React from "react";

const Details = () => {
  return (
    <>
      <div className="flex">
        <div className="w-64 h-44 bg-lime-500">
          <h1>Kiri</h1>
        </div>
        <div>
          <div className="flex">
            <h1 className="text-white">Kanan</h1>
            <button>Buy Now</button>
          </div>
          <div className="w-full h-36 bg-amber-500">Images</div>
          <div>
            <h1 className="text-white">Family</h1>
            <h3 className="text-white">Rp. 158.000</h3>
            <p className="text-white">
              One of the most beloved rivalries in history is reignited when
              Jerry moves into New York Citys finest hotel on the eve of “the
              wedding of the century,” forcing the events desperate planner to
              hire Tom to get rid of him. The ensuing cat and mouse battle
              threatens to destroy her career, the wedding and possibly the
              hotel itself. But soon, an even bigger problem arises: a
              diabolically ambitious staffer conspiring against all three of
              them. An eyepopping blend of classic animation and live action,
              Tom and Jerrys new big screen adventure stakes new ground for the
              iconic characters and forces them to do the unthinkable...work
              together to save the day.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
