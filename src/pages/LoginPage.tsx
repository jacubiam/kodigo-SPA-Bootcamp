import { Link } from "react-router-dom"

export const LoginPage = () => {
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="card mt-5 col-4">
                    <div className="card-body align-item-center">
                        <h5 className="card-title">Log in please</h5>
                        <p className="card-title mb-5"> Log in to your account to continue</p>
                        <form>
                            <label htmlFor="email">Email or Phone number</label>
                            <input type="text"
                                name="email"
                                className="form-control mt-1 mb-3"
                                placeholder="Please type your email"
                            />
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                name="password"
                                className="form-control mt-1 mb-5"
                                placeholder="Please type your password"
                            />

                            <div className=" d-flex justify-content-center mt-4">
                                <button type="submit" className="btn btn-danger w-50">Login</button>
                            </div>
                        </form>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                        <Link className="register-link m-2" to={'/'}> Home </Link>
                        <Link className="register-link m-2" to={'/'}> Register </Link>

                    </div>

                </div>
            </div>
        </>
    )
}
