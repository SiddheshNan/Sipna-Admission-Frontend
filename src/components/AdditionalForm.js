import React, { Component, Fragment } from "react";
import sipnalogo from "../assets/sipna_logo.png";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import swal from "sweetalert";
//import { Link } from "react-router-dom";

export default class AdditionalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      num: "",
      altcon: "",
      email: "",
      branch: "IT",
      other: "",
      aggrigate: "",
      phy: "",
      maths: "",
      chem: "",
      bio: "",
      voc: "",
      jee: "",
      aggree: false,
      catagory: "OPEN",
      faminc: "Less than 1 Lacs",
      ewc: "Yes",
      helprec: "Yes",
      additional_text: "",
      prefer: "Yes",
      recaptcha: "",
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

    if (!this.state.aggree)
      return swal({
        title: "Please tick the question!",
        icon: "error",
        closeOnClickOutside: false,
      });

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
      "https://script.google.com/macros/s/AKfycbz4oQDFMFT_-3pxDM2RVJsh0xfEEPVc74AAM-YUHPf_SHPi6Yc/exec";
    axios
      .get(url, {
        params: {
          name: this.state.name,
          num: this.state.num,
          alt_num: this.state.altcon,
          email: this.state.email,
          branch: this.state.branch,
          aggrigate: this.state.aggrigate,
          phy: this.state.phy,
          maths: this.state.maths,
          chem: this.state.chem,
          bio: this.state.bio,
          voc: this.state.voc,
          jee: this.state.jee,
          catagory: this.state.catagory,
          family_inc: this.state.faminc,
          ewc: this.state.ewc,
          prefer: this.state.prefer,
          help_required: this.state.helprec,
          other_branch: this.state.other,
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

          <form onSubmit={this.submitForm} id="my-Form1" className="pt-6">
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
                Looking for Branch
              </span>
              <select
                id="branch"
                name="branch"
                required
                value={this.state.branch}
                onChange={this.handleChange}
                className=" block w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg  leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="IT">IT</option>
                <option value="CMPS">CMPS</option>
                <option value="ENTC">ENTC</option>
                <option value="MECH">MECH</option>
                <option value="CIVIL">CIVIL</option>
                <option value="BArch">B.Arch</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {this.state.branch === "Other" ? (
              <Fragment>
                <div className="mt-4">
                  <span className="uppercase text-sm text-gray-600 font-bold">
                    If Other, Please Specify
                  </span>
                  <input
                    className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    required
                    placeholder="Other Branch.."
                    id="other"
                    name="other"
                    value={this.state.other}
                    onChange={this.handleChange}
                  />
                </div>
              </Fragment>
            ) : (
              ""
            )}

            <h3 className="uppercase  text-gray-600 mt-8 font-bold h3 text-center">
              Academic Details
            </h3>

            <div className="mt-2">
              <span className="uppercase text-sm text-gray-600 font-bold">
                HSC Aggrigate
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                min="0"
                max="999"
                required
                placeholder="HSC Aggrigate.."
                id="aggrigate"
                name="aggrigate"
                value={this.state.aggrigate}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold ">
                Marks in Physics
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                min="0"
                max="999"
                required
                placeholder="Physics.."
                id="phy"
                name="phy"
                value={this.state.phy}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Marks in Maths
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                min="0"
                max="999"
                required
                id="maths"
                name="maths"
                value={this.state.maths}
                onChange={this.handleChange}
                placeholder="Maths.."
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Marks in Chem
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                min="0"
                max="999"
                required
                id="chem"
                name="chem"
                value={this.state.chem}
                onChange={this.handleChange}
                placeholder="Chem.."
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Marks in Bio (if applicable)
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                min="0"
                max="999"
                id="bio"
                name="bio"
                value={this.state.bio}
                onChange={this.handleChange}
                placeholder="Bio.."
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Marks in Vocational (Computer / Electronics etc.) (if
                applicable)
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                min="0"
                max="999"
                id="voc"
                name="voc"
                value={this.state.voc}
                onChange={this.handleChange}
                placeholder="Vocational.."
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                JEE Mains Score (if applicable)
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                min="0"
                max="999"
                id="jee"
                name="jee"
                value={this.state.jee}
                onChange={this.handleChange}
                placeholder="JEE Mains Score .."
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Catagory
              </span>
              <select
                id="catagory"
                name="catagory"
                required
                value={this.state.catagory}
                onChange={this.handleChange}
                className=" block w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg  leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="OPEN">OPEN</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="NT">NT</option>
                <option value="VJ">VJ</option>
                <option value="SBC">SBC</option>
              </select>
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Family Income (Yearly)
              </span>
              <select
                id="faminc"
                name="faminc"
                required
                value={this.state.faminc}
                onChange={this.handleChange}
                className=" block w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg  leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Less than 1 Lacs">Less than 1 Lacs</option>
                <option value="1 Lacs to 3 lacs">1 Lacs to 3 lacs</option>
                <option value="3 Lacs to 5 lacs">3 Lacs to 5 lacs</option>
                <option value="5 Lacs to 10 lacs">5 Lacs to 10 lacs</option>
                <option value="Above 10 Lacs">Above 10 Lacs</option>
              </select>
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Are Belong to Economically Weaker Section
              </span>
              <select
                id="ewc"
                name="ewc"
                required
                value={this.state.ewc}
                onChange={this.handleChange}
                className=" block w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg  leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Do You reqiured help for documents required
              </span>
              <select
                id="helprec"
                name="helprec"
                required
                value={this.state.helprec}
                onChange={this.handleChange}
                className=" block w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg  leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="mt-8">
              <span className="w-1/2 text-gray-800 font-bold">
                I know that, this form is just First Year Engineering Admission
                Willingness form. My admission will be confirmed only when I
                fulfill all the formalities laid down by Admission Regularity
                Authority (ARA) of MS State from time to time.
                <br />
                (प्रथम वर्ष अभियांत्रिकी मध्ये फक्त प्रवेश घ्यायची इच्छा
                दर्शविण्यासाठी असलेला हा अर्ज) *
              </span>
              <br />{" "}
              <div className="mt-2 -mb-5 text-gray-800 font-bold">Please tick the following checkbox.</div>
              <br />
              <label class="inline-flex items-center mt-3 mb-3">
                <input
                  type="checkbox"
                  id="aggree"
                  onChange={() => this.setState({ aggree: !this.state.aggree })}
                  value={this.state.aggree}
                  checked={this.state.aggree}
                  required
                  name="aggree"
                  class="form-checkbox border-2 bg-gray-300 border-blue-500 h-5 w-5"
                />
                <span class="ml-2 text-gray-700">Yes</span>
              </label>
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Will you prefer that our FYBE Admission coordinator shall
                contact you to share more information?
              </span>
              <select
                id="prefer"
                name="prefer"
                required
                value={this.state.prefer}
                onChange={this.handleChange}
                className=" block w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg  leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
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
              {/*    <hr className="my-1 mt-4 border-black" />
              <Link to="/AdditionalForm">
                <button
                  type="button"
                  className="mx-auto mt-3 uppercase text-sm font-bold tracking-wide bg-green-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  For More info CLick here
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
          </a>{" "}
          SipnaCOET, Amt.
        </footer>
      </div>
    );
  }
}
