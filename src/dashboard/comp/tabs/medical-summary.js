import CollectionTab from "./collection-tab";
import OverviewTab from "./overview-tab";

const MedicalSumamary = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-7">
          <div className="bg-white p-3 rounded-top stack d-flex align-items-center justify-content-between">
            <h4 className="fw-bold">Maciej Zakoscienly, 39, M</h4>
            <div className=" ms-3">
              <span className="text-muted fw-bold">Status</span>
              <div className="form-check form-check-inline ms-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Open
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Reviewed
                </label>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-white mt-1 pt-4 pb-4">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="custom_dropdown d-flex align-items-center border ps-2 rounded">
                  <span className="text-muted">Provider</span>
                  <span className="material-icons text-muted ms-3">search</span>
                  <select
                    className="form-select border-0 text-muted"
                    aria-label="Default select example"
                  >
                    <option defaultValue>Elijah Manning</option>
                    <option value="john doe">John Doe</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="custom_dropdown d-flex align-items-center border ps-2 rounded">
                  <span className="text-muted w-50">Assigned to</span>
                  <span className="material-icons text-muted ms-3">search</span>
                  <select
                    className="form-select border-0 text-muted"
                    aria-label="Default select example"
                  >
                    <option defaultValue>New Scot Clinic</option>
                    <option value="john doe">UBTH</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="custom_dropdown d-flex align-items-center border ps-2 rounded">
                  <span className="text-muted">Facility</span>
                  <span className="material-icons text-muted ms-3">search</span>
                  <select
                    className="form-select border-0 text-muted"
                    aria-label="Default select example"
                  >
                    <option defaultValue>New Scot Clinic</option>
                    <option value="john doe">LUTH</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="custom_dropdown d-flex align-items-center border ps-2 rounded">
                  <span className="text-muted w-50">Laboratory</span>
                  <span className="material-icons text-muted ms-3">search</span>
                  <select
                    className="form-select border-0 text-muted"
                    aria-label="Default select example"
                  >
                    <option defaultValue>New Scot Clinic</option>
                    <option value="john doe">UBTH</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    High Priority
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    Cancelled
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                    disabled
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox3">
                    Future Order
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                    disabled
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox3">
                    Inhouse
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid collection_bg pt-4 pb-4">
            <ul
              className="nav nav-pills mb-3 collections_tab"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-muted d-flex align-items-center active"
                  data-bs-toggle="pill"
                  data-bs-target="#order-collection"
                >
                  <span className="material-icons me-2">layers</span>
                  <span>Order & Collection</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link d-flex align-items-center text-muted"
                  data-bs-toggle="pill"
                  data-bs-target="#result"
                >
                  <span className="material-icons me-1">schedule</span>
                  <span>Result</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-muted d-flex align-items-center"
                  data-bs-toggle="pill"
                  data-bs-target="#attachment"
                >
                  <span className="material-icons me-1">attach_file</span>
                  <span>Attachment</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-muted d-flex align-items-center"
                  data-bs-toggle="pill"
                  data-bs-target="#graph"
                >
                  <span className="material-icons me-1">signal_cellular_alt</span>
                  <span>Graph</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-muted d-flex align-items-center"
                  data-bs-toggle="pill"
                  data-bs-target="#progress-report"
                >
                  <span className="material-icons me-1">tour</span>
                  <span>Progress Report</span>
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane bg-white rounded fade show active"
                id="order-collection"
                role="tabpanel"
              >
                <CollectionTab />
              </div>
              <div
                className="tab-pane fade bg-white rounded"
                id="result"
                role="tabpanel"
              >
                <CollectionTab />
              </div>
              <div
                className="tab-pane fade bg-white rounded"
                id="attachment"
                role="tabpanel"
              >
                <CollectionTab />
              </div>
              <div
                className="tab-pane fade bg-white rounded"
                id="graph"
                role="tabpanel"
              >
                <CollectionTab />
              </div>
              <div
                className="tab-pane fade bg-white rounded"
                id="progress-report"
                role="tabpanel"
              >
                <CollectionTab />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5">
          <div className="bg-white rounded">
            <nav>
              <div className="nav nav-tabs tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link text-muted fw-bold active"
                  data-bs-toggle="tab"
                  data-bs-target="#overview"
                >
                  Overview
                </button>
                <button
                  className="nav-link text-muted fw-bold"
                  data-bs-toggle="tab"
                  data-bs-target="#drtlm"
                >
                  DRTLM
                </button>
                <button
                  className="nav-link text-muted fw-bold"
                  data-bs-toggle="tab"
                  data-bs-target="#history"
                >
                  History
                </button>
              </div>
            </nav>
            <div className="tab-content bg-white p-2" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="overview"
                role="tabpanel"
              >
                <OverviewTab />
              </div>
              <div className="tab-pane fade" id="drtlm" role="tabpanel">
                <OverviewTab />
              </div>
              <div className="tab-pane fade" id="history" role="tabpanel">
                <OverviewTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalSumamary;
