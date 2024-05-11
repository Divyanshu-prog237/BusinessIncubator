import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'


const ContactSchema = Yup.object().shape({
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required("Required"),
})

const Contact2 = () => {

    const navigate = useNavigate();

    const contactForm = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            phone_number: '',
            message: ''
        },
        onSubmit: async (values, action) => {
            console.log(values);

            const res = await fetch('http://localhost:3000/contacts/add', {
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
                    title: 'Message Sent Successfully',
                    text: 'We will contact you soon'
                })
                navigate('/');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Message Failed',
                    text: 'Oops! Something went wrong'

                })
            }
        },
        validationSchema: ContactSchema,
    });

    return (
        <div><nav className="navbar navbar-expand-lg navbar-light foi-navbar">
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
                <Link className="dropdown-item" to="/Login">
                  Login
                </Link>
                <Link className="dropdown-item" to="/SignUp">
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
              <Link className="btn btn-secondary" to="/SignUp">
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
        <div className="container mt-5">
            <div className="card-shadow">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center p-5">
                        <h1 className='position-absolute display-5 text-danger' style={{ fontFamily: "fantasy" }}>Query ? Connect with us</h1>
                        <form onSubmit={contactForm.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 c-margin">
                                    <input type="text" className="form-control inp-clr" placeholder="First name"
                                        id="fname"
                                        onChange={contactForm.handleChange}
                                        value={contactForm.values.fname} />
                                </div>
                                <div className="col-md-6 c-margin">
                                    <input type="text" className="form-control inp-clr" placeholder="Last name"
                                        id="lname"
                                        onChange={contactForm.handleChange}
                                        value={contactForm.values.lname} />
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <input type="email" className="form-control mt-4 inp-clr" placeholder="Email"
                                            id="email"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.email} />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="number" className="form-control mt-4 inp-clr" placeholder="Phone Number"
                                            id="phone_number"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.phone_number} />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea type="text" className="form-control mt-4 inp-clr" placeholder="Enquiry message..."
                                            id="message"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.message} />
                                    </div>
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <button type="submit" className="btn btn-danger mt-4">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img className='c-img' src="https://cdn.dribbble.com/users/180062/screenshots/6784972/dribbble.gif" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact2