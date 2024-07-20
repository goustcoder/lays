
 //cart
 const btns = document.querySelectorAll(".btn");
 const count=document.querySelector(".count");
 let time=0;
 for(btn of btns){
    btn.addEventListener("click",()=>{
        time++;
        console.log("hi");
        if(time==0){
            count.classList.add("hide");

        }
        else{
            count.classList.remove("hide");

            count.innerHTML=time;
        }
    })
 }