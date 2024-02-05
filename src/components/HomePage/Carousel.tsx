const Carousel = () => {
    return (
        <>
            <h1 className="text-center fw-medium mb-4">¿Por qué elegir Kodigo?</h1>
            <section id="carouselExampleAutoplaying" className="container carousel slide mb-5" data-bs-ride="carousel" data-bs-theme="dark">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner" style={{}}>
                    <div className="carousel-item active" style={{ backgroundColor: "violet" }}>
                        <img src="https://res.cloudinary.com/dk2oxzxoo/image/upload/c_scale,h_853,w_1280/v1707079705/kodigo-SPA-Bootcamp/work-5382501_1280_pyfd8g.jpg"
                            className="d-block w-100 object-fit-cover carousel-img" alt="..." />
                        <div className="carousel-inner-text" style={{top:"40%"}}>
                            <h1>Clases en vivo</h1>
                            <h3>Lunes a Viernes</h3>
                            <p className="d-none d-md-block pt-3 fs-5">Horarios flexibles pensados para todo tipo de estudiante.</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundColor: "violet" }}>
                        <img src="https://res.cloudinary.com/dk2oxzxoo/image/upload/v1707079705/kodigo-SPA-Bootcamp/people-2557396_1280_o5kyze.jpg"
                            className="d-block w-100 object-fit-cover carousel-img" alt="..." />
                        <div className="carousel-inner-text">
                            <h1>Prácticas y actividades</h1>
                            <h3>Todas las semanas totalmente en línea</h3>
                            <p className="d-none d-md-block pt-3 fs-5">Retos adecuados a tu nivel, actualizados al mercado competitivo.</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundColor: "violet" }}>
                        <img src="https://res.cloudinary.com/dk2oxzxoo/image/upload/v1707079705/kodigo-SPA-Bootcamp/startup-593341_1280_xufm2d.jpg"
                            className="d-block w-100 object-fit-cover carousel-img" alt="..." />
                        <div className="carousel-inner-text">
                            <h1>Asesorías Personalizadas</h1>
                            <h3>Agenda entrevista 1 a 1</h3>
                            <p className="d-none d-md-block pt-3 fs-5">Nuestros coaches expertos estan listos para brindarte ayuda.</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundColor: "violet" }}>
                        <img src="https://res.cloudinary.com/dk2oxzxoo/image/upload/c_scale,h_853,w_1280/v1707108625/kodigo-SPA-Bootcamp/teamwork-3213924_1280_ds9bmg.jpg"
                            className="d-block w-100 object-fit-cover carousel-img" alt="..." />
                        <div className="carousel-inner-text">
                            <h1>Comunidad activa</h1>
                            <h3>Estudiantes de toda latinoamérica</h3>
                            <p className="d-none d-md-block pt-3 fs-5">Somos una academia internacional que da la bienvenida a todos los que desean aprender.</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundColor: "violet" }}>
                        <img src="https://res.cloudinary.com/dk2oxzxoo/image/upload/c_scale,h_853,w_1280/v1707108625/kodigo-SPA-Bootcamp/woman-4702060_1280_motcac.jpg"
                            className="d-block w-100 object-fit-cover carousel-img" alt="..." />
                        <div className="carousel-inner-text">
                            <h1>Presenta tus proyectos</h1>
                            <h3>En Kodigo tienes voz y voto</h3>
                            <p className="d-none d-md-block pt-3 fs-5">Puedes desarrollar lo que tu quieras, y podras compartirlo con todo el mundo.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </section>
        </>
    )
}

export default Carousel