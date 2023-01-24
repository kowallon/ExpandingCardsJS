const panels = document.querySelectorAll('.panel')


function removeActive(){
panels.forEach((panel) =>{
    if(panel.classList.length > 1){
        panel.classList.remove('active')
    }
})
}

panels.forEach((panel) =>{
   panel.addEventListener("click", ()=>{
    removeActive()
    panel.classList.add("active")
   }) 
})




// document.addEventListener("click",function(e){
//     console.log(e.target.id)
//     removeActive()
//     document.getElementById(e.target.id).classList.add('active')
// })