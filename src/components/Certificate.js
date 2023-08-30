import React from 'react';

export function Certificate() {
  return (
    <div>
      <label htmlFor="my-modal-4" className="btn btn glass">View Certificate</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div>
            <img src={require("../images/MockCertif.png")} alt="Certificate" />
          </div>
        </label>
      </label>
    </div>
  );
}

export default Certificate;