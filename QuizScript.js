const tab=["b","c","a","d","d","c","a"];
const form= document.querySelector('.quiz-form');
form.addEventListener('submit',funcForm)

    function funcForm(e){
        e.preventDefault();
        const result=[];
        const BouttonsRadios= document.querySelectorAll("input[type='radio']:checked");
   
    BouttonsRadios.forEach((radiobutton,index)=>{
        if(radiobutton.value === tab[index]){
            result.push(true)
        }
        else{
            result.push(false)
        }
       
    }) 
    funcResultat(result);
}
    const resulta= document.querySelector('.resultat');
    const titreResult= document.querySelector('.resultat h2');
    const ScoreResult= document.querySelector('.resultat .score');
    const infoResult= document.querySelector('.resultat .info');

    function funcResultat(res){
        const nbreErreurs= res.filter(el => el === false).length;
        console.log(nbreErreurs);

        switch(nbreErreurs){
            case 0 :
                resulta.style.backgroundColor = "rgb(125,241,129)"
                titreResult.innerText=`😎 Bravo tu as tout juste  !!!😎 `;
                infoResult.innerText=`Bien joué`;
                ScoreResult.innerHTML=`Score <span>7/7</span>`;
                break;
            case 1 :
                    resulta.style.backgroundColor = "rgb(50,205,50)"
                    titreResult.innerText=`Il y a ${nbreErreurs} erreurs`;
                    infoResult.innerText=`😃 Il en manque juste un !!!😃 `;
                    ScoreResult.innerHTML=`Score <span>6/7</span>`;
                    break;
            case 2 :
                   resulta.style.backgroundColor = "rgb(255,255,0)"
                   titreResult.innerText=`Il y a ${nbreErreurs} erreurs`;
                   infoResult.innerText=`🧐Vérifie bien tes réponses🧐`;
                   ScoreResult.innerHTML=`Score <span>5/7</span>`;
                   break;   
            case 3 :
                    resulta.style.backgroundColor = "rgb(255,140,0)"
                    titreResult.innerText=`Il y a ${nbreErreurs} erreurs`;
                    infoResult.innerText=`😏Encore un peu d'éffort !!!😏`;
                    ScoreResult.innerHTML=`Score <span>4/7</span>`;
                    break;  
            case 4 :
                    resulta.style.backgroundColor = "rgb(255,140,0)"
                    titreResult.innerText=`Il y a ${nbreErreurs} erreurs`;
                    infoResult.innerText=`😏Encore un peu d'éffort !!!😏`;
                    ScoreResult.innerHTML=`Score <span>3/7</span>`;
                    break;  
            case 5 :
                    resulta.style.backgroundColor = "rgb(255,140,0)"
                    titreResult.innerText=`Il y a ${nbreErreurs} erreurs`;
                    infoResult.innerText=`😏Encore un peu d'éffort !!!😏`;
                    ScoreResult.innerHTML=`Score <span>2/7</span>`;
                    break; 
            case 6 :
                    resulta.style.backgroundColor = "rgb(255,69,0)"
                    titreResult.innerText=`Il y a ${nbreErreurs} erreurs`;
                    infoResult.innerText=`🫢Tu n'y ais pas encore !! 🫢`;
                    ScoreResult.innerHTML=`Score <span>1/7</span>`;
                    break;
            case 7 :
                    resulta.style.backgroundColor = "rgb(255,0,0)"
                    titreResult.innerText=`Il y a ${nbreErreurs} erreurs`;
                    infoResult.innerText=`😓Insuffisant😓`;
                    ScoreResult.innerHTML=`Score <span>0/7</span>`;
                    break;  
                    default:
                        titreResult.innerText = ` il y eu erreur`


        }
    } 
