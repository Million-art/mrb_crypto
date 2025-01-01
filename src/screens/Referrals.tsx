import ReferredUsers from '@/components/ReferredUsers'
import referralImage from '../assets/friends.png'
import gift from '../assets/gift.png'

const Referrals = () => {
  return (
    <section className=" mb-24">
        <div className=' flex flex-col justify-center items-center  mt-8'>
          <img src={referralImage} alt="Referrals" className=' w-16 h-16'  />
        </div>
        <div className=' mt-2 flex flex-col text-white items-center'>
          <h1 className='text-center text-2xl font-semibold'>
              Invite Your Friends
          </h1>
          <small>
              Earn rewards when your friends join us!
          </small>
        </div>
        <div className='flex flex-col gap-5 mx-12 my-5 '>
            <div className='rounded-xl p-2 flex gap-2 w-full items-center  text-white bg-gray-medium'>
              <span className='w-fit'>
                <img src={gift} alt="gift" className='w-10 h-10' />
              </span>
              <span className=''>
                <h1 className='text-2xl font-semibold'>Invite a friend</h1>
                <small>+1000 coins</small>
              </span>
            </div>
            <div className='rounded-xl p-2 flex gap-2 w-full items-center  text-white bg-gray-medium'>
              <span className='w-fit'>
                <img src={gift} alt="gift" className='w-10 h-10' />
              </span>
              <span className=''>
                <h1 className='text-2xl font-semibold'>Invite a friend</h1>
                <small>+1000 coins</small>
              </span>
            </div>
        </div>
        {/* referred user list */}
        <ReferredUsers />
    </section>
  )
}

export default Referrals