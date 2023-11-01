import { NavLink } from "react-router-dom";
import logo from "../src/images/logo.png";
const Common = (props) => {
  return (
    <>
      <section id="header">
        <div className="container_fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex align-items-center">
                <div className="col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.title}
                    <strong className="brand-name">HariPrabodham</strong>
                  </h1>
                  <h3 className="my-3 subHeading">
                    We are the team of talented developer making websites
                  </h3>
                  <div className="mt-3">
                    <NavLink
                      className="btn btn-outline-info"
                      to={props.buttonLink}
                    >
                      {props.button}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src={logo}
                    alt="logo"
                    className="animatedLogo"
                    width="80%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
