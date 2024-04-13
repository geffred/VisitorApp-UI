import useSWR from "swr";
// composant de récupération des des Employés dans un un combo box

function SelectEmployee({fetcher,event}){

    const {data , error , isLoading } = useSWR("/employees" , fetcher)
  
    if (error) return <div className='col-lg-6'> Une erreur c'est produite </div> ;
  
    if (isLoading) return <div  className='col-lg-6' > chargement ... </div>;
  
   return <div className="form-group">

            <label htmlFor="employee" >Employee</label>
            
            <select id="employee" className='form-select' onChange={event} name="host" required> 

              <option value="" > Select employee ... </option>
              {data.map((employee)=>{
              return  <option value={employee.id}  key={employee.id}>
                        {employee.id} - {employee.firstName} - {employee.lastName} 
                      </option> })}

            </select>
          </div>
    
  }

export default SelectEmployee;