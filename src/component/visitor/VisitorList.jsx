import useSWR, { mutate } from 'swr'
import { useState,useEffect } from 'react'
import VisitorRegistryForm from './VisitorRegistryForm';

// création du fetcher de récupération des données
const deleteFetcher = async (url)=> {
 
  const options = {
    method: 'DELETE',
    headers: {
                'Content-Type': 'application/json',
            },
    };
  const response = await fetch(url,options)
  return response.json();

}

//création du composant d'affichage des visiteurs

function VisitorList({active , url , fetcher}) {

    const defaultVisitor = {
    "id":"",
    "firstName":"",
    "lastName":"",
    "companyName":""
    };
    // création du state de l'url vers l'api
    const [URL , setURL] = useState(url)
    // création du hook useSWR pour récupération des données et la gestion des erreurs
    const { data, error, isLoading } = useSWR(URL, fetcher) 
    // définition d'un état de l'application des des mise à jours du composant
    const [etat, setEtat] = useState(0)
    // state d'affichage du formulaire de mise à jour d'un visiteur
    const [display , setDisplay] = useState(false)
    //state de definition des données du visiteur
    const [visitorData , setVisitorData] = useState({}) 


    //à chaque changement d'état du composant , on met à jour les données de swr via la fonction mutation
    useEffect(()=>{
      mutate(url)
    })
    // fonction de suppression d'un visiteur
    const handleDelete = (id)=>{
      deleteFetcher(url+"/"+id);
      setEtat(etat + 1);
    }
    //fonction de mise à jour d'un visiteur
    const handleEdit = (visitor)=>{
      setURL(url+"/"+visitor.id);
      console.log(URL);
      setDisplay(true);
      setVisitorData(visitor);
    }
    // fonction qui permet de quitter du composant de mise à jour / enregistrement du visiteur pour le composant actuel (list des visiteurs)
    const handleClickBack = ()=>{
      setURL(url);
      setDisplay(false);
      setVisitorData(defaultVisitor)
    }

    const handleSetURL = (e)=>{
      setURL(e);
      setEtat(e+1);
      mutate(e)
    }
    
    if(active === "visitorList"){
  
        if (error) return <div className='col-lg-6'> Une erreur c'est produite </div> ;
        if (isLoading) return <div  className='col-lg-6' > chargement ... </div>;
        if(display) return <VisitorRegistryForm active={"visitorRegistry"} visitorData={visitorData} handleClick={handleClickBack} method ={"PUT"} url={URL}/>
        
        return<div className='col-lg-10 col-md-10 col-sm-9 col-7 ' id='list'>
  
                   <div className='row visitor d-flex justify-content-center p-3'>
                      <button className= {URL==="/visitors"?"col-lg-4 col-12 active" :  "col-lg-4 col-12 "} onClick={()=>handleSetURL("/visitors")}> visitor List </button>
                      <button className= {URL==="/visitors/present"?"col-lg-4 col-12 active":"col-lg-4 col-12 "} onClick={()=>handleSetURL("/visitors/present")}> Present visitor </button>
                      <button className= {URL==="/visitors/attendus"?"col-lg-4 col-12 active":"col-lg-4 col-12"}  onClick={()=>handleSetURL("/visitors/attendus")}>  waiting visitor  </button>
                   </div>
  
                    <ul className='row'>
                        {data.map((visitor)=>(
                          <li key={visitor.id} className='col-lg-2 col-md-3 col-sm-4 col-xl-2'>
                            <span> <img src="/img/person.svg" alt="visitorLogoBlack.svg" className='img-fluid' width={50} height={50}/> </span>
                            <span className='colorName firstName'>{visitor.id}.{visitor.firstName}</span>
                            <span className='colorName'>-{visitor.lastName}-</span>
                            <span className='colorName compagny'>{visitor.companyName}</span>
                            <div className='link'>
                              <button onClick={()=>handleEdit(visitor)}>Edit</button>
                              <button onClick={()=>handleDelete(visitor.id)}>Delete</button>
                            </div>
                          </li>
                        ))}
                    </ul>
              </div>;
    } 
    
    else {

    return null;
    }
    
  }
  
export default VisitorList;