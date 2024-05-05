import { FiArrowUp } from "react-icons/fi";

function RowHeader () {
      return (
            <div className="row header">
                  <div className="col col5"></div>
                  <div className="col col25">
                        <p>Basic Info</p>
                        <span><FiArrowUp size={12} /></span>
                  </div>
                  <div className="col col20">
                        <p>Company</p>
                        <span><FiArrowUp size={12} /></span>
                  </div>
                  <div className="col col20">
                        <p>Phone</p>
                        <span><FiArrowUp size={12} /></span>
                  </div>
                  <div className="col col20">
                        <p>City</p>
                        <span><FiArrowUp size={12} /></span>
                  </div>
                  
                  <div className="col col10"></div>
            </div>
      );
}

export default RowHeader;