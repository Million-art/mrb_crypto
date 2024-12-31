// Profile.tsx
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className=" p-6 rounded-lg shadow-lg">
      <div className="flex">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
          {/* Placeholder for user image */}
          <span className="text-white text-2xl">
            <img src='' alt='' className=' rounded-full bg-primary' />
          </span>
        </div>
        <div className="ml-4">
          <h1 className="text-xl font-sans text-text">Hello</h1>
          <h2 className="text-2xl font-sans text-secondary">@Meetkirubel</h2>
        </div>
      </div>
      <div className="mt-4 flex justify-between px-10">
        <p className="text-lg text-text">Rank: <span className="font-semibold">8/10</span></p>
        <p className="text-lg text-text">Balance: <span className="font-semibold">$2,000</span></p>
      </div>
    </div>
  );
};

export default Profile;