import '../../CSS/projects.css'

const Projects = () => {
  return (
    <section id="projects" className="container">        
        <h3>Selected Projects</h3>        
        <ul>
            <li><a href="/project/iswa">ISWA Lebanon Website.</a></li>
            <li><a href="/project/networkgraph">Force-Directed Network Graph.</a></li>
            <li><a href="projectTemplate.html">Ingredient Swap.</a></li>            
        </ul>
        <a className="linkButton" href="/allprojects">View All Projects &#8594;</a>
    </section>
  )
}

export default Projects
