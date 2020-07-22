import React, { Component } from "react";
import sipnalogo from "../assets/sipna_logo.png";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import swal from "sweetalert";
//import { Link } from "react-router-dom";

export default class QueryFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      num: "",
      altcon: "",
      email: "",
      hscyear: "2020",
      village: "",
      taluka: "",
      district: "",
      recaptcha: "",
      additional_text: "",
      recaptchaRef: React.createRef(),
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handelCaptcha = (e) =>
    this.setState({ recaptcha: this.state.recaptchaRef.current.getValue() });

  submitForm = (e) => {
    e.preventDefault();
    e.persist();

    if (!this.state.recaptcha)
      return swal({
        title: "Please tick the checkbox!",
        icon: "error",
        closeOnClickOutside: false,
      });
    console.log("sending data..");
    swal({
      title: "Please Wait..",
      text: "Sending Data..",
      icon: "info",
      buttons: false,
      closeOnClickOutside: false,
    });
    const url =
      "https://script.google.com/macros/s/AKfycbxQZUjNTQ-hnGpxK67m3S3x1cN4j5H5QSzKomhQHsRCT2I6gLGa/exec";
    axios
      .get(url, {
        params: {
          name: this.state.name,
          num: this.state.num,
          alt_num: this.state.altcon,
          email: this.state.email,
          hscyear: this.state.hscyear,
          village: this.state.village,
          taluka: this.state.taluka,
          district: this.state.district,
          additional_text: this.state.additional_text,
        },
      })
      .then(function (response) {
        swal({
          title: "Success!",
          text: "Thank you for contacting us!",
          icon: "success",
          closeOnClickOutside: false,
        }).then(() => window.location.reload());
      })
      .catch(function (error) {
        swal({
          title: "Somthing went wrong...",
          closeOnClickOutside: false,
          icon: "error",
        }).then(() => window.location.reload());

        console.log(error);
      });
  };

  render() {
    return (
      <div className="bg-gray-800 text-gray-100 px-2 md:px-8 py-8 w-full h-full">
        <div
          className="max-w-screen-xl mt-4 px-8 grid gap-8 grid-cols-1 
  md:px-12 lg:px-16 xl:px-32 py-16 pb-24 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg"
        >
          <img
            src={sipnalogo}
            alt="Sipna Logo"
            className="content-center justify-center mx-auto"
          />

          <div className="flex flex-col justify-between text-center">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Admission Enquiry
            </h2>
          </div>

          <form onSubmit={this.submitForm} id="my-Form" className="pt-6">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              required
              placeholder="Your Name.."
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Contact No
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="tel"
                required
                placeholder="Your Contact No.."
                id="num"
                name="num"
                value={this.state.num}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Alternate / Parents Contact No
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="tel"
                required
                placeholder="Alternate Contact No.."
                id="altcon"
                name="altcon"
                value={this.state.altcon}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                required
                placeholder="Your Email.."
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                HSC Passed Year
              </span>
              <select
                id="hscyear"
                name="hscyear"
                required
                value={this.state.hscyear}
                onChange={this.handleChange}
                className=" block w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg  leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </select>
            </div>

            <h3 className="uppercase  text-gray-600 mt-8 font-bold h3 text-center">
              Address Details
            </h3>

            <div className="mt-2">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Village
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                required
                placeholder="Your Village.."
                id="village"
                name="village"
                value={this.state.village}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold ">
                Taluka
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                required
                placeholder="Your Taluka.."
                id="taluka"
                name="taluka"
                value={this.state.taluka}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                District
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                required
                id="district"
                name="district"
                value={this.state.district}
                onChange={this.handleChange}
                placeholder="Your District.."
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Would you like to add more additional information?
              </span>
              <textarea
                id="additional_text"
                name="additional_text"
                value={this.state.additional_text}
                onChange={this.handleChange}
                rows="4"
                cols="50"
                maxLength="50"
                placeholder="Additional Information.. (if any)"
                className=" block w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Please tick the checkbox
              </span>

              <ReCAPTCHA
                ref={this.state.recaptchaRef}
                sitekey="6Lf7R7MZAAAAAEwDSMuD8Gk_ka_-hkwa-Aa1_oSe"
                onChange={this.handelCaptcha}
              />
            </div>

            <div className="mt-12">
              <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Submit
              </button>
              {/* 
              <hr className="my-1 mt-4 border-black" />
              <Link to="/Query">
                <button
                  type="button"
                  className="mx-auto mt-3 uppercase text-sm font-bold tracking-wide bg-green-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  For More info Click here
                </button>
              </Link> */}
            </div>
          </form>
        </div>
        <footer className="text-center pt-12 h">
          &copy;{" "}
          <a
            href="https://siddhesh.me"
            className="no-underline hover:underline text-blue-300"
          >
            SiddheshNan
          </a>
        </footer>
      </div>
    );
  }
}
