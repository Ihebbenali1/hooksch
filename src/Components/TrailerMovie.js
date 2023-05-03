import { useNavigate, useParams } from "react-router-dom"

const TrailerMovie=({movies})=>{
    const {id}=useParams()
    const navigate=useNavigate()
    const found=movies.find(el=>el.trailer ==  id)
    
    return(
        <div>
            <h1>HEllo</h1>
            <h1>{found.description}</h1>
            <h2>{found.trailer}</h2>
            <button onClick={()=>navigate('/')}>BACK</button>
        </div>
    )
}

export default TrailerMovie