console.log("game.js loaded ✅");

let start = document.querySelector("#btn_start");
let player_1_Name = document.getElementById("player_name_1");
let player_1_PV = document.getElementById("player_pv_1");
let player_2_Name = document.getElementById("player_name_2");
let player_2_PV = document.getElementById("player_pv_2");
let barre_vie_1 =document.getElementById('barre_vie_player_1');
let barre_vie_2 =document.getElementById('barre_vie_player_2');


//*******************menu de demarrage de jeu


function verif() {
    player_1_Name = document.getElementById("player_name_1").value;
    player_1_PV = document.getElementById("player_pv_1").value;
    player_2_Name = document.getElementById("player_name_2").value;
    player_2_PV = document.getElementById("player_pv_2").value;

    if (!player_1_Name || !player_1_PV || !player_2_Name || !player_2_PV) {
        start.classList.add("is-disabled");
        console.log("esssai1")
    } else if (player_1_PV <= 0 || player_2_PV <= 0) {
        start.classList.add("is-disabled");
        console.log("essai 2")
    } else {
        start.classList.remove("is-disabled");
        document.getElementById("boite_mej").style.display = "none"
        console.log("start")
        document.getElementById("name_1").innerHTML= player_1_Name;
        document.getElementById("name_2").innerHTML= player_2_Name;
        document.getElementById("pv-p2").innerHTML= player_2_PV;
        document.getElementById("pv-p1").innerHTML= player_1_PV;
        barre_vie_1.classList.remove("is-pattern")
        barre_vie_2.classList.remove("is-pattern")


    }

}
let sword = document.getElementById("attaque_sword");
let spear = document.getElementById("attaque_spear");
let punch = document.getElementById("attaque_punch");
let meoww = document.getElementById("attaque_meoww");
let grife = document.getElementById("attaque_griffe");
let croc = document.getElementById("attaque_croc");
let vie_1= document.getElementById('pv-p1');
let vie_2 = document.getElementById('pv-p2');




//************$state des deux joueurs
function stats_player_1(){
    console.log("C'est au tour du joueur 2 de jouer")
    sword.classList.add("is-disabled");
    spear.classList.add("is-disabled");
    punch.classList.add("is-disabled");
    meoww.classList.remove("is-disabled");
    grife.classList.remove("is-disabled");
    croc.classList.remove("is-disabled");


}
function stats_player_2(){
    console.log("C'est au tour du joueur 1 de jouer")
    sword.classList.remove("is-disabled");
    spear.classList.remove("is-disabled");
    punch.classList.remove("is-disabled");
    meoww.classList.add("is-disabled");
    grife.classList.add("is-disabled");
    croc.classList.add("is-disabled");


}
//**************$chevalier
 function attaque_sword(){
    console.log("sword");
    stats_player_1();
    attack(1,"sword");
    damage(2, 10);
    player_2_PV=player_2_PV-10;
    vie_2.innerHTML= player_2_PV;
    barre_vie_2.value=player_2_PV;
     victoire()

}
function attaque_spear() {
    console.log("pears");
    stats_player_1()
    attack(1, "spear");
    damage(2, 15);
    player_2_PV=player_2_PV-15;
    vie_2.innerHTML= player_2_PV;
    barre_vie_2.value=player_2_PV;
    victoire()


}

function attaque_punch(){
    console.log(" punch");
    stats_player_1();
    attack(1,"punch");
    damage(2, 5);
    player_2_PV=player_2_PV-5;
   vie_2.innerHTML= player_2_PV;
    barre_vie_2.value=player_2_PV;
    victoire()


}

//****************chat
function attaque_meoww(){
    console.log(" miaou");
    stats_player_2();
    attack(1,"meoww");
    damage(1, 5);
    player_1_PV=player_1_PV-5;
vie_1.innerHTML= player_1_PV;
    barre_vie_1.value=player_1_PV;
    victoire()


}
function attaque_croc(){
    console.log(" croc ");
    stats_player_2();
    attack(1,"croccroc");
    damage(1, 30);
    player_1_PV=player_1_PV-30;
 vie_1.innerHTML= player_1_PV;
    barre_vie_1.value=player_1_PV;
    victoire()


}
function attaque_grife(){
    console.log(" grife");
    stats_player_2();
    attack(1,"claw");
    damage(1, 20);
    player_1_PV=player_1_PV-20;
   vie_1.innerHTML= player_1_PV;
    barre_vie_1.value=player_1_PV;
    victoire()


}
function victoire(){
    if (barre_vie_1.value <= 0){
        console.log("victoire player 2")
        victory(2);


    }
    else if (barre_vie_2.value <= 0){
        console.log("victoire player 1 ")
        victory(1);


    }
}





