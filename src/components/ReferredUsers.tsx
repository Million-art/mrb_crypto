import { FaLink, FaTelegramPlane, FaShareAlt } from 'react-icons/fa'; // Copy Link icon
const ReferredUsers = () => {
  return (
    <div className="text-white w-full justify-center">
        <h1 className=" text-2xl font-semibold text-center">Referral Link</h1>
        <div className="mx-5 my-3 w-full flex justify-center">
          https://www.google.com/3209434
        </div>
        <div className="flex justify-evenly items-center">
      <div className="text-center flex flex-col ">
        <button className="bg-gray-medium rounded p-3 flex items-center justify-center">
          <FaLink className="text-white text-xl" />  
        </button>
        <h1 className="mt-2 text-sm text-white">Copy Link</h1>
      </div>
      <div className="text-center flex flex-col ">
        <button className="bg-gray-medium rounded p-3 flex items-center justify-center">
          <FaTelegramPlane className="text-white text-xl" />  
        </button>
        <h1 className="mt-2 text-sm text-white">Send</h1>
      </div>
      <div className="text-center flex flex-col ">
        <button className="bg-gray-medium rounded p-3 flex items-center justify-center">
          <FaShareAlt className="text-white text-xl" /> 
        </button>
        <h1 className="mt-2 text-sm text-white">Share</h1>
      </div>
    </div>
        {/* referred users list */}

    </div>
  )
}

export default ReferredUsers