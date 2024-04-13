import { useState } from "react";
import useSWR from "swr";

function SelectVisit({fetcher="/visits",event,firstOptionDisplay}){

    const {data , error , isLoading } = useSWR("/visits" , fetcher)
  
    if (error) return <div className='col-lg-6'> Une erreur c'est produite </div> ;
  
    if (isLoading) return <div  className='col-lg-6' > chargement ... </div>;
  
   return <div className="form-group">
            <label htmlFor="visitor" >Visit</label>
            <select id="visitor" className='form-select'  onChange={event} name="visitor" required> 
            {!firstOptionDisplay? <option value="" > Select visit ... </option>:null}
            {data.map((visit)=>{
            return  <option value={visit.id} key={visit.id}>
                            visit {visit.id} - visitor -{visit.visitor.id} - {visit.visitor.firstName} - {visit.visitor.lastName} - {visit.visitor.companyName} 
                    </option> })}
            </select>
          </div>
    
  }

  export default SelectVisit;