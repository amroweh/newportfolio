import '../../CSS/showcase.css'

const Showcase = ({showcaseImage}) => {
  return (
    <section id="showcase" className="container">
        <div id="showcaseText">
            <h1>ALI</h1>
            <h1>MROWEH</h1>
            <p>I enjoy creating websites and software tools with a purpose. I try to look for projects that have a beneficial impact on businesses and people, and I love to code for environmental causes.</p>
        </div>
        <div id="showcaseImage">            
            <img src={showcaseImage} />
        </div>        
    </section>
  )
}

export default Showcase
