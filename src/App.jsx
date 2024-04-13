import VerticalMenu from './component/sections/VerticalMenu'
import Navigation from './component/sections/Navigation'
import Acceuil from './component/sections/Acceuil'
import VisitorRegistryForm from './component/visitor/VisitorRegistryForm'
import EmployeeRegistryForm from './component/employee/EmployeeRegistryForm'
import VisitRegistryForm from './component/visit/VisitRegistryForm'
import EmployeeSection from './component/employee/EmployeeSection'
import VisitorSection from './component/visitor/VisitorSection'
import VisitSection from './component/visit/VisitSection'
import VisitorList from './component/visitor/VisitorList'
import EmployeeList from './component/employee/EmployeeList'
import { useState } from 'react'
import VisitList from './component/visit/VisitList'
import OtherInfoForm from './component/visit/OtherInfoForm'
import About from './component/sections/About'

const getFetcher = async (url)=> {
  const response = await fetch(url);
  return response.json()

}

function App() {

  const defaultVisitor = {
    "id":"",
    "firstName":"",
    "lastName":"",
    "companyName":""
  };

  const defaultEmployee = {
    "firstName": "",
    "lastName":"",
    "emailAddress": "",
    "phoneNumber": ""
  };

  const [active , setActive] = useState("acceuil");

  const handleClick = (e)=>{
    console.log(active)
    setActive(e);
    
  }


  return (
    <>
      <div className='container-fluid'>
         {/* Navigation */}
          <header>
              <Navigation visibility={true} handleClick={handleClick} active={active}/>
              <Navigation visibility={false}/>
          </header>
          <main className='row main'> 
              {/* premiere  colonne */}
              <VerticalMenu visibility={true} handleClick={handleClick} active={active}/>
              <VerticalMenu visibility={false} />
              {/* deuxieme colonne */}
              <Acceuil active={active} handleClick={handleClick} />
              <EmployeeRegistryForm active={active} handleClick={()=>setActive("employeeList")} employeeData={defaultEmployee}/>
              <EmployeeSection active={active}  handleClick={handleClick}/>
              <EmployeeList active={active} url={"/employees"} fetcher={getFetcher}/>
              <VisitorSection active={active}  handleClick={handleClick} />
              <VisitorRegistryForm active={active} visitorData={defaultVisitor} handleClick={()=>setActive("visitorList")}/>
              <VisitorList active={active} url={"/visitors"} fetcher={getFetcher}/>
              <VisitRegistryForm active={active} handleClick={handleClick} />
              <VisitList active={active} url={"/visits"} />
              <VisitSection active={active}  handleClick={handleClick} />
              <OtherInfoForm active={active} label={"Arrival Time "} name={"actualArrivalTime"} url={"/visits/arrival"} handleClick={handleClick}/>
              <OtherInfoForm active={active} label={"Departure Time "} name={"actualDepartureTime"} url={"/visits/departure"} handleClick={handleClick}/>
              <OtherInfoForm active={active} label={"License Plate Number "} name={"licensePlateNumber"} url={"/visits/licensePlateNumber"} handleClick={handleClick} type='text' placeholder={"Ex: 1-AAA-001 | 7-YZZ-999"} pattern={"^[1-7]-[a-zA-Z]{3}-[0-9]{2}[1-9]$"} min={9} max={9} />
              <About active={active}/>
          </main>
      </div>
    </>
  );
}


export default App;
