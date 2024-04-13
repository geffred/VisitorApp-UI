import {useState } from 'react';
import '/public/css/registry.css';
import InputField from '../sections/InputField';

//creation de la fonction fetch pour interagir avec l'api
const postFetcher = async (url , method , data)=>{
  const options = {
    method:method,
    headers:{
      'content-type': 'application/json',
    },
    body:JSON.stringify(data)
  }
  
  const response = await fetch(url , options);  

  if(response.ok){
    return 1;
  }
    return 0;
}

function VisitorRegistryForm({active , visitorData , handleClick , method = "POST" , url = "/visitors"}) {
  //création d'un visiteur de base ( avec des données vides )
  const defaultVisitor = {
    "id":"",
    "firstName":"",
    "lastName":"",
    "companyName":""
  }
//création et initialisation du state pour un visiteur
const [visitor , setVisitor ] = useState(visitorData)
 //création du state pour la gestion du message de success lors de l'envoi des données de l'employé au serveur
 const [success , setSuccess] = useState(false);
 const [requestMessage , setRequestMessage] = useState("");

//fonctiond'ajout des données dans le state
const handleChange = (e)=>{
  setVisitor({...visitor,[e.target.name]:e.target.value})
}

//fonction de soumission des donnée de l'employé vers l'api
const handleSubmit = async (e)=>{

  e.preventDefault();
  //on crée un  objet qui va stocker les données de l'employé
  const visitorData = {
    "id":visitor.id,
    "firstName":visitor.firstName,
    "lastName":visitor.lastName,
    "companyName":visitor.companyName
  }
  //on envoi ou modifie les données en fonction de la methode 'method'
  const resultStatus = await postFetcher(url , method , visitorData)

  if(resultStatus == 1){
    //on réinialise le state avec des données vides
    setVisitor(defaultVisitor)
    setRequestMessage("successfully registered Visitor !")
  }
  else{

    setRequestMessage("please respect the formualire fields")
  }

  //on signale que les données sont bien envoyé : il passe à tru
  setSuccess(true)

  //aprés 2 seconde on arrét de le signal : il passe à false
  setTimeout(()=>{
    setSuccess(false)
  },2000)

 }

    if(active === "visitorRegistry" ){

      return (
            <div className='register col-lg-10 col-md-10 col-sm-9 col-xl-7 col-7'>
  
               <h1>
                <img src="/public/img/form.svg" alt="form_icon" width={20} height={20} />
                  Register visitors
              </h1>
  
              <form action="#" method="POST" className={active==="employee"?"Display":" "} autoComplete='off' onSubmit={handleSubmit}>
                  
                  <InputField label={"First Name"} event={handleChange} value={visitor.firstName} placeholder={"Prénom"} name={"firstName"}/>
                  <InputField label={"Last Name"} event={handleChange} value={visitor.lastName} placeholder={"Nom"} name={"lastName"}/>
                  <InputField label={"Compagny"} event={handleChange} value={visitor.companyName} placeholder={"Compagny"} name={"companyName"}/>
                
                 <div className='d-flex justify-content-between  row px-3'>
                    <button type='submit' className='my-1 col-lg-4 col-12'> Submit </button>
                    <button type='button' className='my-1 col-lg-4 col-12' onClick={handleClick}> Back </button>
                 </div>

                  {/*le message d'alerte qui s'affiche à l'envoi des données de l'employé */}
                 <div className={success?"alert alert-success my-2 visible":"alert alert-success my-2 hide "}>
                    <strong> {requestMessage} </strong>
                 </div>

              </form>
  
            </div>
      );
    }
    return null;
  }


  

  export default VisitorRegistryForm;