import Avatar from "../../assets/avatar1.jpg";
import { useDispatch } from "react-redux";
import { toggle } from "../../toolkit/reducers/app-reducer";

const Topbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="topbar border-bottom">
        <div className="d-flex align-items-center justify-content-between p-3">
          <div className="d-flex align-items-center">
            <span
              className="material-icons text-muted"
              onClick={() => dispatch(toggle())}
            >
              menu
            </span>
            <h5 className="mb-0 ms-3 text-muted">CleoEMR</h5>
          </div>
          <div className="d-flex align-items-center">
            <span className="material-icons me-3 text-muted">apps</span>
            <img src={Avatar} className="topbar_avatar" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
