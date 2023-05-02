import { Rating } from "@mui/material"



const FilterMovie=({setSearch})=>{
    
    return(
        <div>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search"/>
            <Rating name="simple-contorlled"/>
            <button>Reset</button>
            
           
            
        </div>
    )
}

export default FilterMovie