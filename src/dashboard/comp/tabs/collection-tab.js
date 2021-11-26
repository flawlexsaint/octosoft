const CollectionTab = () => {
  return (
    <>
      <div className="p-3">
        <div className="d-flex border-bottom align-items-center justify-content-between">
          <h6>Orders & Collection</h6>
          <a href="#" className="text-decoration-none sm-hidden">
            Edit Details
          </a>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <p className="text-muted">
              Accession Id: <span className="text-dark">38784</span>
            </p>
            <p className="text-muted">
              Order Date: <span className="text-dark">23/02/2020</span>
            </p>
            <p className="text-muted">
              Requesting Physician:
              <span className="text-dark">Elijah Manning</span>
            </p>
          </div>
          <div className="col-lg-6">
            <p className="text-muted">
              Reference Id: <span className="text-dark">XJM23</span>
            </p>
            <p className="text-muted">
              Collection Date: <span className="text-dark">01/03/2020</span>
            </p>
          </div>
        </div>
        <div className="d-flex border-top pt-4 align-items-center justify-content-between">
          <h6>Lipid Panel</h6>
        </div>
      </div>
    </>
  );
};

export default CollectionTab;
