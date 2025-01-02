import flash from '@/assets/flash.png';

const DailyCheckIn = () => {
  return (
    <div className="mx-6 sm:mx-[70px] text-white mt-5">
      <h1 className="text-xl sm:text-2xl font-medium">Daily Checkin</h1>
      <div className="flex my-5 justify-between p-4 sm:p-5 rounded-xl bg-gray-dark">
        <div className="flex items-center gap-3">
          <img src={flash} alt="daily" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
          <div>
            <p className="text-sm sm:text-base">Daily Check In</p>
            <small className="text-xs sm:text-sm">Next Claim in 12hr</small>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-gradient-to-r from-blue-light to-blue-medium px-4 py-2 sm:px-5 sm:py-2 rounded-xl">
            claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyCheckIn;
