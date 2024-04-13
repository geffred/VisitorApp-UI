import visitorLogo from '/public/img/visitorLogo.svg'
import '/public/css/navigation.css'

function Navigation({visibility , handleClick , active}){
    return (
                <nav className={visibility?"row  visibleNav ":"row hideNav"} >
                    <a href="#" className='logoSection col-lg-2 col-md-2 col-sm-3 col-5 ' onClick={()=>handleClick("acceuil")}>
                      <img src={visitorLogo} alt="visitorLogo" width={40} height={40} />
                      <span>VisitorApp</span>
                    </a>
                    <div className='linkSection col-lg-6 col-md-6 col-sm-7  col-4'>
                      <a href="#" onClick={()=>handleClick("employee")} id={["employee","employeeRegistry","employeeEdit","employeeList"].indexOf(active) != -1? "btn-active":" "}> Employee</a>
                      <a href="#" onClick={()=>handleClick("visitor")} id={["visitor","visitorRegistry","visitorEdit","visitorList"].indexOf(active) != -1 ? "btn-active":" "}> Visitor</a>
                      <a href="#" onClick={()=>handleClick("visit")} id={["visit","visitRegistry"].indexOf(active) != -1 ? "btn-active":" "}>Visit</a>
                      <a href="#" onClick={()=>handleClick("about")} id={active==="about"?"btn-active":" "}>About</a>
                    </div>
  
                    <div className='startSection col-lg-4 col-md-4 col-sm-2  col-7'>
                      <a href="https://www.paypal.com/paypalme/Geffred">Donate</a>
                    </div>
                </nav>
    );
  }

  export default Navigation;