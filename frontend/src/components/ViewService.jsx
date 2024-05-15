import MDEditor from "@uiw/react-md-editor";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import icon from '../assets/ser-icon.gif';
import icons from '../assets/icon.gif'
import Logo from '../assets/logo.png'


const ViewService = () => {

    const { id } = useParams();

    const [userData, setUserData] = useState({});

    const fetchPlanData = async () => {
        const res = await fetch("http://localhost:3000/services/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setUserData(data);
    };

    useEffect(() => {
        fetchPlanData();
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
                <Link className="navbar-brand" to="/Admin/base">
                    <img className="Logoo" src={Logo} alt="FOI"
                        height={50}
                        style={{ marginTop: "-8px", marginBottom: "-8px" }}
                    />
                </Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Home">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact2">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Services">
                                Services
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item mr-2 mb-3 mb-lg-0">
                            <Link className="btn btn-secondary" to="/Signup">
                                Sign up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-secondary" to="/Login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="col-md-6 mx-auto">
                <div className="row"><span className="ser-i"><img className="ser-ic" src={icons} /></span>
                    <div className="card-shadow m-5 p-3"><span className="ser"><img className="ser-icon" src={icons} /></span>
                        <div data-color-mode="light">
                            <MDEditor.Markdown source={userData.content} style={{ whiteSpace: 'pre-wrap' }} />
                        </div>
                    </div>
                </div>
                <section className="">
                    <div className="card bg-dark w-100 mb-5 ">
                        <h3 className="text-light p-4">Need help? Contact for free business councelling</h3>
                        <Link to='/Contact2' className="btn btn-primary w-25 m-3">Find Councellor</Link>
                    </div>
                </section>
            </div>
        </>

    )
}

export default ViewService