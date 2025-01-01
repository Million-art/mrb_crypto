import React from 'react';
import cat from '@/assets/cat.jpg'
const Profile: React.FC = () => {
  return (
    <div className=" bg-gradient-to-t from-blue-medium via-blue-light to-blue-medium rounded-lg shadow-lg w-full">
      {/* Top Section: Avatar and User Details */}
      <div className="flex -z-10 items-center justify-start ">
        {/* User Avatar */}
        <div className="w-36 h-36  -translate-x-[30px] translate-y-5 rounded-full overflow-hidden bg-blue">
           
          <img
            src= {cat}
            alt="User Avatar"
            className="w-24 h-24 bg-gradient-to-t rounded-full  float-end ml-10 mt-6"
          />
        </div>
        {/* User Name */}
        <div className="mt-10 -ml-6 ">
          <h1 className="text-white text-lg font-light">Hello</h1>
          <h2 className="text-white text-3xl font-semibold">@Milla021</h2>
        </div>
      </div>

      {/* Bottom Section: Rank and Balance */}
      <div className="mx-10 py-2 relative flex justify-between items-center">
        <p className="text-white text-md ">
          Rank: <br /><span className="font-semibold">8/10</span>
        </p>
        <p className="text-white text-lg">
         <span className="font-semibold text-2xl">$2,000</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
