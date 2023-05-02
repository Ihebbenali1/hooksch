import CardMovie from "./CardMovie"

const ListMovie=({movies,search})=>{
    return(
        <div className='cards'>
            {
                movies.filter(el=>el.title.toUpperCase().includes(search.toUpperCase())).map(el=><CardMovie el={el}/>)            
                
                
            }
        </div>
    )
}


export default ListMovie