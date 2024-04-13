import '/public/css/registry.css'
import SelectVisitor from '../visitor/SelectVisitor';
import SelectEmployee from '../employee/SelectEmployee';
import { useState } from 'react';



function VisitRegistryForm({active , handleClick}) {

    const  emptyVisit =  {
      "visitor":{},
      "host":{},
      "date": "",
      "plannedArrivalTime":"",
      "plannedDuration": "" , 
    };

    const  [visit,setVisit] = useState(emptyVisit);
    const  [visitor , setVisitor] = useState({})
    const  [host , setHost] = useState({})
    const  [success , setSuccess] = useState(false);
    const  [requestMessage , setRequestMessage] = useState("");

  
    const getFetcher = async (url)=> {
      const response = await fetch(url);
      return response.json()
    }
  
    const postFetcher = async (url, data) => {
      
        const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
         });

        if(response.ok){
          return 1;
        }
          return 0;
      
    };

    const handleChange = (e)=>{

      setVisit({...visit,[e.target.name] : e.target.value })

      if(e.target.name === "visitor"){
          getFetcher("/visitors/" + e.target.value).then((data)=>{ 
            setVisitor(data);
          })
      }
      else if(e.target.name === "host"){
        getFetcher("/employees/" + e.target.value).then((data)=>{ 
          setHost(data);
         })
      }
    }

    const handleSubmit = async (e)=>{

      e.preventDefault();
      const visitData = {
        "visitor":visitor,
        "host":host,
        "date": visit.date,
        "plannedArrivalTime":visit.plannedArrivalTime,
        "plannedDuration": 3600*parseInt(visit.plannedDuration), 
      };
      console.log(visitData)
      const resultStatus = await postFetcher('/visits',visitData);

      if(resultStatus == 1){
      
        setVisit(emptyVisit);
        setRequestMessage("successfully registered visit !")
      }
      else{

          setRequestMessage("please revise keyboard entries !")
      }
      
      setSuccess(true)

      setTimeout(()=>{
        setSuccess(false)
      },2000)

    }


    if(active === "visitRegistry"){

      return (
            <div className=' register col-lg-10 col-md-10 col-sm-9 col-xl-7 col-7 '>
  
               <h1>
                  <img src="/public/img/form.svg" alt="form_icon" width={20} height={20} />
                  Register visits
              </h1>
  
              <form action="#" method="POST" className={active==="employee"?"Display":" "} autoComplete='off' onSubmit={handleSubmit}>
                  
                  <SelectVisitor fetcher={getFetcher} event={handleChange}/>

                  <SelectEmployee fetcher={getFetcher} event={handleChange} />
                
                  <div className="form-group">
                      <label htmlFor="date">Date</label>
                      <input type="date" id="date" className='form-control' name='date' onChange={handleChange} placeholder="Nom " value={visit.date} required /> 
                  </div>

                 {
                  /*
                     <div className="form-group">
                      <label htmlFor="plannedArrival Time">Planned Arrival Time</label>
                      <input type='time' id="plannedArrivalTime" name='plannedArrivalTime' onChange={handleChange} className='form-control'  value={visit.plannedArrivalTime} required  step={900*15} /> 
                     </div>
                  */
                 }

                  <div className='row'>

                       <div className='form-group'>
                          <label htmlFor="plannedArrivalTime">Planned Arrival Time  </label>
                          <select name="plannedArrivalTime" id="plannedArrivalTime" className='form-select' onChange={handleChange} value={visit.plannedArrivalTime} required >
                               {
                                (visit.plannedArrivalTime ==="") ? (<option value="">--:--</option>) : null
                               }
                              {
                                ['07','08','09','10','11','12','13','14','15','16','17','18','19','20'].map((hour)=>{
                                    return ['00','15','30','45'].map((minute)=>{
                                    return <option key={crypto.randomUUID().toString()} value={hour+":"+minute+":00"}>{hour} : {minute}</option>
                                  })
                                  
                                })
                              }
                            </select>
                       </div>

                  </div>

                  <div className="form-group">
                      <label htmlFor="plannedDuration">Planned Duration (hour) </label>
                      <input type='number' id="plannedDuration" name='plannedDuration' onChange={handleChange} className='form-control'  value={visit.plannedDuration} min={1} max={5} required /> 
                  </div>

                  <div className='d-flex justify-content-between row px-3'>
                     <button type='submit' className='my-1 col-lg-4 col-12'> Submit </button>
                     <button onClick={()=>handleClick("visitList")} className='my-1 col-lg-4 col-12'>Back</button>
                  </div>

                   {/*le message d'alerte qui s'affiche à l'envoi des données de l'employé */}
                   <div className={success?"alert alert-success my-2 visible":"alert alert-success my-2 hide "}>
                    <strong> {requestMessage} </strong>
                  </div>

              </form>
            </div>
      );
    }
    return null;
  }
export default VisitRegistryForm;