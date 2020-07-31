import React, { Component } from "react";
import { Link } from "react-router-dom";
import sipnaLogo from "../assets/SIPNA_TRANS_PNG.png";

export default class IndexPage extends Component {
  componentDidMount = () => document.body.classList.add("gradient");
  componentWillUnmount = () => document.body.classList.remove("gradient");
  render() {
    return (
      <div className="leading-relaxed tracking-wide flex flex-col w-full h-full">
        <div className="container mx-auto h-screen">
          <div className="text-center px-3 lg:px-0">
            <h1 className="mt-12 mb-6 text-2xl md:text-3xl font-black leading-tight text-red-600">
              <img
                src={sipnaLogo}
                style={{ display: "inline-block" }}
                alt="Sipna Logo"
                className="w-24 md:w-24 mb-2"
              />
              <br />
              SIPNA COLLEGE OF ENGINEERING &amp; TECHNOLOGY, AMRAVATI
            </h1>
            <p className="leading-normal text-base md:text-xl lg:text-2xl mb-8 text-purple-600">
              In front of Nemani Godown, Badnera Road, Amravati – 444701, M.S.
            </p>
            <hr className="my-1 border-black" />
          </div>
          <h3 className="my-4 text-xl text-red-600 ml-4 font-semibold md:ml-4">
            Programs:
          </h3>

          <div className=" mx-auto  justify-between text-xl font-bold ">
            <div className="flex flex-wrap text-center bg-yellow-200 pt-3">
              <div className="w-full text-left ml-6 md:ml-0 md:text-center md:w-1/5  mb-4">
                {" "}
                <i className="fas fa-dot-circle" />
                &nbsp; BE
              </div>
              <div className="w-full text-left ml-6 md:ml-0 md:text-center md:w-1/5 mb-4 ">
                {" "}
                <i className="fas fa-dot-circle" />
                &nbsp; ME
              </div>
              <div className="w-full text-left ml-6 md:ml-0 md:text-center md:w-1/5 mb-4">
                {" "}
                <i className="fas fa-dot-circle" />
                &nbsp; PhD
              </div>
              <div className="w-full text-left ml-6 md:ml-0 md:text-center md:w-1/5 mb-4 ">
                {" "}
                <i className="fas fa-dot-circle" />
                &nbsp; MBA
              </div>
              <div className="w-full text-left ml-6 md:ml-0 md:w-1/5 mb-4">
                {" "}
                <i className="fas fa-dot-circle" />
                &nbsp; B.Arch.
              </div>
            </div>{" "}
          </div>

          <h3 className="my-4 mt-12 text-xl text-red-600 ml-4 font-semibold md:ml-4">
            UG Programs: B.E.(Four Years Degree Courses)
          </h3>
          <div className="bg-yellow-200 mx-auto text-xl font-bold ">
            <div className="flex flex-wrap text-left sm:ml-8 md:ml-20">
              <div className="w-full md:w-1/2 py-4 md:p-4 px-2 mx-auto">
                <i className="fas fa-dot-circle " />
                &nbsp; Electronics &amp; Telecomm. Engg.
              </div>
              <div className="w-full md:w-1/2 py-4 md:p-4 px-2 mx-auto">
                <i className="fas fa-dot-circle" />
                &nbsp; Mechanical Engineering
              </div>

              <div className="w-full md:w-1/2 py-4 md:p-4 px-2 mx-auto">
                <i className="fas fa-dot-circle" />
                &nbsp; Civil Engineering
              </div>
              <div className="w-full md:w-1/2 py-4 md:p-4 px-2 mx-auto">
                <i className="fas fa-dot-circle" />
                &nbsp; Information Technology
              </div>
              <div className="w-full md:w-1/2 py-4 md:p-4 px-2 ">
                <i className="fas fa-dot-circle" />
                &nbsp; Computer Science &amp; Engg.
              </div>
            </div>
          </div>

          <h3 className="mt-12 text-xl text-red-600 ml-4 font-semibold md:ml-4">
            HIGHLIGHTS
          </h3>
          <h5 className="text-base text-yellow-800 ml-4 font-bold md:ml-4">
            About SSPM’s Sipna COET, Amravati
          </h5>
          <div className="ml-8 mt-2 text-lg">
            <ul>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Established in the year 1999, aims at imparting higher
                &amp; technical education to the people of the region.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Recognized by All India Council for Technical Education
                (AICTE), New Delhi
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Approved by Directorate of Technical Education (DTE)
                Mumbai, Maharashtra State.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Affiliated to Sant Gadge Baba Amravati University
                (SGBAU), Amravati
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; The institute is accredited by IAO &amp; Certified by ISO
                9001:2015 (Quality Management System), and ISO14001:2005
                (Environment Management System).
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; The three UG programs ENTC, CSE &amp; IT are accredited
                by National Board of Accreditation (NBA), Delhi.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; The institute has received an ‘A’ Grade from National
                Assessment &amp; Accreditation Council (NAAC), Bangalore.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; ‘A Mentee Institute’ of College of Engineering (CoEP),
                Pune under Margadarshan Scheme of AICTE.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; MoU with well-known academic, industrial &amp;
                professional bodies.
              </li>
            </ul>
          </div>
          <h3 className="mt-12 text-xl text-red-600 ml-4 font-semibold md:ml-4">
            HIGHLIGHTS
          </h3>
          <div className="ml-8 mt-2 text-lg">
            <ul>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Fully dedicated and transparent management.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Highly qualified &amp; committed faculty &amp; staff.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Four fully air-conditioned girl's hostels with total
                intake of 350 students.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Ultra-modern seminar &amp; conference hall in each
                department.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; State of the art auditorium with a capacity to
                accommodate 700 audience.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Well-equipped and modern laboratories with advanced
                instruments.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Computerized Library with Book Bank facility.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; ERP Centre &amp; Complete online monitoring setup.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Entrepreneurship Development Cell (ED-Cell).
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; University approved research labs for all disciplines
                including applied sciences for pursuing doctorate level
                research.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Innovative &amp; Best practices for overall grooming of
                students.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Organization of Technical, social, cultural and spiritual
                programs &amp; events for exposure to students.
              </li>
              <li className="my-2">
                <i className="fas fa-dot-circle" />
                &nbsp; Indoor and Outdoor sport facilities.
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap mt-12">
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
              <div className="flex-1 text-gray-700 text-center bg-orange-500 text-white px-4 py-8 m-2">
                <span className="text-white text-xl text-bold">
                  150 + Qualified Faculties
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
              <div className="flex-1 text-gray-700 text-center text-white bg-orange-500 px-4 py-8 m-2">
                <span className="text-white text-xl text-bold">
                  {" "}
                  300 + Placements
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
              <div className="flex-1 text-gray-700 text-center bg-orange-500 text-white px-4 py-8 m-2">
                <span className="text-white text-xl text-bold">
                  {" "}
                  5800 + Alumni
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
              <div className="flex-1 text-gray-700 text-center bg-orange-500 text-white px-4 py-8 m-2">
                <span className="text-white text-xl text-bold">
                  45800 Sq. M. Campus
                </span>
              </div>
            </div>
          </div>
          <section className="w-full mx-auto text-center pt-6 pb-12">
            {/* <h2
    class="w-full my-2 text-5xl font-black leading-tight text-center text-white"
  >
    Call to Action
  </h2> */}
            <div className="w-full mb-4">
              <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <h3 className="my-4 text-2xl font-extrabold mb-8">
              Looking for the Career in Professional Course...
              <br /> Just Click On...
            </h3>
            <Link
              to="/Enquiry"
              className="mx-auto mr-4  hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg"
            >
              Enquiry form
            </Link>
            <Link
              to="/Query"
              className="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg"
            >
              Know More
            </Link>
          </section>
          <footer>
            <div className="mx-auto mt-20 mb-8 text-center mx-auto">
              <a
                className="text-blue-700 no-underline hover:underline hover:text-blue-500 font-bold text-2xl"
                href="https://siddhesh.me/"
              >
                © SiddheshNan SipnaCOET, Amt.
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
