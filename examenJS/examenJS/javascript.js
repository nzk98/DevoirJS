//initilisation des variable 
let email = document.getElementById('email');
let mdp = document.getElementById('password');
let generateur = document.getElementById('genererPassword');
let mdp2 = document.getElementById('password2');
let couleur = document.getElementById('couleur');
let inscrire = document.getElementsByName('submit');
let emaillog = document.getElementById('email_login');
let passwordlog = document.getElementById('password_login');
let draggable = document.getElementById('draggable');
let droppable = document.getElementById('droppable');
let voir = document.getElementsByTagName('voirPassword');

//fonction pour generer le MPD
function generateurMDP(){
    //je deffinie les lettre que je souhaite
    let lettre = 'abcdefghijklmnopqrstuvwxyz';
    let lettreMaj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let speciaux ='!?/';
    let chiffre ='123456789';
    //j'initialise la variable MDP vide
    let  pass1 = '';
    let  pass2 = '';
    let  pass3 = '';
    let  pass4 = ''; 
    //je commence ma boucle for
    for(i=0;i<8;i++){
        let gene = Math.round(Math.random()*lettre.length);
        pass1 += lettre.substring(gene,gene+1)
    }
    for(i=0;i<2;i++){
        let gene = Math.round(Math.random()*lettreMaj.length);
        pass2 += lettreMaj.substring(gene,gene+1)
    }
    for(i=0;i<3;i++){
        let gene = Math.round(Math.random()*speciaux.length);
        pass3 += speciaux.substring(gene,gene+1)
    }
    for(i=0;i<2;i++){
        let gene = Math.round(Math.random()*chiffre.length);
        pass4 += chiffre.substring(gene,gene+1)
    }
    mdp.value=pass1+pass2+pass3+pass4;
    mdp2.value=pass1+pass2+pass3+pass4;
}

//j'appelle la fonction generateur de MDP
generateur.addEventListener('click',generateurMDP);
//fonction pour voir le mdp
// function voirmdp(){
//     mdp.removeAttribute('disabled')
// }
$('.voir').click(()=>{
    $('mdp').show();

    console.log('couocu')
})
// voir.addEventListener('click',voirmdp)


//fonction pour activer le boutton submit quand les champ sont saisie dans le formulaire inscription
function activersubmit(){
    //si les champ ne son pas nul alors effectue ceci
    if(( !email.value == '')&&( !mdp.value == '')&&( !mdp2.value == '')){
        console.log('coucou');
        //afficher dans la console coucou si les condition son remplit
        //enlever l'attribut disabled si les condition son remplit
        inscrire.removeAttribute('disabled');
    }
}
//si un touche est appuyer sur les champ alors elle effectuer la fonction activer
email.addEventListener('input', function(){
    activersubmit();
});
mdp.addEventListener('input', function(){
    activersubmit();
});
mdp2.addEventListener('input', function(){
    activersubmit();
});

//afficher la couleur dans la div
couleur.addEventListener('click', function(){
    console.log('couleur');
    document.body.style.backgroundColor = couleur.value
})

//création de la class inscrit
class Inscrit{
    constructor(email,mdp,mdp2){
        this.email = email.value;
        this.mdp = mdp.value;
    }
}