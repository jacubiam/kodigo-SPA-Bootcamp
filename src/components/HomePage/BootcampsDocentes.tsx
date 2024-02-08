import { useState, useEffect } from "react"
import { collection, getDocs, query, DocumentData } from "firebase/firestore"
import { db } from "../../firebase"

interface BootcampsDocentes {
    docente: DocumentData
}

const BootcampsDocentes: React.FC = () => {
    const [docentes, setDocente] = useState<DocumentData[]>([])

    useEffect(() => {
        const getDocentes = async () => {
            const data: DocumentData[] = []
            try {
                const q = query(collection(db, 'docentes'))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                    data.push(doc.data())
                })
                setDocente(data)
            
            } catch (error) {
                console.error("Error al obtener los docentes:", error)
            }
        }
        getDocentes()
    }, [])

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Conoce a nuestros docentes</h1>
                {docentes.map((data, index) => (
                    <div key={index} className="card mt-3">
                        <div className="d-flex card-body flex-lg-row docentes">
                            <div className="flex-column mb-3">
                                <img src={data.img} className="img p-2 docentes-img" alt="..." />
                            </div>
                            <div className="p-3">
                                <p className="h2 card-title">{data.docente}</p>
                                <p className="h5 pb-1">{data.titulo}</p>
                                <p className="card-text">{data.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>

    )
}

export default BootcampsDocentes
