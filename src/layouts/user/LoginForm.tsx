import { NavLink } from 'react-router-dom';

function LoginForm() {
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            <div className="form-outline mb-4 text-start">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <label className="form-label" htmlFor="form3Example3">Username <span className="text-danger">(*)</span></label>
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid username" />
                            </div>

                            <div className="form-outline mb-3 text-start">
                                <i className="fa-solid fa-key fa-lg me-3 fa-fw"></i>
                                <label className="form-label" htmlFor="form3Example4">Password <span className="text-danger">(*)</span></label>
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to="/register"
                                    className="link-danger">Register</NavLink></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginForm;