import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./screens/Loading";
import { Homes } from "./screens/Homes";
import Referrals from "./screens/Referrals";
import Earn from "./screens/Earn";
import Daily from "./screens/Rank";
import Airdrop from "./screens/Wallet";


//Redux Actions and Selectors
import { setTopUsers } from "./store/slice/topUsersSlice";
import { setUser } from "./store/slice/userSlice";
import { setShowMessage, selectShowMessage } from "./store/slice/messageSlice";
import { selectUser } from "./store/slice/userSlice";
import { selectCalculate } from "./store/slice/calculateSlice";
import { AppDispatch, RootState } from "./store/store";  
import { useDispatch, useSelector } from "react-redux";
import BottomNav from "./components/BottomNav";
import { ToastContainer } from "react-toastify";

function App() {
 
  const dispatch = useDispatch<AppDispatch>();

  // Selectors
  const user = useSelector((state: RootState) => selectUser(state));
  const calculate = useSelector((state: RootState) => selectCalculate(state));
  const message = useSelector((state: RootState) => selectShowMessage(state));
 
  return (
  <BrowserRouter>
   {/* {user && calculate && <BottomNav />} */}
  { <BottomNav />}
      <ToastContainer
        style={{
          width: "calc(100% - 40px)",
          maxWidth: "none",
          left: "20px",
          right: "20px",
          top: "20px",
          height: "20px",
        }}
        toastStyle={{
          minHeight: "20px",
          padding: "0px 10px",
          paddingBottom: "4px",
          backgroundColor: message?.color || "#00c000",
          color: "white",
          borderRadius: "6px",
          marginBottom: "4px",
        }}
      />
    <Routes>
      <Route path="*" element={<Loading />} />
      <Route path="/" element={<Homes />} />
      <Route path="/referrals" element={<Referrals />} />
       <Route path="/earn" element={<Earn />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/airdrops" element={<Airdrop />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
