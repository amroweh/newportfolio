import Project from '../pages/Project'

const introduction = "This project consisted of the the complete overhaul of the Integrated Solid Waste Management (ISWA) Lebanon's website. The main objective was to create a more easily updatable website with a clean and clear design. This would help ISWA Lebanon's members post content more regularly and in an easier manner, particularly new publications and events."
const description = [
  {"Gathering Requirements":"Through various user research methods such as surveys and focus groups, the following..."},
  {"Methodology":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eaque vitae quia dicta dolor. Dignissimos, fugit ad. Velit iure fugit hic! Voluptatem consectetur numquam deleniti nobis quod nulla repellat necessitatibus reiciendis, dignissimos nam explicabo id soluta corporis odit quas at."},
  {null:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eaque vitae quia dicta dolor. Dignissimos, fugit ad. Velit iure fugit hic! Voluptatem consectetur numquam deleniti nobis quod nulla repellat necessitatibus reiciendis, dignissimos nam explicabo id soluta corporis odit quas at."}
]

const Iswa = () => {
  return (
    <Project title="ISWA Lebanon Website" introduction={introduction} link="https://www.iswalebanon.org/" technologies={["PHP","Laravel","HTML","CSS","JavaScript","MySQL"]} description={description}/>    
  )
}

export default Iswa
