const Banner = () => {
    return (
        <section className="d-flex justify-content-center mb-5"
            style={{
                backgroundImage: "url(https://res.cloudinary.com/dk2oxzxoo/image/upload/v1707114748/kodigo-SPA-Bootcamp/Banner-Gradiant_x5jrec.png)",
                backgroundSize: "cover"
            }}>
            <div className="border border-3 border-white m-4 m-md-5 text-white"
                style={{ width: '1200px', height: '500px', position: "relative" }}>
                <div className="hero-title">
                    <h1 className="hero-title-brand">KODIGO</h1>
                    <p className="hero-title-brand-subtext">ACADEMIA DE TECNOLOGÍA<br /> CREATIVA</p>
                </div>
                <div className="hero-text">
                    <h2 className="hero-text-header">INVIERTE EN EL FUTURO</h2>
                    <p className="hero-text-header-subtext">INVIERTE EN TI</p>
                </div>
            </div>
        </section>
    )
}

export default Banner