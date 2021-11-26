import Google_Icon from "../../assets/google.png";
import Calendar from "../../assets/calendar.png";
import Drive from "../../assets/drive.png";
import Gmail from "../../assets/gmail.png";
import Map from "../../assets/pin.png";

const MobileNav = () => {
  return (
    <>
      <ul className="nav nav-pills align-items-center mt-3 justify-content-evenly mobile_navigation">
        <li className="nav-item mx-auto">
          <button className="nav-link active" data-bs-toggle="pill">
            <img src={Google_Icon} className="sidebar_icon" alt="Google Icon" />
            <p className="mb-0 text-black-50">CloeEMR</p>
          </button>
        </li>
        <li className="nav-item mx-auto">
          <button className="nav-link" data-bs-toggle="pill">
            <img src={Drive} className="sidebar_icon" alt="Drive" />
            <p className="mb-0 text-black-50">Drive</p>
          </button>
        </li>
        <li className="nav-item mx-auto">
          <button className="nav-link" data-bs-toggle="pill">
            <img src={Map} className="sidebar_icon" alt="Maps" />
            <p className="mb-0 text-black-50">Maps</p>
          </button>
        </li>
        <li className="nav-item mx-auto">
          <button className="nav-link" data-bs-toggle="pill">
            <img src={Calendar} className="sidebar_icon" alt="Calendar" />
            <p className="mb-0 text-black-50">Calendar</p>
          </button>
        </li>
        <li className="nav-item mx-auto">
          <button className="nav-link" data-bs-toggle="pill">
            <img src={Gmail} className="sidebar_icon" alt="Gmail" />
            <p className="mb-0 text-black-50">Gmail</p>
          </button>
        </li>
      </ul>
    </>
  );
};

export default MobileNav;
