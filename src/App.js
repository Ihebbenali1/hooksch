import { useState } from 'react';
import NavMovie from './Components/NavMovie'
import ListMovie from './Components/ListMovie'
import './App.css';
import AddMovie from './Components/AddMovie';
import FilterMovie from './Components/FilterMovie';

function App() {
  const [movies,setMovies]=useState([
    {title:"Twilight-Breaking Down", description :"La fille d'Edward et Bella est menacée par les Volturi. Les Cullen et Bella, devenue vampire, cherchent à la protéger. Après la naissance de Renesmée, les Cullen réunissent les autres clans de vampire afin de protéger l'enfant contre le grand clan Volturi." ,posterURL:"https://fr.web.img3.acsta.net/pictures/14/07/09/09/59/583881.jpg",rating : 4 , id : Math.random()},
    {title:"John Wick", description :"Ce qui aurait pu être le banal vol d'une voiture de collection se transforme en une chasse à l'homme sans merci entre un légendaire ex-tueur à gages et le fils d'un des plus grands pontes de la mafia." ,posterURL:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e1c963037530d854df59c13874500545c439076cf218131bd0061165e1f6616f._RI_V_TTW_.jpg",rating : 5  , id : Math.random()},
    {title:"The Dictator", description :"L'Amiral Général Aladeen règne sur un petit pays du nord de l'Afrique nommé Wadiya. Il prétend aimer son peuple mais n'hésite pas à faire exécuter quiconque le contredit. Lors d'un voyage à New York, il est trahi par son oncle et conseiller qui le remplace par une doublure qu'il peut contrôler à sa guise." ,posterURL:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/eac575ff69291d0be02df0d9b9fd7fe4433cc2ea687af8ea8976301f90231094._RI_V_TTW_.jpg",rating : 3 , id : Math.random()},
    {title:"I am legend", description :"Robert Neville était un brillant scientifique, mais même lui n'a pu endiguer le terrible virus - créé de la main de l'homme - qui a dévasté la race humaine. Pour une raison inconnue, Neville est immunisé et reste à ce jour le dernier être humain vivant dans ce qui reste de New York" ,posterURL:"https://resizing.flixster.com/vYsn-bvQtSrZJ3e_4nAdmkG89hA=/206x305/v2/https://flxt.tmsimg.com/assets/p170977_p_v7_ae.jpg",rating : 4 , id : Math.random()}
  ])
  const [search,setSearch]=useState('')
  return (
      <div> 
        <NavMovie/>
        <AddMovie setMovies={setMovies} movies={movies}/>
        <FilterMovie setSearch={setSearch}/>
        <ListMovie movies={movies} search={search}/>

       
      </div>
  );
}

export default App;
