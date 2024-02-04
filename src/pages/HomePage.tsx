import { collection, getDocs, DocumentData, orderBy, query } from "firebase/firestore"
import { db } from "../firebase"
import { useEffect, useState } from "react"
import BootcampCard from "../components/HomePage/BootcampCard"
import { Link } from "react-router-dom"


const HomePage = () => {
    const [bootcamps, setBootcamps] = useState<DocumentData[]>([])

    useEffect(() => {
        const data: Array<DocumentData> = []
        const fetchBootcampData = async () => {
            const q = query(collection(db, 'bootcamps'), orderBy('level'))
            const fetchBootcamps = await getDocs(q)
            fetchBootcamps.forEach((doc) => {
                data.push(doc.data())
            })

            setBootcamps(data)
        }

        fetchBootcampData()
    }, [])

    return (
        <>
            <header className="text-center" style={{ height: "100px" }}>
                <h3>Placeholder del footer</h3>
                <Link className="me-3" to={'/signup'}>Crear cuenta</Link>
                <Link to={'/login'}>Iniciar sesión</Link>
            </header>
            <div className="container" >
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {bootcamps && bootcamps.map((bootcamp) => {
                        return (
                            <div key={bootcamp.title} className="col">
                                <BootcampCard bootcamp={bootcamp} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default HomePage