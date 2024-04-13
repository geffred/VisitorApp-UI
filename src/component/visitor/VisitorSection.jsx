import '/public/css/section.css'
import form from'/public/img/add-data.svg'
import listVisit from'/public/img/listVisit.svg'
import '/public/css/section.css'

function VisitorSection({active,handleClick}){

    if(active === "visitor"){
      return(
        <aside className='col-lg-10 col-7 section'>
      
        <div className='row'> 

               <section className='col-lg-3 col-sm-0'> </section>
               <section className='col-lg-3  col-sm-6 col-12' onClick={()=>handleClick("visitorRegistry")}>
                  <div className='box'>
                     <img src={form} alt="visitIcon" width={80} height={80} className='img-fluid'/>
                       <div> Visitor Registry </div>
                       <span> Here you can register an visitor in the system. </span>
                  </div>
               </section>

               <section className='col-lg-3  col-sm-6 col-12' onClick={()=>handleClick("visitorList")}>
                  <div className='box'>
                     <img src={listVisit} alt="listVisit" width={80} height={80} className='img-fluid'/>
                       <div> visitor List </div>
                       <span> here you can view, modify or delete visitors from the system. </span>
                  </div>
               </section>
               <section className='col-lg-3 col-sm-0'> </section>

        </div>

        <hr />
        
        <div className='row'>
             <div className='SectionTitle'>
                 <span> Manage visitors with just a few clicks  </span> <br />
             </div>
            
        </div>
       
   
  
        </aside>
      );
    }
    return null;
  }

export default VisitorSection;