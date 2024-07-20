# lays
This is a lays website
# listen
I made two branches for you 
1. home branch for you kousik.
2.front branch for you sourin.

 <script>
        const slides = document.querySelectorAll(".slide");
    const pre=document.querySelector(".pre");
    const post=document.querySelector(".post");
    let counter =0;
    slides.forEach((slide,index)=>{
      slide.style.left=`${index *100}%`;
    })
    pre.addEventListener("click",()=>{
        counter--;
        slideImage();
        console.log("clicked",counter);
    })
    post.addEventListener("click",()=>{
        counter++;
        slideImage();
        console.log("clicked");
        console.log("clicked",counter);
    })
     const slideImage=()=>{
        slides.forEach((slide)=>{
            if(counter>=7){
                counter=0;
            }else if(counter<0){
              counter=6;
            }
            slide.style. transform=`translateX(-${counter*100}%)`
        })
     }
     window.setInterval(()=>{
        counter++;
      slideImage()
     },4000);
    </script>   