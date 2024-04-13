import { useState } from "react";
import InputField from "../sections/InputField";
import SelectVisit from "./SelectVisit";

//composant d'enregistrement des arrivées et des sortie des employées
function OtherInfoForm({active,label,url,name , handleClick , type ="time" , placeholder , pattern , min , max }){

    //fonction de modification d'une viste via l'id du visiteur ( pour l'ajout d'une heure d'arrivée ou de départ)
    const putFetcher = async ( url , data)=>{
        const options = {
            method:"PUT",
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(data)
        };

        const response = await fetch(url, options);

        if(!response.ok){
           return 0;
        }
           return 1;
       
    }

    const [info , setInfo] = useState("");
    const [visitorId , setVisitorId] = useState("");
    const [success , setSuccess] = useState(false);
    const [requestMessage , setRequestMessage] = useState("");

    //fonction de récupération des données
    const handleChange = (e)=>{
        if(e.target.name === name){
            setInfo(e.target.value);
        }
        else if(e.target.name ==="visitor"){
            setVisitorId(e.target.value);
        }
    }

    //fonction d'envoi des données à l'api
    const handleSubmit = async (e)=>{
        //on bloque le rechargement de la page
        e.preventDefault();
        //on modifie une visite
        const resultStatus = await putFetcher(url+"/"+visitorId , {[name]:info});
        console.log(resultStatus)
        //on réinitialise les champs de type info
       

        if(resultStatus === 1){
            setInfo("");
            setRequestMessage("Successfully registered info !")
        }
        else{
            setRequestMessage("Make sure that the fields are correct and that the visitor has a visit!")
        }
        
        setSuccess(true)

        setTimeout(()=>{
            setSuccess(false)
          },2000)
    }

    if(active===name){

        return <div className=' register col-lg-10 col-md-10 col-sm-9 col-xl-7 col-7' >

              <h1>
                <img src="/public/img/form.svg" alt="form_icon" width={20} height={20} />
                    {label}
              </h1>
            
            <form method="POST" onSubmit={handleSubmit}>

                {/*on selectionne le visiteur */}
                <SelectVisit event={handleChange}/>

                 {/*on definit la l'heure */}
                <InputField label={label} name={name} type={type} value={info} event={handleChange} placeholder={ placeholder} pattern={pattern} min={min} max={max} />

                <div className='d-flex justify-content-between row px-3'>
                    <button className='my-1 col-lg-4 col-12'>Save</button>
                    <button className='my-1 col-lg-4 col-12' onClick={()=>handleClick("visitList")}> Back </button>
                </div>

                 {/*le message d'alerte qui s'affiche à l'envoi des données de l'employé */}
                 <div className={success?"alert alert-success my-2 visible":"alert alert-success my-2 hide "}>
                    <strong> {requestMessage} </strong>
                  </div>

            </form>
        </div>
    }

    return null;
}

export default OtherInfoForm;