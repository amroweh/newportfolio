import Project from '../pages/Project'

const introduction = "Some introduction for this network graph project"
const description = [
  {"Gathering Requirements":"gathering requirements here..."},
  {"Methodology":"Some methodology..."},
  {null:"another paragraph..."}
]

const NetworkGraph = () => {
    return (
        <Project title="Force-Directed Network Graph" introduction={introduction} link="/" technologies={["D3.JS","JavaScript","HTML","CSS"]} description={description}/>    
      )
}

export default NetworkGraph
