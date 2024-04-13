import logo from "/public/img/visitorLogoWhite.svg"


function About({active}){
    
    if(active ==="about"){

        return(
            <div className="col-lg-10 col-md-10 col-sm-9 col-7 manuel ">
                <div className=' about ' >
                    <div className="line1">
                        <div>
                            <img src={logo} alt="logo" className="img-fluid" width={50} height={50}/>
                            <span>  Manual VisitorApp </span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-12 p-3"> 
                        <h5> Manage Employees </h5>
                         <ol>
                            <li>
                                <b><em>Employee registration</em></b> <br />
                                
                                <p>
                                    Deux employés ne peuvent <em>pas avoir le même nom et prénom</em>.
                                    Deux employés ne peuvent <em>pas avoir la même adresse email</em>.
                                    La taille minimale du nom et du prénom est de 2 ; leur taille maximale est de 20.
                                    Le format du numéro de <em>téléphone est celui de la Belgique</em> (10 chiffres dont le premier commence par 0). <br />
                                    Exemple : 0467774392
                                </p>

                            </li>

                            <li>
                                <b><em>Employee List</em></b> <br />
                                
                                <p>
                                    Ici vous pouvez <em>visualiser la liste des employées enregistrés </em>. <br />
                                    Pour <em>supprimer un employé </em>, un simple clic sur <em>le bouton delete</em>
                                    suffit.Si cela ne fonctionne pas, assurez-vous que votre curseur pointe bien sur
                                    le bouton delete, puis réessayez.<em>L'édition des informations</em> d'un employé se fait en cliquant simplement sur le bouton
                                    edit. <em>NB : toutes les contraintes du point 1 sont également valables</em> pour l'édition.
                                    Lorsque l'employé est bien modifié, un message de succès s'affiche pour vous confirmer
                                    que la mise à jour des données de l'employé a réussi.
                                </p>


                            </li>
                         </ol>
                    </div>

                    <div className="col-lg-4 col-12 p-3"> 
                        <h5> Manage visitors  </h5>
                         <ol>
                            <li>
                                <b><em>visitor registration</em></b> <br />
                                
                                <p>
                                    <em>La taille minimale</em> du nom et du prénom d'un visiteur ainsi que le nom de la 
                                    société qu'il représente est de <em>2 </em>; leur <em>taille maximale</em> est de <em>20</em>.
                                    
                                </p>

                            </li>

                            <li>
                                <b><em>Visitor List</em></b> <br />
                                
                                <p>
                                    Ici, vous pouvez <em>visualiser la liste complète des visiteurs enregistrés</em>,
                                   <em> la liste des visiteurs présents, et la liste des visiteurs attendus.</em>
                                    Pour cela, il suffit juste de cliquer sur le bouton correspondant.
                                    L'édition et la suppression respectent le même principe que celui des employés.
                                    <em>NB : un visiteur attendu est un visiteur dont la visite est planifiée aujourd'hui</em>.
                                    Un visiteur est <em>présent</em> s'il arrive <em>avant l'heure de fin prévue</em> pour sa visite.
                                    C'est-à-dire que, si sa visite est prévue à 9h et qu'il a prévu de faire 2 heures ; cela veut
                                    dire que sa visite prend normalement fin à 11h. Ainsi, s'il arrive à 11h:01, il est considéré 
                                    comme absent. Sinon, s'il arrive avant 11h, il est considéré comme présent.
                                </p>


                            </li>
                         </ol>
                    </div>

                    <div className="col-lg-4 col-12 p-3"> 
                        <h5> Manage visits  </h5>
                         <ol>
                            <li>
                                <b><em>visit registration</em></b> <br />
                                
                                <p>
                                    Pour planifier une visite, il suffit de <em>sélectionner le visiteur </em>
                                    dans la combobox "visitor", <em>sélectionner l'hôte dans la combobox
                                    "Employee"</em>, choisir <em>la date</em>, <em>l'heure d'arrivée prévue</em> 
                                    et entrer la durée de la visite.
                                    <em>NB : tous les champs du formulaire sont requis.</em>
                                    <em>La durée maximale</em> d'une visite est de <em>5 heures</em>.
                                    <em>Vous ne pouvez pas créer deux visites pour un même visiteur à la
                                    même date, à des horaires qui se croisent</em>. C'est-à-dire que si un 
                                    visiteur A a une visite prévue de 10h à 12h à une date x, on ne pourra
                                    pas lui planifier une autre visite à la même date x de 11h à 13h par
                                    exemple, car il y aura confusion horaire.
                                </p>


                            </li>

                            <li>
                                <b><em> Arrival / Departure / License Plate </em></b> <br />
                                
                                <p>
                                   Ici , vous pouvez enregistrer les arrivées , les sorties ou la plaque d'immatriculation d'un visiteur .il suffit tout simplement
                                   de selection la visite du visite du visiteur dans le combo box et de selectionner la date.
                                   NB: les plaque d'immatriculation sont sous le format de ceux de la belgique.
                                   Elle est commpris entre 1-AAA-001 et 7-YZZ-999 . si vous entrer un numéro de  plaque érroné vous ne pourrez pas 
                                   l'enregistrer.
                                </p>


                            </li>

                            <li>
                                <b><em>Visit List</em></b> <br />
                                   
                                <p>
                                    Ici vous pourrez visualiser la liste des visites ,
                                    les supprimer , les filtré en fonction du visiteur ou de la date de la visite.
                                </p>


                            </li>
                         </ol>
                    </div>

                </div>
            </div>
           
        )
    }
    return null;
}

export default About;