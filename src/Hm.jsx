import React, { Component } from "react";
// import $ from "jquery";
class Hm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="">
          <div id="navbar">
            <a href="#default" style={{ padding: "0vh 10vh" }} id="logo">
              <img id="img1" src="img/h2m_logo_2.jpg" alt="this is baner" width="180" />{" "}
            </a>
            <div id="navbar-right" className="mr-5">
              {/* <a class="active" href="#home">Home</a> */}
              <button
                type="button"
                className="btn btn-primary mt-2"
                id="margindisable"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@mdo"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className style={{ marginTop: "17vh" }}>
          <img
            className="baner_img"
            src="img/H2M-main_newCROP_BW4_noEXIT-e1435728628422.jpg"
            alt="h2"
          />
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Login
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Password:
                    </label>
                    {/* <textarea className="form-control" id="message-text" defaultValue={""} /> */}
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p className="circle ml-auto mr-auto">
                <i className="fa fa-share fa-2x" aria-hidden="true" />
              </p>
              <div className="divbox">
                <h6 className="font_bold mb-4 pt-5 mr_-top">VENTURE CAPITAL</h6>
                <p className="co_8f pb-4 ml-4 mr-4 fz_12">
                  H2M partners with the brightest entrepreneurs to turn
                  disruptive ideas into world-changing businesses.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <p className="circle ml-auto mr-auto">
                <i className="fa fa-home fa-2x" aria-hidden="true" />
              </p>
              <div className="divbox">
                <h6 className="font_bold mb-4 pt-5 mr_-top">SKILLSET TRANSFORMATION</h6>
                <p className="co_8f pb-4 ml-4 mr-4 fz_12">
                  The partnership focuses on real estate-backed debt investments
                  where the financial engineering expertise of H2M’s principals
                  helps to maximize safety and return for both investors and
                  borrowers alike.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <p className="circle ml-auto mr-auto">
                <i className="fa fa-user fa-2x" aria-hidden="true" />
              </p>
              <div className="divbox">
                <h6 className="font_bold mb-4 pt-5 mr_-top">PRIVATE EQUITY</h6>
                <p className="co_8f pb-4 ml-4 mr-4 fz_12">
                  H2M maximizes the value of its investments by concentrating on
                  certain industry sectors where we have substantial operating
                  and investment experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_co_f4">
          <div className="row row_unset">
            <div className="col-md-2" />
            <div className="col-md-8">
              <h2 className="text-center font_bold">
                O P P O R T U N I T Y &nbsp; I N V E S T M E N T
              </h2>
              <p className="co_8f mlr_center mb_9 fz_14">
                The H2M Catalyst firm brings their own entrepreneurial
                experience, relationships, and marketing/product expertise to
                the investments they pursue. They look to back passionate,
                experienced entrepreneurs who are focused on creating highly
                scalable technologies and significant value propositions for
                their targeted markets.
              </p>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
        <div className>
          <img
            src="img/Teamwork_Slider_4-1030x686.jpg"
            style={{ height: "100vh", width: "100%", objectFit: "cover" }}
            alt="h2"
          />
        </div>
        <div className="container mt_6 mb_12">
          <div className="row">
            <div className="col-md-5">
              <h2 className="about font-weight-bolder">ABOUT US</h2>
              <p className=" co_8f fz_14 text-center">
                H2M invests in high technology companies, and is based on the
                premise for a new, modern venture capital firm that supports the
                most promising founders in high-growth markets. We bring our own
                entrepreneurial experience, relationships, and marketing/product
                expertise to the table. We like to back passionate, experienced
                entrepreneurs who are focused on creating highly scalable
                technologies and significant value propositions for their target
                markets.
              </p>
            </div>
            <div className="col-md-5">
              <div className="row block">
                <div className="col-md-3 col-auto">
                  <div>
                    <p className="lg_circle mb_10">
                      <i
                        className="fa fa-transgender-alt fa-2x"
                        aria-hidden="true"
                      />
                    </p>
                    <p className="mb_10 mb_12v lg_circle">
                      <i className="fa fa-cog fa-2x" aria-hidden="true" />
                    </p>
                    <p className=" mb_10 lg_circle">
                      <i className="fa fa-rocket fa-2x " aria-hidden=" true" />
                    </p>
                  </div>
                </div>
                <div className="col-md-9 col-auto">
                  <h5 className="font-weight-bolder">ACQUIRE TRACTION</h5>
                  <p className=" co_8f fz_14 ">
                    The seed landscape has changed dramatically over the past
                    several years. Companies are being created and raising small
                    amounts of capital to de-risk and validate, or disprove,
                    many of their original assumptions.
                  </p>
                  <h5 className="font-weight-bolder mt-4">
                    OPTIMIZE UNIT ECONOMICS
                  </h5>
                  <p className=" co_8f fz_14 ">
                    We have an upgraded strategy of not just “getting in the
                    good deals,” but rather participating with larger
                    investments and solid follow-ons.
                  </p>
                  <h5 className="font-weight-bolder mt-4">GAIN VELOCITY</h5>
                  <p className=" co_8f fz_14 ">
                    We don’t think experience or data alone are basis enough for
                    a decision. We work very closely with the management teams
                    to provide as much value as possible. We combine years of
                    operational experience with extensive data analysis to
                    evaluate the best options, and then act upon them.
                  </p>
                </div>
              </div>
              <div className="row none">
                <div className="col-md-12">
                  <div>
                    <p className="lg_circle mb-4 mt-4">
                      <i
                        className="fa fa-transgender-alt fa-2x"
                        aria-hidden="true"
                      />
                    </p>
                    <h5 className="font-weight-bolder">ACQUIRE TRACTION</h5>
                    <p className=" co_8f fz_14 ">
                      The seed landscape has changed dramatically over the past
                      several years. Companies are being created and raising
                      small amounts of capital to de-risk and validate, or
                      disprove, many of their original assumptions.
                    </p>
                    <p className=" lg_circle  mb-4 mt-4">
                      <i className="fa fa-cog fa-2x" aria-hidden="true" />
                    </p>
                    <h5 className="font-weight-bolder mt-4">
                      OPTIMIZE UNIT ECONOMICS
                    </h5>
                    <p className=" co_8f fz_14 ">
                      We have an upgraded strategy of not just “getting in the
                      good deals,” but rather participating with larger
                      investments and solid follow-ons.
                    </p>
                    <p className="  lg_circle  mb-4 mt-4">
                      <i className="fa fa-rocket fa-2x" aria-hidden=" true" />
                    </p>
                    <h5 className="font-weight-bolder mt-4">GAIN VELOCITY</h5>
                    <p className=" co_8f fz_14 ">
                      We don’t think experience or data alone are basis enough
                      for a decision. We work very closely with the management
                      teams to provide as much value as possible. We combine
                      years of operational experience with extensive data
                      analysis to evaluate the best options, and then act upon
                      them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className>
          <img
            src="img/H2M-ConferenceRoom_Crop-1030x483.jpg"
            style={{ height: "100vh", width: "100%", objectFit: "cover" }}
            alt="h2"
          />
        </div>
        <div className="footer12">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h6 className="co_8f">CONTACT US</h6>
                <div className="co_d">
                  <p>H2M Catalyst</p>
                  <p>7659 S. Main Street Midvale UT 84047</p>
                  <p>801.808.2332</p>
                  <p>info@h2-m.com</p>
                </div>
              </div>
              <div className="col-md-4 ipad_none"></div>
              <div className="col-md-2 ipad_block"></div>
              <div className="col-md-4">
                <h3 className="co_8f">HEADQUARTERS</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.872177310437!2d-111.91244608523077!3d40.61064375174819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM2JzM4LjMiTiAxMTHCsDU0JzM2LjkiVw!5e0!3m2!1sen!2s!4v1581492391335!5m2!1sen!2s"
                  width="{600}"
                  height="{350}"
                  frameBorder="{0}"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hm;
