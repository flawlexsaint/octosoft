import Profile from "./comp/profile";
import Sidebar from "./comp/sidebar";
import Topbar from "./comp/topbar";
import { useSelector } from "react-redux";
import MobileNav from "./comp/mobile-nav";

const Dashboard = () => {
  const appState = useSelector((state) => state.appstate);
  return (
    <>
      <div className="wrapper">
        <Topbar />
        <div className="d-flex">
          {appState.isNavOpen && <Sidebar />}
          <div className="w-100 scroll overlay">
            {appState.isNavOpen && <MobileNav />}
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
