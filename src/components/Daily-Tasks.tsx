import youtube from '@/assets/youtube.png'

const DailyTasks = () => {
  return (
    <div className=' mx-[70px] text-white mt-5'>
        <h1 className=' text-2xl font-medium'>Daily Tasks</h1>
        <div className=' flex my-5 justify-between p-5 rounded-xl bg-gray-dark'>
            <div className='flex items-center gap-3 '>
              <img src={youtube} alt=" task" className='w-10 h-10 rounded-full' />
              <div>
                <p className=''>Subscribe Youtube</p>
                <small>get +2000 coins</small>
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

export default DailyTasks