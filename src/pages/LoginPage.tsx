import { signInWithEmailAndPassword, getAuth, AuthError } from "firebase/auth"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { app } from "../firebase"
import { useState } from "react"
import { emailValidation, maxPassword, minPassword } from "../utils/validators"

export const LoginPage = () => {

    type Inputs = {
        email: string
        password: string
    }

    const auth = getAuth(app)
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const [error, setError] = useState<string | undefined>()
    const nav = useNavigate()

    const LoginUser = async (data: Inputs) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            nav('/auth/home')
            console.log("Logueado correctamente")
        } catch (error) {
            const authError = error as AuthError
            setError(authError.message.replace('Firebase: Error (auth/invalid-credential).', 'Incorrect email or password.'))
        }
    }

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="card mt-5 col-4">
                    <div className="card-body align-item-center">
                        <h5 className="card-title">Log in please</h5>
                        <p className="card-title mb-5"> Log in to your account to continue</p>
                        <form onSubmit={handleSubmit(LoginUser)}>
                            <label htmlFor="email">Email or Phone number</label>
                            <div className="mt-1 mb-3">
                                <input type="text"
                                    {...register('email', { required: 'Email is required', pattern: emailValidation })}
                                    className="form-control"
                                    placeholder="Please type your email"
                                />
                                {
                                    errors.email && <span className="text-danger">{errors.email.message}</span>
                                }
                            </div>

                            <div className="mt-1 mb-1">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    {...register('password', { required: 'Password is required', minLength: minPassword, maxLength: maxPassword })}
                                    className="form-control"
                                    placeholder="Please type your password"
                                />
                                {
                                    errors.password && <span className="text-danger">{errors.password.message}</span>
                                }
                            </div>
                            {
                                error && <span className="text-danger">{error}</span>
                            }

                            <div className=" d-flex justify-content-center mt-5">
                                <button type="submit" className="btn btn-danger w-50">Login</button>
                            </div>
                            <Link to={'/reset'}>Reset Password</Link>

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
