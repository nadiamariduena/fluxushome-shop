import React, { Component } from "react";
import { Link } from "react-router-dom";

const Soon = () => {
  return (
    <React.Fragment>
      {/* <div className="soon-banner">
        <h1>home</h1>
      </div> */}

      <div className="soon-banner">
        <div className="home-banner-container">
          <h1>SOON</h1>
        </div>
        {/* ----------- */}

        <div className="footer-home">
          {/* ---- */}
          <ol className="foot1">
            <ul>
              <li>&#169; 2020</li>
            </ul>
            <ul>
              <li className="dot">
                <span>facebook</span>
              </li>
            </ul>
          </ol>
          {/* ---- */}
          <ol className="foot2">
            <ul>
              <li>ONLINE CATALOGUE 2019</li>
              <li>TERMS &amp; CONDITIONS </li>
              <li>PRIVACY POLICY</li>
            </ul>
            <ul>
              <li>OUR STORY</li>
              <li>CAREERS</li>
              <li>SALES</li>
            </ul>
            <ul>
              <li>CLAIMS</li>
              <li>FAQ</li>
              <li>CONTACT US</li>
            </ul>
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Soon;

/*


Customer care
Our dedicated team is always happy to help you with any questions. Just fill in the form via the link below and we will get back to you as soon as possible!

Contact us here



*/
