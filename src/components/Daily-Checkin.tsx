import flash from '@/assets/flash.png'

const DailyCheckIn = () => {
  return (
<div className=' mx-[70px] text-white mt-5'>
        <h1 className=' text-2xl font-medium'>Daily Checkin</h1>
        <div className=' flex my-5 justify-between p-5 rounded-xl bg-gray-dark'>
            <div className='flex items-center gap-3 '>
              <img src={flash} alt=" daily" className='w-10 h-10 rounded-full' />
              <div>
                <p className=''>Daily Check In</p>
                <small>Next Claim in 12hr</small>
              </div>
            </div>
            <div className='flex items-center'>
                  <button className=' bg-gradient-to-r from-blue-light to-blue-medium px-5 py-2 rounded-xl'>
                    claim
                  </button>
            </div>
        </div>
      </div>
  )
}

export default DailyCheckIn