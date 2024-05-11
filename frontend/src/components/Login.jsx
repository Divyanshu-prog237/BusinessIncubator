import React from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import useAppContext from '../../AppContext'
import Logo from '../assets/logo.png'

const LoginSchema = Yup.object().shape({
    password: Yup.string().min(4, 'Too short!').max(20, 'Too Long!'),
    email: Yup.string().email('Invalid email').required('Required')
});

const Login = () => {
    const { setLoggedin } = useAppContext();

    const navigate = useNavigate();
    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, action) => {
            console.log(values);

            const res = await fetch('http://localhost:3000/users1/authenticate', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status);
            action.resetForm();

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful'
                })
                setLoggedin(true);

                const data = await res.json();
                sessionStorage.setItem('isloggedin', true);
                if(data.role === 'admin'){
                    sessionStorage.setItem('admin', JSON.stringify(data));
                    navigate('/admin/base');
                }else{
                    sessionStorage.setItem('user', JSON.stringify(data));
                    navigate('/');
                }
            } else if (res.status === 400
                ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid email or password'

                })
            }
        },
        // step6: validation of LoginSchema
        validationSchema: LoginSchema
    });
    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-light foi-navbar">
          <Link className="navbar-brand" to="/Home">
            <img src={Logo} alt="FOI" 
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
                <Link className="nav-link" to="/Features">
                  Features
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/Pages"

                >
                  Pages
                </Link>
                <div className="dropdown-menu" aria-labelledby="pagesMenu">
                  <Link className="dropdown-item" href="blog.html">
                    Blog
                  </Link>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                  <Link className="dropdown-item" to="/Register">
                    Register
                  </Link>
                  <Link className="dropdown-item"  to="/Faq">
                    FAQ
                  </Link>
                  <Link className="dropdown-item" to="/Blog">
                    Single blog
                  </Link>
                  <Link className="dropdown-item" to="/Privacypolicy">
                    Privacy policy
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/Contact2">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/Services">
                  Services
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item mr-2 mb-3 mb-lg-0">
                <Link className="btn btn-secondary" to="/Register">
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
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://i.pinimg.com/736x/6b/1b/22/6b1b22573f9f3d4bba11a9fa5cb45652.jpg"
                            className="img-fluid"
                            alt="Sample image"
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={loginForm.handleSubmit}>
                            
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    id="email"
                                    onChange={loginForm.handleChange}
                                    value={loginForm.values.email}
                                />
                                <label className="form-label" htmlFor="form3Example3">
                                    Email address
                                </label>
                                <span style={{ color: 'red', fontsize: '10', marginLeft: 10 }}>{loginForm.touched.name && loginForm.errors.name}</span>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    id="password"
                                    onChange={loginForm.handleChange}
                                    value={loginForm.values.password}
                                />
                                <label className="form-label" htmlFor="form3Example4">
                                    Password
                                </label>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                {/* Checkbox */}
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="form2Example3"
                                    />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                >
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?{" "}
                                    <Link to="/Signup" className="link-danger">
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>

    )
}
export default Login