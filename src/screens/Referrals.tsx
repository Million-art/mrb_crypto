import ReferredUsers from '@/components/ReferredUsers';
import referralImage from '../assets/friends.png';
import gift from '../assets/gift.png';

const Referrals = () => {
  return (
    <section className="mb-24">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mt-8">
        <img src={referralImage} alt="Referrals" className="w-12 h-12 sm:w-16 sm:h-16" />
      </div>
      <div className="mt-2 flex flex-col text-white items-center">
        <h1 className="text-center text-lg sm:text-2xl font-semibold">
          Invite Your Friends
        </h1>
        <small className="text-sm sm:text-base">
          Earn rewards when your friends join us!
        </small>
      </div>
      {/* Reward Cards */}
      <div className="flex flex-col gap-3 mx-6 my-4 sm:mx-12 sm:my-5">
        <div className="rounded-xl p-2 flex gap-2 w-full items-center text-white bg-gray-800">
          <span className="w-fit">
            <img src={gift} alt="gift" className="w-8 h-8 sm:w-10 sm:h-10" />
          </span>
          <span>
            <h1 className="text-lg sm:text-2xl font-semibold">Invite a friend</h1>
            <small className="text-xs sm:text-base">+1000 coins</small>
          </span>
        </div>
        <div className="rounded-xl p-2 flex gap-2 w-full items-center text-white bg-gray-800">
          <span className="w-fit">
            <img src={gift} alt="gift" className="w-8 h-8 sm:w-10 sm:h-10" />
          </span>
          <span>
            <h1 className="text-lg sm:text-2xl font-semibold">Invite a friend</h1>
            <small className="text-xs sm:text-base">+5000 coins</small>
          </span>
        </div>
      </div>
      {/* Referred User List */}
      <ReferredUsers />
    </section>
  );
};

export default Referrals;
