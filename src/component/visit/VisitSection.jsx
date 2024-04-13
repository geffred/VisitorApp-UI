import form from'/public/img/add-data.svg'
import listVisit from'/public/img/listVisit.svg'
import '/public/css/section.css'
import arrival from'/public/img/arrival.svg' 
import departure from '/public/img/departure.svg'
import palte from '/public/img/plate.svg'

function VisitSection({active,handleClick}){

    if(active === "visit"){
      return(
        <aside className='col-lg-10 col-7 section'>
      
             <div className='row'> 

                    <section className='col-lg-1 col-sm-0 col-0 '> </section>

                    <section className='col-lg-2 col-sm-6 col-12' onClick={()=>handleClick("visitRegistry")}>
                       <div className='box' >
                          <img src={form} alt="visitIcon" width={80} height={80} className='img-fluid'/>
                            <div> Register visits </div>
                            <span> Here you can plan a visitor's visits </span>
                       </div>
                    </section>

                    <section className='col-lg-2 col-sm-6 col-12' onClick={()=>handleClick("visitList")}>
                       <div className='box'  id="subTitle">
                          <img src={listVisit} alt="listVisit" width={80} height={80} className='img-fluid'/>
                            <div> List of vists </div>
                            <span> In this section you can consult the list of planned visits. </span>
                       </div>
                    </section>

                    <section className='col-lg-2 col-sm-6 col-12' onClick={()=>handleClick("actualArrivalTime")}>
                       <div className='box'  id="subTitle" >
                          <img src={arrival} alt="listVisit" width={80} height={80} className='img-fluid'/>
                            <div> Arrival times  </div>
                            <span>here you can record the arrival times of different visitors </span>
                       </div>
                    </section>

                    <section className='col-lg-2 col-sm-6 col-12' onClick={()=>handleClick("actualDepartureTime")}>
                       <div className='box' id="subTitle" >
                          <img src={departure} alt="actualDepartureTime" width={80} height={80} className='img-fluid'/>
                            <div> Departure times  </div>
                            <span >here you can record the arrival times of different visitors </span>
                       </div>
                    </section>

                    <section className='col-lg-2 col-sm-6 col-12' onClick={()=>handleClick("licensePlateNumber")}>
                       <div className='box' id="subTitle">
                          <img src={palte} alt="licensePlateNumber" width={80} height={80} className='img-fluid'/>
                            <div> License Plate </div>
                            <span >here you can record the arrival times of different visitors </span>
                       </div>
                    </section>

                    <section className='col-lg-1 col-sm-0 col-0'> </section>
             </div>

             <hr />
             
             <div className='row'>
                  <div className='SectionTitle'>
                      <span> Manage visits with just a few clicks  </span> <br />
                  </div>
                 
             </div>
            
        
        </aside>
      );
    }
    return null;
  }
  

export default VisitSection;