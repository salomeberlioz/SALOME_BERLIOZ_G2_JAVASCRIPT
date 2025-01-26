
//formulaire
  
  //verification mail 

  let errorList = document.getElementById("errorList")

  let btn_form_valid = document.getElementById("btn_valid")

  btn_form_valid.addEventListener("click" , function() {
     //boutton valider 
     errorList.replaceChildren()

    // vérification pseudo 
    let pseudo = document.getElementById("pseudo") 

    if(pseudo.value .length <6) {
        errorList.classList.add("visible")
        pseudo.classList.remove("success")
        pseudo.classList.add("error")

        let err = document.createElement("li")
        err.innerText = "Le champ pseudo doit contenir au moins 6 caractères"

        errorList.appendChild(err)
    } else {
        pseudo.classList.add("success")
        pseudo.classList.remove("error")
    } 

    let email = document.getElementById("email") 
    if(email.value .length == 0) {
        errorList.classList.add("visible")
        email.classList.remove("success")
        email.classList.add("error")

        let err = document.createElement("li")
        err.innerText = "Renseigner votre mail"

        errorList.appendChild(err)
    } else {
        email.classList.add("success")
        email.classList.remove("error")
    } 

    // vérification mdp
    let  mdp = document.getElementById("mdp") 

    if(mdp.value .length <8) {
        errorList.classList.add("visible")
        mdp.classList.remove("success")
        mdp.classList.add("error")

        let err = document.createElement("li")
        err.innerText = "Le mots de passe doit contenir au moins 8 caractères"

        errorList.appendChild(err)
    } else {
        mdp.classList.add("success")
        mdp.classList.remove("error")
    }
    
    // vérification mdp_veri
    let  verifi_mdp = document.getElementById("verifi_mdp") 

    if((verifi_mdp.value  !== mdp.value) || verifi_mdp.value === "") {
        errorList.classList.add("visible")
        verifi_mdp.classList.remove("success")
        verifi_mdp.classList.add("error")

        let err = document.createElement("li")
        err.innerText = "Les deux mots de passe doivent correspondre"

        errorList.appendChild(err)
    } else {
        verifi_mdp.classList.add("success")
        verifi_mdp.classList.remove("error")
    } 

    // vérification boutton radio
    let  radios = document.form1.option
    console.log(test_radios_checked());
    if (test_radios_checked() === false) {
        errorList.classList.add("visible")
        let err = document.createElement("li")
        err.innerText = "Il faut cocher une case"
        errorList.appendChild(err)
    }
})


function test_radios_checked() {
    let  radios = document.form1.option;
    console.log(radios)

    for (let i=0; i < radios.length; i++) {
        if (radios[i].checked){
            console.log("checked")
            return true
        }
    } 
    return false

}