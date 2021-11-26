const OverviewTab = () => {
  return (
    <>
      <div className="m-3">
        <h6 className="text-muted">
          Maciej Zakoscielny, 39, M as of 31/02/2020
        </h6>
      </div>
      <div className="m-1 tab_bg p-2 rounded">
        <select
          className="form-select border-0 bg-transparent fw-bold"
          aria-label="Default select example"
        >
          <option defaultValue>Global Alert</option>
          <option value="1">Regional Alert</option>
        </select>
        <div className="form-check pt-2 ms-2 border-top">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            defaultChecked
          />
          <label className="form-check-label fw-bolder" htmlFor="flexCheckDefault">
            Fasting
          </label>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between p-3">
        <h6 className="fw-bold mb-0 w-75">CCM</h6>
        <select
          className="form-select border-0"
          aria-label="Default select example"
        >
          <option defaultValue>Time Completed: 00:21</option>
          <option value="1">Time Completed: 01:22</option>
        </select>
      </div>
      <div className="m-1 tab_bg p-2 rounded">
        <select
          className="form-select border-0 bg-transparent fw-bold"
          aria-label="Default select example"
        >
          <option defaultValue>Advanced Directives</option>
          <option value="1">Directives</option>
        </select>
        <div className="form-check pt-2 ms-2 border-top">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            defaultChecked
          />
          <label className="form-check-label fw-bolder" htmlFor="flexCheckDefault">
            LW <span className="ms-4 text-muted">Living Will</span>
          </label>
        </div>
      </div>
      <div className="m-1 tab_bg p-2 mt-4 rounded">
        <select
          className="form-select border-0 bg-transparent fw-bold"
          aria-label="Default select example"
        >
          <option defaultValue>Problem List</option>
          <option value="1">Headache</option>
        </select>
        <div className="d-flex align-items-center ps-2">
          <span className="material-icons add_icon">add</span>
          <span className="text-danger me-3 ms-3">9</span>
          <span>498.2</span>
          <span className="text-muted ms-3">COPD</span>
        </div>
        <div className="d-flex align-items-center ps-2 mt-3">
          <span className="material-icons add_icon">add</span>
          <span className="me-3 ms-3 text-success">10</span>
          <span>j33.2</span>
          <span className="text-muted ms-3">Hypertension</span>
        </div>
        <div className="d-flex align-items-center ps-2 mt-3">
          <span className="material-icons add_icon">add</span>
          <span className="me-3 ms-3 text-success">10</span>
          <span>i19</span>
          <span className="text-muted ms-3">Hyperthermia</span>
        </div>
        <div className="d-flex align-items-center ps-2 mt-3">
          <span className="material-icons add_icon">add</span>
          <span className="me-3 ms-3 text-success">10</span>
          <span>E23.3</span>
          <span className="text-muted ms-3">Diabetes</span>
        </div>
      </div>
    </>
  );
};

export default OverviewTab;
