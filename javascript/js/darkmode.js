//dark mode

let btn = document.getElementsByTagName("button")
console.log(btn[0])

const body = document.querySelector("body");
console.log(body.classList)

btn[0].addEventListener("click", function(){ //boutton switch dark ou light mode 
    console.log("élément cliqué")
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
      this.textContent = "Light Mode"
    }else {
      this.textContent = "Dark Mode"
    }
})