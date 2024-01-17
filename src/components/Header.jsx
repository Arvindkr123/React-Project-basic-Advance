import React from "react";

const Header = () => {
  return (
    <div className="header-table">
      <h2 className="header-table__title">Header</h2>
      <form className="header-table__form">
        <div className="upper-header">
          <div className="form-control">
            <label htmlFor="vrNo">VR NO</label>
            <input type="number" name="" id="vrNo" />
          </div>
          <div className="form-control">
            <label htmlFor="vrDate">VR Date</label>
            <input type="date" name="" id="vrDate" />
          </div>
          <div className="form-control">
            <label htmlFor="status">Status</label>
            <input type="text" name="" id="status" />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="Account-Name">Account Name</label>
          <input type="text" name="" id="Account-Name" />
        </div>
        <div className="form-control">
          <label htmlFor="Account-Amount">Account Amount</label>
          <input type="text" name="" id="Account-Amount" />
        </div>
      </form>
    </div>
  );
};

export default Header;
