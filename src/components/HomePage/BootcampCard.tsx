import { DocumentData, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import { useEffect, useState } from "react"
import BootcampTools from './BootcampTools'

interface Bootcamp {
    bootcamp: DocumentData
}

const BootcampCard: React.FC<Bootcamp> = ({ bootcamp }) => {
    const [tools, setTools] = useState<DocumentData>({})

    useEffect(() => {
        const getTools = async () => {
            let data = {}
            const q = query(collection(db, 'tools'), where('bootcampTitle', '==', bootcamp.title))
            const getTools = await getDocs(q)
            getTools.forEach((tool) => {
                data = tool.data()
            })
            setTools(data)
        }

        getTools()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="card overflow-auto" style={{ minHeight: "500px" }}>
            <img src={bootcamp.image} className="card-img-top" style={{ height: "220px", objectFit: "contain" }} alt="..." />
            <h6 className={bootcamp.level == "intermedio" ? "badge text-bg-warning" : "badge text-bg-info"}>{bootcamp.level.toUpperCase()}</h6>
            <div className="card-body">
                <h5 className="card-title">{bootcamp.title}</h5>
                <p className="card-text">{bootcamp.description}</p>
                <div className="d-flex justify-content-between align-items-center" style={{ width: "10rem" }}>
                    <h6 className="bg-success p-2 rounded text-white mb-0">Duración</h6>
                    <span className="text-success fw-medium">{bootcamp.duration_days <= 30 ? bootcamp.duration_days + " Días" : (bootcamp.duration_days / 30 + " Meses")}</span>
                </div>
                {tools.img &&
                    <>
                        <p className="card-text mx-auto text-white my-4 fw-medium p-2 rounded" style={{ backgroundColor: "purple", width: "fit-content" }}>Herramientas</p>
                        <div className="d-flex justify-content-center flex-wrap">
                            {tools.img.map((icon: string) => {
                                return (
                                    <BootcampTools key={icon} image={icon} />
                                )
                            })}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default BootcampCard