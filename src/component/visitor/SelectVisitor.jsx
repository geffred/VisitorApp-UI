import { useState } from "react";
import useSWR from "swr";

function SelectVisitor({fetcher="/visitors",event}){

    const {data , error , isLoading } = useSWR("/visitors" , fetcher)
  
    if (error) return <div className='col-lg-6'> Une erreur c'est produite </div> ;
  
    if (isLoading) return <div  className='col-lg-6' > chargement ... </div>;
  
   return <div className="form-group">
            <label htmlFor="visitor" >Visitor</label>
            <select id="visitor" className='form-select'  onChange={event} name="visitor" required> 
            <option value="" > Select visitor ... </option>
            {data.map((visitor)=>{
            return  <option value={visitor.id} key={visitor.id}>
                      {visitor.id} - {visitor.firstName} - {visitor.lastName} - {visitor.companyName} 
                    </option> })}
            </select>
          </div>
    
  }

  export default SelectVisitor;