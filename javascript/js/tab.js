let lis = document.getElementsByTagName("li")
console.log(lis)
let divs = document.getElementsByTagName("div")
console.log(divs)

Array.from(lis).forEach((li) => {
    console.log(li)
    li.addEventListener("click", function(){
        console.log("tab cliqué")
        Array.from(lis).forEach((li) => {
            console.log(li)
            li.classList.remove("tab-active")
            
        })
        Array.from(divs).forEach((div) => {
            console.log(li)
            div.classList.remove("active")
            
        })
        this.classList.add("tab-active")
        if(this.classList.contains("tab-nomDuContenu1")){
            let mydiv = document.querySelector(".nomDuContenu1")
            mydiv.classList.add("active")
        }
        if(this.classList.contains("tab-nomDuContenu2")){
            let mydiv = document.querySelector(".nomDuContenu2")
            mydiv.classList.add("active")
        }
        if(this.classList.contains("tab-nomDuContenu3")){
            let mydiv = document.querySelector(".nomDuContenu3")
            mydiv.classList.add("active")
        }
    
    })
})
