import useSWR, { mutate } from 'swr'
import { useEffect, useState } from 'react'
import EmployeeRegistryForm from './EmployeeRegistryForm';

//fonctiond fetch de suppression des visiteurs
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

function EmployeeList({active , url , fetcher}) {

  const defaultEmployee = {
    "firstName": "",
    "lastName":"",
    "emailAddress": "",
    "phoneNumber": ""
  };
    // utilisation du hook useSWR pour récupérer les données
    const { data, error, isLoading } = useSWR(url , fetcher) 
    //hook pour forcer le changement d'état du composant pour la mise à jour automaique des données )
    const [etat, setEtat] = useState(0)
    // state d'affichage du formulaire de mise à jour d'un visiteur
    const [display , setDisplay] = useState(false)
    const [employeeEdit , setEmployeeEdit] = useState({})
   

    const handleDelete = (id)=>{
      //on supprime le visiteur qui à l'id 'id'
      deleteFetcher(url+"/"+id);
      //on force le changement d'état du composant pour mettre à jour les données
      setEtat(etat + 1)
    }

    const handleEdit = (employee)=>{
      setEmployeeEdit(employee)
      setDisplay(true)
    }
    // on met à jour les données à chaque changement d'état du composant
    useEffect(()=>{
        mutate(url);
      })

      const handleClickBack = ()=>{
        setDisplay(false)
        setEmployeeEdit(defaultEmployee)
      }
    
    if(active === "employeeList"){
  
        if (error) return <div className='col-lg-6'> Une erreur c'est produite </div> ;
        if (isLoading) return <div  className='col-lg-6' > chargement ... </div>;
        if (display) return <EmployeeRegistryForm active = {"employeeRegistry"} employeeData={employeeEdit} url={"/employees/"+employeeEdit.id} method='PUT' handleClick={handleClickBack}/>
        return<div className='col-lg-10 col-md-10 col-sm-9 col-7 ' id='list'>
                    <ul className='row'>
                        {data.map((employee)=>(
                          <li key={employee.id} className='col-lg-2 col-md-3 col-sm-4  col-xl-2'>
                            <span> <img src="/img/person.svg" alt="visitorLogoBlack.svg" className='img-fluid' width={50} height={50}/> </span>
                            <span className='colorName firstName'>{employee.firstName}</span>
                            <span className='colorName'>-{employee.lastName}-</span>
                            <span>{employee.emailAddress}</span>
                            <span>{employee.phoneNumber}</span>
                            <div className='link'>
                        
                            
                              <button onClick={()=>handleEdit(employee)}>Edit</button>
                              <button onClick={()=>handleDelete(employee.id)}>Delete</button>
                            </div>
                          </li>
                        ))}
                    </ul>
              </div>;
    }
    return null;
  }

export default EmployeeList;