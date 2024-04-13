import '/public/css/acceuil.css'

function Acceuil({active , handleClick}){

    if(active === "acceuil"){
      return (
              <>
                <div className={active==="acceuil"?"container col-lg-10 col-7 acceuil ":"container col-7 col-lg-10 acceuil "}>
                    <div className='row'> 
                        <div className='col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-center'> <img src="/public/img/man.svg" alt="man" className='img-fluid' /></div>
                        <div className='col-lg-6 col-md-6 col-sm-8'>
                          <h2><b> BIENVENU SUR </b> <br /><span>VISITORAPP</span> </h2>
                          <p className='pe-5'>  l'application open source de <span>gestion des visiteurs</span> au sein de votre entreprise.Voici quelques étapes clés pour utiliser visitorApp.</p>
                          <ol>
                              <li>Enregistrer un employé de l'entreprise </li>
                              <li>Enregistrer les visteurs de l'entreprise </li>
                              <li>Enregistrer et gérer les visites</li>
                          </ol>
                          <a href="#" onClick={()=>handleClick("employee")}> Commencer </a>
                         
                        </div>
                    </div>
                </div>
              </>
            );
  
    }
    return null;
  }

  export default Acceuil;