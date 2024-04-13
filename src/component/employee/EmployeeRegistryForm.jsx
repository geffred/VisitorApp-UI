import { useEffect, useState } from 'react';
import InputField from '../sections/InputField';
import '/public/css/registry.css'

function EmployeeRegistryForm({active , handleClick , employeeData , method="POST", url="/employees"  }) {

  //création d'un employé vide pour initialiser notre state employee
  const defaultEmployee = {
    "firstName": "",
    "lastName":"",
    "emailAddress": "",
    "phoneNumber": ""
  };

  //création et inialisation du state
  const [employee , setEmployee] = useState(employeeData)
  //création du state pour la gestion du message de success lors de l'envoi des données de l'employé au serveur
  const [success , setSuccess] = useState(false);
  const [requestMessage , setRequestMessage] = useState("");

  //fetcher d'envoi des données vers l'api
  const postFetcher = async (url , data)=>{
    const options = {
      method:method,
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    }

    let response = await fetch(url, options);

    const result = await response.json();
    console.log(result)
    if(response.ok)return 1;
    if(result === "NOT_ACCEPTABLE") return 2; 
    return 0;
         
  }

  //pour chaque changement dans le formulaire on récupère les données dans un objet le nom de la cible et la valeur
  const handleChange = (e)=>{
    setEmployee({...employee , [e.target.name]:e.target.value})
  }

  /* à la soumission du formulaire , on bloque son envoi , pour ne pas recharger la page 
   * on envoi les données via le post fetcher , puis on fait un reset du state en lui passant des données vides
  */
  const handleSubmit = async (e)=>{

    const employeeData = {
      "firstName": employee.firstName,
      "lastName": employee.lastName,
      "emailAddress": employee.emailAddress,
      "phoneNumber": employee.phoneNumber
    };

    e.preventDefault();

    const resultStatus = await postFetcher(url, employeeData);

    if(resultStatus === 1){
      
        setEmployee(defaultEmployee);
        setRequestMessage("successfully registered Employee !")
    }
    else if(resultStatus === 2){
        setRequestMessage("this email address already exists !")
    }
    else{

        setRequestMessage("please respect the formualire fields")
    }

    setSuccess(true)

    setTimeout(()=>{
      setSuccess(false)
    },2000)

  }




    // la condition d'affichage du composant
    if(active === "employeeRegistry"){
        
      return (
            <div className='register col-lg-10 col-md-10 col-sm-9 col-xl-7 col-7'>
  
              <h1>
                <img src="/public/img/form.svg" alt="form_icon" width={20} height={20} />
                Register Employees
              </h1>
  
              <form action="#" method="POST" className={active==="employee"?"Display":" "} autoComplete='off' onSubmit={handleSubmit} >

                  <InputField label={"First Name"} event={handleChange} value={employee.firstName} placeholder={"Prénom"} name={"firstName"}/>
                 
                  <InputField label={"Last Name"} event={handleChange} value={employee.lastName} placeholder={"Nom"} name={"lastName"}/>

                  <div className="form-group">
                      <label htmlFor="Email">Email</label>
                      <input type='email' id="email" name='emailAddress' className='form-control' placeholder="Ex: groupeh@gmail.com" onChange={handleChange}  value={employee.emailAddress} required/> 
                  </div>

                  <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input type='tel' id="phoneNumber" name="phoneNumber" className='form-control' placeholder="Ex: 0467774395" pattern='^[0-9]{10}$' onChange={handleChange} value={employee.phoneNumber} minLength={10} maxLength={10} required/> 
                  </div>
                  
                 <div className='d-flex justify-content-between row px-3'>
                      <button type='submit' className='my-1 col-lg-4 col-12' > Submit </button>
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

export default EmployeeRegistryForm;