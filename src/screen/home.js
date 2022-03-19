import React, { Component } from "react";
import "../style/p_hm1.css";
import logo from "../asset/logo.png";
import preImg from "../asset/pre.jpg";
// import playstore from "../asset/playstore.png";
// import appstore from "../asset/appstore.png";

export default class PublicHomePage extends Component {
  render() {
    return (
      <div className="p_hm1_a">
        <div className="p_hm1_b">
          <div className="p_hm1_c">Get App</div>
          <div className="p_hm1_c">About Us</div>
          <div className="p_hm1_c">Contact Us</div>
          <div className="p_hm1_c">Login</div>
        </div>
        <div className="p_hm1_d">
          <div className="p_hm1_e">
            <img alt="jhg" className="p_hm1_f" src={logo} />
            <div className="p_hm1_g">
              Uninterrupted surveillance could create the sense of security
              without any break. Appcare Networking solutions is a group of
              experts lead by expertized and efficient supervisory persons who
              strives to find innovative and technically advanced ways of
              security supportive systems. The team serves the society from 2015
              at various spheres of society in the matters of networking and
              Security system installation. Quality and supportive System is the
              sole reason for getting great acceptance from the public. By this
              period Appcare Networking Solution could serve 300 plus satisfied
              customers and they still enjoying the security fence created by
              Appcare Networking Solution.
            </div>
          </div>
          <div className="p_hm1_h">
            {/* <div className="p_hm1_i">Get App</div> */}
            <img alt="jhg" className="p_hm1_j" src={preImg} />
            <div className="p_hm1_k">
              {/* <img alt="jhg" className="p_hm1_l" src={playstore} />
              <img alt="jhg" className="p_hm1_l" src={appstore} /> */}
            </div>
          </div>
        </div>
        <div className="p_hm1_m">
          Near Shalimar auditourim Thazhekode West (PO), Perinthalmanna |
          7902782222 | appcarepmna@gmail.com
        </div>
      </div>
    );
  }
}
