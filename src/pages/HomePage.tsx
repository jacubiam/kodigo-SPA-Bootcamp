import { useEffect, useState } from "react"
import { collection, getDocs, DocumentData, orderBy, query } from "firebase/firestore"
import { db } from "../firebase"
import BootcampCard from "../components/HomePage/BootcampCard"
import BootcampsDocentes from "../components/HomePage/BootcampsDocentes"
import Carousel from "../components/HomePage/Carousel"
import Banner from "../components/HomePage/Banner"
import Header from "../components/Commons/Header"
import Footer from "../components/Commons/Footer"

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
            <header className=" header-home text-center" style={{ height: "100px" }}>
                <Header />
            </header>
            <main>
                <Banner />
                <Carousel />
                <section className="container" >
                    <h1 className="text-center mb-4">Nuestros Bootcamps</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {bootcamps && bootcamps.map((bootcamp) => {
                            return (
                                <div key={bootcamp.title} className="col">
                                    <BootcampCard bootcamp={bootcamp} />
                                </div>
                            )
                        })}
                    </div>
                </section>
                <BootcampsDocentes />
            </main>
            <footer className="container my-5">
                <Footer/>
            </footer>
        </>
    )
}

export default HomePage