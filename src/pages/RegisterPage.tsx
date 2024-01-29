import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { app } from "../firebase"
import { useState } from "react"
import { emailValidation, maxPassword, minPassword } from "../utils/validators"

export const RegisterPage = () => {

    type Inputs = {
        email: string
        password: string
        confirmPassword: string
    }

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const auth = getAuth(app)
    const [error, setError] = useState<string | undefined>()

    const createUser = async (data: Inputs) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password)
        } catch (error) {
            setError(error.message.replace('Firebase:', ''))
        }

        console.log(data)
    }

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="card mt-5 col-4">
                    <div className="card-body align-item-center">
                        <h5 className="card-title">Register please</h5>
                        <p className="card-title mb-5"> Sign in to continue</p>
                        <form onSubmit={handleSubmit(createUser)}>
                            <label>Email or Phone number</label>
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
                            <div className="mt-1">
                                <label>Password</label>
                                <input type="password"
                                    {...register('password', { required: 'Password is required', minLength: minPassword, maxLength: maxPassword })}
                                    className="form-control"
                                    placeholder="Please type your password"
                                />
                                {
                                    errors.password && <span className="text-danger">{errors.password.message}</span>
                                }
                            </div>
                            <div className="mt-1 mb-5">
                                <label>Confirm your Password</label>
                                <input type="password"
                                    {...register('confirmPassword', { required: 'Confirmation password is required', minLength: minPassword, maxLength: maxPassword })}
                                    className="form-control"
                                    placeholder="Please type your confirmation password"
                                />
                                {
                                    errors.password && <span className="text-danger">{errors.password.message}</span>
                                }
                            </div>
                            <div className="mt-3">
                                <label htmlFor="profile-name">What is your name?</label>
                                <input type="profile-name"
                                    name="text"
                                    className="form-control"
                                    placeholder="Please type your profile name: "
                                />
                            </div>

                            <div className=" d-flex justify-content-center mt-4">
                                <button type="submit" className="btn btn-danger w-50">Create account</button>
                            </div>
                        </form>
                        {
                            error && <span className="text-danger">{error && `${error} Login instead`}</span>
                        }
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                        <Link className="register-link m-2" to={'/'}> Home </Link>
                        <Link className="register-link m-2" to={'/login'}> Login instead </Link>

                    </div>

                </div>
            </div>
        </>
    )
}
