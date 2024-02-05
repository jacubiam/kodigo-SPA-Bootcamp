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
                console.log(data)
            } catch (error) {
                console.error("Error al obtener los docentes:", error)
            }
        }
        getDocentes()
    }, [])

    return (
        <>
            <div className="container mt-5">
                {docentes.map((data, index) => (
                    <div className="card mt-3">

                        <div key={index} className="d-flex card-body flex-row">
                            <div className="flex-column mb-3">
                                <img src={data.img} className="img p-2" alt="..." />
                            </div>
                            <div className="p-3">
                                <p className="h2 card-title">{data.docente}</p>
                                <p className="h5 pb-3">{data.titulo}</p>
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
