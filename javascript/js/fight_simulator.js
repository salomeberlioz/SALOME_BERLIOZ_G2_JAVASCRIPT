class fighter {
    constructor(name, life_point, attack, presicion){
        this.name = name
        this.life_point = life_point
        this.attack = attack
        this.presicion = presicion
    }
    Attack(adversaire) {
        adversaire.life_point = adversaire.life_point - this.attack
    }

    Precision() {
        let nombre_aleatoire = Math.random()
        if (nombre_aleatoire < this.presicion) {
            return true
        }else {
            return false
        }
    }
}

let btn_fight_simulator = document.getElementById("btn_fight_simulator")
btn_fight_simulator.addEventListener("click", function(){

    let fighter1 = new fighter("Marcus", 10, 3, 0.1)

    let fighter2 = new fighter("Aurélius", 15, 4, 0.2)
    
    while (fighter1.life_point > 0 && fighter2.life_point > 0) {
        console.log("C'est la bataille")
        if (fighter1.Precision()){
            fighter1.Attack(fighter2)
        }

        if (fighter2.Precision()){
            fighter2.Attack(fighter1)
        }
    }

    console.log("fighter1:"+fighter1.life_point)
    console.log("fighter2:"+fighter2.life_point)
})

