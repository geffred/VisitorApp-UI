import SelectVisitor from "../visitor/SelectVisitor";

//formualire de filtre de filtre d'un composant via un visiteur

function VisitFilterForm({value , handleChange , handleSubmit , handleClick , handleChangeVisitor }){
    return  <div className="container" id="searchRegister">
  
                <form method="POST" onSubmit={handleSubmit}>

                  <div className="row d-flex  justify-content-around ">
                        {/*Champs pour renseigner la date d'une visite à rechercher */}
                        <div className="form-group col-lg-6 col-12 ">
                              <label htmlFor="date">Search Visit by date</label>
                              <input type="date" id="date" className="form-control" onChange={handleChange} value={value} required />
                        </div>
                          {/*boutton de recherche de visit via une date*/}
                        <div className="col-lg-4 col-12 d-flex ">
                              <button type="submit">Search  </button>
                        </div>
                        {/*combo box de visiteur*/}
                        
                  </div>
                  
                </form>
                <SelectVisitor event={handleChangeVisitor} />
  
                <div className="row visitMenu">

                        <button className="col-lg-2" onClick={()=>handleClick("/visits")}> All visits </button>

                </div>
            </div>
  }

  export default VisitFilterForm;