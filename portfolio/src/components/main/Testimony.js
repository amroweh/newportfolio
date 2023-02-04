import '../../CSS/testimony.css'

const Testimony = ({testimonyImage}) => {
  return (
    <section id="testimony" className="container">
        <div id="testimonyQuote">
            <h2>&ldquo;Working with Ali and Suvodeep has allowed us to explore possibilities that otherwise wouldn't have made it past the office whiteboard&rdquo;</h2>
            <h3>Daniel Blaney, CEO of Ferrio</h3>
        </div>        
        <div id="testimonyImage">
            <img src={testimonyImage} alt="" />
        </div>        
    </section>
  )
}

export default Testimony
