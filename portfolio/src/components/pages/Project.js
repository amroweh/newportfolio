import "../../CSS/projectTemplate.css"
import { useNavigate } from "react-router-dom";


const Project = ({title, introduction, link, technologies, description}) => {  
  const navigate = useNavigate();
  return (
    <div>
      <section className="projectHeader container">
        <a onClick={()=>navigate(-1)}>&#8592; back</a>
        <h1>{title}</h1>
      </section>
      <section className="textContainer projectDescription">        
          <p>{introduction}</p>
          <p>To view this project, please <a href={link} className="inTextLink">click here</a></p>
          <div className="techDescription">
              <h3>Technologies Used:</h3>
              <ul>
                {technologies.map(technology=>(<li>{technology}</li>))}                  
              </ul>
          </div>
          {description.map(paragraph=>(
            <div>
              {Object.keys(paragraph)[0]!=="null" ? <i>{Object.keys(paragraph)[0]}</i> : null}
              <p>{Object.values(paragraph)[0]}</p>
            </div>            
          ))}          
      </section>
    </div>    
  )
}

export default Project
