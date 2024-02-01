import { sendPasswordResetEmail, getAuth } from "firebase/auth"
import { app } from "../firebase"
import { useForm } from "react-hook-form"
import { emailValidation } from "../utils/validators"

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
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit(pwdReset)}>
                <label> Email or username </label>
                <input type="text"
                    placeholder="Type your email"
                    {...register('email', { required: 'Email is required', pattern: emailValidation })}
                />
                {
                    errors.email && <span className="text-danger">{errors.email.message}</span>
                }
                <button type="submit">Password Reset</button>
            </form>
        </>
    )
}
