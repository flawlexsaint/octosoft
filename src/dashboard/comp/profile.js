import Avatar from "../../assets/avatar.jpg";
import Content from "./content";

const Profile = () => {
  return (
    <>
      <div className="wrapper mt-4">
        <div className="container-fluid">
          <div className="row border-bottom pb-4">
            <div className="col-lg-6">
              <div className="d-flex align-items-center stack">
                <img src={Avatar} className="profile_img" alt="" />
                <div className="ms-3">
                  <h5 className="fw-bold">Maciej Zakoscienlny</h5>
                  <p className="text-muted">Pomorska, 55/9, Wroclaw, Poland</p>
                  <span className="text-muted">03/06/1956</span>
                  <span className="text-muted ms-3 me-3">+49 7235 39 595</span>
                  <span className="text-muted">maciejz@gmail.com</span>
                  <div className="mt-3 sm-center">
                    <ul
                      className="nav nav-pills collections_tab"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link text-primary"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                        >
                          <span>Alergies</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link text-primary active"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                        >
                          <span>Billing Alert</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6 col-xl-3 sm-margin">
                  <div className="note_card rounded yellow p-3">
                    <span>-wt: 22/02/2020</span>
                    <p className="fw-bold mb-0">140lbs</p>
                    <p className="mb-0">-PCP, Elijah Manning</p>
                    <p className="mb-0">-Lang: English</p>
                    <p className="mb-0">-Trans: No</p>
                  </div>
                </div>
                <div className="col-6 col-xl-3 sm-margin">
                  <div className="note_card rounded green p-3">
                    <span>Ins: Medical B</span>
                    <p className="mb-0">
                      Acc: <span className="fw-bold">$3323</span>
                    </p>
                    <p className="mb-0 mt-4 fw-bold">Ref Barret Moving</p>
                  </div>
                </div>
                <div className="col-6 col-xl-3 sm-margin">
                  <div className="note_card rounded lilac p-3">
                    <span>Very Talkative</span>
                  </div>
                </div>
                <div className="col-6 col-xl-3 sm-margin">
                  <div className="note_card rounded peach p-3">
                    <span>Had a panic attack recently</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Content />
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Profile;
