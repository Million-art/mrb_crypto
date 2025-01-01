import rank from "@/assets/rank.png"
import LeaderBoard from "@/components/LeaderBoard"

const Rank = () => {
  return (
    <section className="mb-24">
        <div className=' rounded-xl mt-5 bg-gradient-to-t from-blue-medium to-blue-light h-[150px] flex justify-between items-center mx-12 px-5 '>
        <aside className=" w-fit text-white">
            <h1 className='text-3xl font-semibold'>Rank</h1>
            <p className='text-sm'>Complete tasks and earn rewards!</p>
        </aside>
        <aside className=" flex justify-end">
            <img src={rank} alt="" className='w-32 h-32' />
        </aside>
      </div>
      {/* leader board */}
       <LeaderBoard />
    </section>
  )
}

export default Rank