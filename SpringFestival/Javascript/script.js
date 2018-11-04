  window.onload =function(){

     let page1=document.getElementById("page1");
     let page2=document.getElementById("page2");
     let page3=document.getElementById("page3");


     let music=document.getElementById("music");
     let audio=document.getElementsByTagName("audio")[0];
     //当音乐停止后，光盘应该停止旋转
        audio.addEventListener("ended",function (event) {
            music.setAttribute("class","");
            music.style.animationPlayState="paused"
        },false);
      /*  music.onclick=function() {
             if(audio.paused){
                    audio.play();
                    this.setAttribute("class","play");
                   // this.style.animationPlayState="running";
                    //this.style.webkitanimationPlayState="running";
                }
                else{
                   audio.pause();
                   this.setAttribute("class","");
                   //this.style.animationPlayState="paused";
                  // this.style.webkitanimationPlayState="running";
                }
           }
    */
        music.addEventListener("touchstart",function (event){
            if(audio.paused){
                audio.play();
                this.setAttribute("class","play");
            }
            else{
                audio.pause();
                this.setAttribute("class","");
            }

        },false);

      page1.addEventListener("touchstart",function (event) {
          this.style.display="none";
          page2.style.display="block";
          page3.style.display="block";
          page3.style.top="100%";

          setTimeout(function(){
              page2.setAttribute("class","page fadeOut");
              page3.setAttribute("class","page fadeIn");
          },5500);
      },false)

    }

