interface Image {
  image: string
}

const BootcampTools = ({ image }: Image) => {
  return (
    <img style={{ width: "50px" }} src={image} alt="tool" className="mx-2" />
  )
}

export default BootcampTools