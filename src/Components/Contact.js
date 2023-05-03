import { useNavigate } from "react-router-dom"

const Contact=()=>{
    const navigate=useNavigate()
    return (
        <div>
            <h1>Hello , welcome to my netfliks website , theres no actual films but thanks for stopping by ! </h1>
            <button onClick={()=>navigate('/')}>BACK</button>
        </div>
    )
}


export default Contact