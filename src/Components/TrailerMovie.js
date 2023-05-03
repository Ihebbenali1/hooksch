import { useNavigate, useParams } from "react-router-dom"

const TrailerMovie=({movies})=>{
    const {id}=useParams()
    const navigate=useNavigate()
    console.log("Trailer",movies)
    console.log(id)
    const found=movies.find(el=>el.id ==  id)
    console.log(found)
    return(
        <div>
            <h1>HEllo</h1>
            <h1>{found.description}</h1>
            <iframe width="560" height="315" src={found.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <button onClick={()=>navigate('/')}>BACK</button>
        </div>
    )
}

export default TrailerMovie