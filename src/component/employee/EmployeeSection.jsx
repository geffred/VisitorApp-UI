
import '/public/css/section.css'
import form from'/public/img/add-data.svg'
import listVisit from'/public/img/listVisit.svg'
import '/public/css/section.css'


//composant pour le menu principale des emloyés
function EmployeeSection({active,handleClick}){

    if(active === "employee"){
      return(
        <aside className='col-lg-10 col-7 section'>
      
             <div className='row'> 

                    <section className='col-lg-3 col-sm-0'> </section>
                    <section className='col-lg-3  col-sm-6 col-12' onClick={()=>handleClick("employeeRegistry")}>
                       <div className='box'>
                          <img src={form} alt="visitIcon" width={80} height={80} className='img-fluid'/>
                            <div> Register employee </div>
                            <span> Here you can register an employee in the system. </span>
                       </div>
                    </section>

                    <section className='col-lg-3  col-sm-6 col-12' onClick={()=>handleClick("employeeList")}>
                       <div className='box'>
                          <img src={listVisit} alt="listVisit" width={80} height={80} className='img-fluid'/>
                            <div> List of employee </div>
                            <span> here you can view, modify or delete employees from the system. </span>
                       </div>
                    </section>
                    <section className='col-lg-3 col-sm-0'> </section>

             </div>

             <hr />
             
             <div className='row'>
                  <div className='SectionTitle'>
                      <span> Manage Employees with just a few clicks </span> <br />
                  </div>
                 
             </div>
            
        
        </aside>
      );
    }
    return null;
  }

export default EmployeeSection;