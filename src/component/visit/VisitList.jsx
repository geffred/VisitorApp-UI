import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import '/public/css/registry.css';
import VisitFilterForm from "./VisitFilterForm";

//composant pour afficher la liste des vistes
function VisitList({active , url }){
  // la fonction fetcher pour faire la requette vers l'api
  const fetcher = async (url)=> {
    const response = await fetch(url);
    return response.json()
  }
    //la hook pour l'url/route de l'api vers laquelle on fera une requette
    const [URL , setURL] = useState(url)
    //hook de gestion des erreurs et récupération des données de l'api
    const { data, error, isLoading } = useSWR(URL , fetcher) 
    //définition d'un state pour la date
    const [date , setDate ] = useState("");
    // récupération de la date et mise à jour su state date
    const handleChange = (e)=>{
      setDate(e.target.value)
    }

    //fonction d'envoi des données
    const handleSubmit = (e)=>{
      e.preventDefault()

      console.log(date+'hey')

      if(date !=="" ){
        //on bloque le rechargement de la page
        e.preventDefault();
        //on modifie l'url en ajouter la date que l'on a récupéré
        setURL(url+"/"+date)
        //on réinisilise la date après l'envoi des données
        setDate("")
        //on met à jour les données
        mutate(URL)
      }
      mutate(url)
      
    }

    // à chaque changement d'état du combobox on met à jour les données ( les visites en fonction du visiteur selectionné)
    const handleChangeVisitor = (e)=>{

      if(e.target.value !== ""){
        setURL("/visits/visitors/"+e.target.value)
      }else{
        setURL("visits")
      }
      mutate(URL)
    }

    // on modifie l'url par '/visits'
    const handleClick = (visitPath)=>{
      setURL(visitPath)
    }

    const handleDelete = async (id)=>{

      const options = {
        method: 'DELETE',
        headers: {
                    'Content-Type': 'application/json',
                },
        };
      const response = await fetch('/visits/'+id , options)
      
      mutate("/visits")
    }

    //à chaque changement d'état du composant on remet à jour les données avec l'url de la liste de tous les visites
    useEffect(()=>{
      mutate(URL);
    })

  
    if(active === "visitList"){
  
        if (error) return <div className='col-lg-6'> Une erreur c'est produite </div> ;
        if (isLoading) return <div  className='col-lg-6' > chargement ... </div>
      
        return<div className='col-lg-10 col-md-10 col-sm-9 col-7 ' id='list'>
                    
                    <VisitFilterForm value={date} handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick} handleChangeVisitor={handleChangeVisitor} />
                   
                    <ul className='row'>
                        {data.map((visit)=>(
                          <li key={visit.id} className='col-lg-2 col-md-3 col-sm-4 col-xl-2 col-xl-2'>
                            <div className="item-group">
                               <span>  Visit . {visit.id} </span>
                            </div>
                            <div className="item-group">
                                <span>Visitor</span>
                                <span className='colorName'>{visit.visitor.id} - {visit.visitor.firstName} - {visit.visitor.lastName}</span>
                                <span className='colorName'>{visit.visitor.companyName}</span>
                            </div>

                            <div className="item-group">
                                <span>Host</span>
                                <span className='colorName'>{visit.host.id} - {visit.host.firstName} - {visit.host.lastName}</span>
                                <span className='colorName'>{visit.host.emailAddress}</span>
                                <span className='colorName'>{visit.host.phoneNumber}</span>
                            </div>

                            <div className="item-group">
                                <span>Planning</span>
                                <span className='colorName'>Date :{visit.date}</span>
                                <span className='colorName'>planned Arrival Time : {visit.plannedArrivalTime}</span>
                                <span className='colorName'>planned Duration : {visit.plannedDuration} h</span>
                                {/*affichahe conditionnel de l'heure d'arrivé et de l'heure de départ */}
                                {visit.actualArrivalTime!=null?<span className='colorName'>Arrival Time : {visit.actualArrivalTime}</span>:null}
                                {visit.actualDepartureTime!=null?<span className='colorName'>Departure Time : {visit.actualDepartureTime}</span>:null}
                                {visit.licensePlateNumber!=null?<span className='colorName' >license Plate Number : <span id="upper" >{visit.licensePlateNumber }</span></span>:null}
                            </div>
                           
                           
                           
                           {
                           

                               <div className='link'>
                                  <button onClick={()=>handleDelete(visit.id)}>Delete</button>
          
                              </div>
                            
                           }

                          </li>
                        ))}
                    </ul>
              </div>;
    }
    return null;
}


export default VisitList;