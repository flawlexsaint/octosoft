import MedicalSumamary from "./tabs/medical-summary";

const Content = () => {
  return (
    <>
      <nav>
        <div className="nav nav-tabs tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link text-muted fw-bold active"
            data-bs-toggle="tab"
            data-bs-target="#medical-summary"
          >
            Medical Summary
          </button>
          <button
            className="nav-link text-muted fw-bold"
            data-bs-toggle="tab"
            data-bs-target="#cdss"
          >
            CDSS
          </button>
          <button
            className="nav-link text-muted fw-bold"
            id="nav-DI-tab"
            data-bs-toggle="tab"
            data-bs-target="#labs"
          >
            Labs
          </button>
          <button
            className="nav-link text-muted fw-bold"
            data-bs-toggle="tab"
            data-bs-target="#growth-chart"
          >
            Growth Chart
          </button>
          <button
            className="nav-link text-muted fw-bold"
            data-bs-toggle="tab"
            data-bs-target="#tinj"
          >
            T.Inj
          </button>
          <button
            className="nav-link text-muted fw-bold"
            data-bs-toggle="tab"
            data-bs-target="#encounter"
          >
            Encouters
          </button>
          <button
            className="nav-link text-muted fw-bold"
            data-bs-toggle="tab"
            data-bs-target="#patience-doc"
          >
            Patience Doc
          </button>
          <button
            className="nav-link text-muted fw-bold"
            data-bs-toggle="tab"
            data-bs-target="#flowsheet"
          >
            FlowSheets
          </button>
          <button
            className="nav-link text-muted fw-bold"
            data-bs-toggle="tab"
            data-bs-target="#notes"
          >
            Notes
          </button>
        </div>
      </nav>
      <div className="tab-content tab_bg p-2" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="medical-summary"
          role="tabpanel"
        >
          <MedicalSumamary />
        </div>
        <div className="tab-pane fade" id="cdss" role="tabpanel">
          <MedicalSumamary />
        </div>
        <div className="tab-pane fade" id="labs" role="tabpanel">
          <MedicalSumamary />
        </div>
        <div className="tab-pane fade" id="growth-chart" role="tabpanel">
          <MedicalSumamary />
        </div>
        <div className="tab-pane fade" id="tinj" role="tabpanel">
          <MedicalSumamary />
        </div>
        <div className="tab-pane fade" id="encounter" role="tabpanel">
          <MedicalSumamary />
        </div>
        <div className="tab-pane fade" id="patience-doc" role="tabpanel">
          <MedicalSumamary />
        </div>
        <div className="tab-pane fade" id="flowsheet" role="tabpanel">
          <MedicalSumamary />
        </div>
        <div className="tab-pane fade" id="notes" role="tabpanel">
          <MedicalSumamary />
        </div>
      </div>
    </>
  );
};

export default Content;
