import { sendPasswordResetEmail, getAuth } from "firebase/auth"
import { app } from "../firebase"
import { useForm } from "react-hook-form"
import { emailValidation } from "../utils/validators"
import Swal from 'sweetalert2'

export const RecoverPassword = () => {

    type Inputs = {
        email: string
    }

    const auth = getAuth(app)
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()




    const pwdReset = async (data: Inputs) => {
        try {
            await sendPasswordResetEmail(auth, data.email)
            console.log("Password reset email sent")
            Swal.fire({
                title: "Email recovery sent",
                text: "If this user matches with our records you will receive an email to reset your password.",
                icon: "success"
            })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className="container d-flex justify-content-center mt-5" >
                <div className="card mt-5 col-4">
                    <div className="card-body align-item-center">
                        <h5 className="card-title">Recover your password</h5>

                        <form onSubmit={handleSubmit(pwdReset)}>
                            <div className="d-flex flex-column">
                                <label> Your email or username:</label>
                                <input type="text"
                                    className="mt-1"
                                    placeholder="Type your email"
                                    {...register('email', { required: 'Email is required', pattern: emailValidation })}
                                />
                                {
                                    errors.email && <span className="text-danger">{errors.email.message}</span>
                                }
                                <div className=" d-flex justify-content-start mt-2">
                                    <button type="submit">Email me a recovery link</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
