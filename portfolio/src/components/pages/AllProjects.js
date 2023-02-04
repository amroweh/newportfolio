import "../../CSS/allProjects.css"

const AllProjects = () => {
  return (
    <div>
      <section class="projectHeader container allProjectsHeader">
        <a href="index.html#projects">&#8592; back</a>
        <h1>My Projects.</h1>
      </section>
      <section id="allProjects" class="container">
          <ul>
              <li><a href="/project/iswa">1. ISWA Lebanon Website.</a></li>
              <li><a href="/project/networkgraph">2. Force-Directed Network Graph.</a></li>
              <li><a href="#">3. Ingredient Swap.</a></li>  
              <li><a href="#">4. Old Portfolio</a></li>
          </ul>
      </section>
    </div>
  )
}
export default AllProjects
