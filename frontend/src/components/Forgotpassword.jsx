import React from 'react'
import forgot from '../assets/forgotpass.avif'
import Logo from '../assets/Logo.png'
import { Link ,useNavigate } from 'react-router-dom'
import useAppContext from '../../AppContext'


import * as Yup from 'yup'
import { useFormik } from 'formik'

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required')
});

const Forgotpassword = () => {
    const { setLoggedin } = useAppContext();

    const navigate = useNavigate();
    const Forgot = useFormik({
        initialValues: {
            email: '',
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
                    title: 'Forgot Password Link sent Successfully'
                })
                setLoggedin(true);

                const data = await res.json();
                sessionStorage.setItem('isloggedin', true);
                if (data.role === 'admin') {
                    sessionStorage.setItem('admin', JSON.stringify(data));
                    navigate('/admin/base');
                } else {
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

                {/* Password Reset 8 - Bootstrap Brain Component */}
                <section className="bg-light p-3 p-md-4 p-xl-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-xxl-11">
                                <div className="card border-light-subtle shadow-sm">
                                    <div className="row g-0">
                                        <div className="col-12 col-md-6">
                                            <img
                                                className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                                                loading="lazy"
                                                src={forgot}
                                                alt="Welcome back you've been missed!"
                                            />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                            <div className="col-12 col-lg-11 col-xl-10">
                                                <div className="card-body p-3 p-md-4 p-xl-5">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="mb-5">
                                                                <div className="text-center mb-4">
                                                                    <Link to="/Login">
                                                                        <img
                                                                            className='Logoo'
                                                                            src={Logo}
                                                                            alt="BootstrapBrain Logo"
                                                                            width={175}
                                                                            height={75}

                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <h2 className="h4 text-center">Password Reset</h2>
                                                                <h3 className="fs-6 fw-normal text-secondary text-center m-0">
                                                                    Provide the email address associated with your
                                                                    account to recover your password.
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form action="#!">
                                                        <div className="row gy-3 overflow-hidden">
                                                            <div className="col-12">
                                                                <div className="form-floating mb-3">
                                                                    <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        name="email"
                                                                        id="email"
                                                                        placeholder="name@example.com"
                                                                        required=""
                                                                        onChange={Forgot.handleChange}
                                                                        value={Forgot.values.email}
                                                                    />
                                                                    <label htmlFor="email" className="form-label">
                                                                        Email
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="d-grid">
                                                                    <button
                                                                        className="btn btn-dark btn-lg"
                                                                        type="submit"
                                                                    >
                                                                        Reset Password
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                                                                <Link
                                                                    to="/Login"
                                                                    className="link-secondary text-decoration-none"
                                                                >
                                                                    Login
                                                                </Link>
                                                                <Link
                                                                    to="/Signup"
                                                                    className="link-secondary text-decoration-none"
                                                                >
                                                                    Register
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }

    export default Forgotpassword