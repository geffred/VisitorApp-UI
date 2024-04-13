import '/public/css/verticalMenu.css'


function VerticalMenu({visibility,handleClick,active}){
    let year = new Date().getFullYear()
    return (
                    <div className={visibility?"verticalMenu visibleMenu col-lg-2 col-md-2 col-sm-3 col-5":"verticalMenu hideMenu col-lg-2 col-md-2 col-sm-3 col-5"}>
                      <ul>
                          <li>  <img src="/public/img/dashboard.svg" alt="dashboard" width={20} height={20} /> Dashboard </li>
  
                          <li> <a href="#">
                             <img src="/public/img/employee.svg" alt="dashboard" width={20} height={20} />
                             <span id={["employee","employeeRegistry","employeeEdit","employeeList"].indexOf(active) != -1 ? "btn-active":" "} onClick={()=>handleClick("employee")}> Employee </span></a>
                             <ul>
                                <li><a href="#" onClick={()=>handleClick("employeeRegistry")}>Registry</a></li>
                                <li><a href="#" onClick={()=>handleClick("employeeList")}>List</a></li>
                             </ul>
                          </li>
  
                          <li> <a href="#">
                             <img src="/public/img/visitor.svg" alt="dashboard" width={20} height={20} />
                             <span id={["visitor","visitorRegistry","visitorEdit","visitorList"].indexOf(active) != -1 ? "btn-active":" "} onClick={()=>handleClick("visitor")} > Visitors </span></a>
                             <ul>
                                <li><a href="#" onClick={()=>handleClick("visitorRegistry")}>Registry</a></li>
                                <li><a href="#" onClick={()=>handleClick("visitorList")}> List </a></li>
                        
                             </ul>
                          </li>
  
                          <li> <a href="#">
                             <img src="/public/img/visit.svg" alt="dashboard" width={20} height={20} />
                             <span id={["visit","visitRegistry","visitList"].indexOf(active) != -1 ? "btn-active":" "} onClick={()=>handleClick("visit")}> Visits</span></a>
                             <ul>
                                <li><a href="#" onClick={()=>handleClick("visitRegistry")}>Registry</a></li>
                                <li><a href="#" onClick={()=>handleClick("actualArrivalTime")}>Arrival </a></li>
                                <li><a href="#" onClick={()=>handleClick("actualDepartureTime")}>Departure </a></li>
                                <li><a href="#" onClick={()=>handleClick("licensePlateNumber")}>License Plate </a></li>
                                <li><a href="#" onClick={()=>handleClick("visitList")}>List</a></li>
                             </ul>
                          </li>
                      </ul>
                      <footer>
                        <div> 
                          
                          <span> ©Copyright Groupe H</span>
                          <span onClick={()=>handleClick("about")} className='docs'> VisitorApp docs </span>
                          <span>  {year-1}-{year} </span>
                        </div>
                      </footer>
                  </div>
    );
  }

  export default VerticalMenu;