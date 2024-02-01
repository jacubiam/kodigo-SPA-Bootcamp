import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { app } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const LoggedInPage = () => {
    const auth = getAuth(app)
    const nav = useNavigate()

    const logout = async () => {
        await signOut(auth)
        nav('/login')
    }

    useEffect(() => {
        const authentication = async () => {
            await onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log("Logged")
                } else {
                    nav('/login')
                }
            })
        }
        authentication()
    }, [auth, nav])

    return (
        <>
            <h1>Logged in page</h1>
            <button type="button" onClick={logout}>End session</button>
        </>
    )
}
