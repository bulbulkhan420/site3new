$(document).ready(function(){
    $(".barc").click(function(){
        $(".clbar").css("left","0px");
    });
    $(".clbar i").click(function(){
        $(".clbar").css("left","-100%");
    });
    var x=0,y=0,wd=$(window).width();
    $(".icong").click(function(){
        x--;
        if(x<0)
        x=4;
        y--;
        if(y<0)
        y=2;
        if(y==0){
            document.querySelector(".dote1").style.border="1px solid white";
            document.querySelector(".dote2").style.border="0px";
            document.querySelector(".dote3").style.border="0px";
        }
      else  if(y==1){
            document.querySelector(".dote1").style.border="0px";
            document.querySelector(".dote2").style.border="1px solid white";
            document.querySelector(".dote3").style.border="0px";
        }
       else if(y==2){
            document.querySelector(".dote1").style.border="0px";
            document.querySelector(".dote2").style.border="0px";
            document.querySelector(".dote3").style.border="1px solid white";
        }
        if(x==1){
            document.querySelector(".banner").style.backgroundImage="url('M2.webp')";
        }
       else if(x==2){
            document.querySelector(".banner").style.backgroundImage="url('M3.webp')";
        }
       else if(x==3){
            document.querySelector(".banner").style.backgroundImage="url('M4.webp')";
        }
       else if(x==4){
            document.querySelector(".banner").style.backgroundImage="url('M5.webp')";
        }
       else if(x==0){
            document.querySelector(".banner").style.backgroundImage="url('ab.png')";
        }
    });
    $(".iconl").click(function(){
        x++;
        if(x>4)
        x=0;
        y++;
        if(y>2)
        y=0;
        if(y==0){
            document.querySelector(".dote1").style.border="1px solid white";
            document.querySelector(".dote2").style.border="0px";
            document.querySelector(".dote3").style.border="0px";
        }
      else  if(y==1){
            document.querySelector(".dote1").style.border="0px";
            document.querySelector(".dote2").style.border="1px solid white";
            document.querySelector(".dote3").style.border="0px";
        }
       else if(y==2){
            document.querySelector(".dote1").style.border="0px";
            document.querySelector(".dote2").style.border="0px";
            document.querySelector(".dote3").style.border="1px solid white";
        }
        if(x==1){
            document.querySelector(".banner").style.backgroundImage="url('M2.webp') ";
        }
       else if(x==2){
            document.querySelector(".banner").style.backgroundImage="url('M3.webp') ";
        }
       else if(x==3){
            document.querySelector(".banner").style.backgroundImage="url('M4.webp') ";
        }
       else if(x==4){
            document.querySelector(".banner").style.backgroundImage="url('M5.webp') ";
        }
       else if(x==0){
            document.querySelector(".banner").style.backgroundImage="url('ab.png') ";
        }
    });
    
    $(".alliso").click(function(){
     $(".pt1").show(500);
     $(".pt2").show(500);
     $(".pt3").show(500);
     $(".pt4").show(500);
     $(".pt5").show(500);
     $(".pt6").show(500);
     $(".pt7").show(500);
     $(".pt8").show(500);
     if(wd>1170)
     $(".filterb").css("grid-template-areas","'pt1 pt2 pt3 pt4''pt5 pt6 pt7 pt8'");
     else if(wd>800)
     $(".filterb").css("grid-template-areas","'pt1 pt2' 'pt3 pt4''pt5 pt6''pt7 pt8'");
     else
     $(".filterb").css("grid-template-areas","'pt1' 'pt2''pt3' 'pt4''pt5''pt6''pt7''pt8'");
    });
    $(".webiso").click(function(){
     $(".pt1").hide(500);
     $(".pt2").show(500);
     $(".pt3").show(500);
     $(".pt4").hide(500);
     $(".pt5").show(500);
     $(".pt6").hide(500);
     $(".pt7").show(500);
     $(".pt8").hide(500);
     if(wd>1170)
     $(".filterb").css("grid-template-areas","'pt2 pt3 pt5 pt7'");
     else if(wd>800)
     $(".filterb").css("grid-template-areas","'pt2 pt3' 'pt5 pt7'");
     else
     $(".filterb").css("grid-template-areas","'pt2' 'pt3''pt5' 'pt7'");
    });
    $(".logoiso").click(function(){
     $(".pt1").hide(500);
     $(".pt2").hide(500);
     $(".pt3").show(500);
     $(".pt4").show(500);
     $(".pt5").hide(500);
     $(".pt6").hide(500);
     $(".pt7").show(500);
     $(".pt8").hide(500);
     if(wd>1170)
     $(".filterb").css("grid-template-areas","'pt3 pt4 pt7 .'");
     else if(wd>800)
     $(".filterb").css("grid-template-areas","'pt3 pt4' 'pt7 .'");
     else
     $(".filterb").css("grid-template-areas","'pt3' 'pt4''pt7'");
    });
    $(".wordpressiso").click(function(){
     $(".pt1").show(500);
     $(".pt2").hide(500);
     $(".pt3").show(500);
     $(".pt4").hide(500);
     $(".pt5").show(500);
     $(".pt6").hide(500);
     $(".pt7").show(500);
     $(".pt8").show(500);
     if(wd>1170)
     $(".filterb").css("grid-template-areas","'pt1 pt3 pt5 pt7''pt8 . . .'");
     else if(wd>800)
     $(".filterb").css("grid-template-areas","'pt1 pt3' 'pt5 pt7''pt8 .'");
     else
     $(".filterb").css("grid-template-areas","'pt1' 'pt3''pt5' 'pt7''pt8'");
    });
    $(".ecommarchiso").click(function(){
     $(".pt1").hide(500);
     $(".pt2").hide(500);
     $(".pt3").show(500);
     $(".pt4").show(500);
     $(".pt5").show(500);
     $(".pt6").hide(500);
     $(".pt7").hide(500);
     $(".pt8").hide(500);
     $(".filterb").css("grid-template-areas","'pt3 pt4 pt5 .'");
     if(wd>1170)
     $(".filterb").css("grid-template-areas","'pt3 pt4 pt5 .'");
     else if(wd>800)
     $(".filterb").css("grid-template-areas","'pt3 pt4' 'pt5 .'");
     else
     $(".filterb").css("grid-template-areas","'pt3' 'pt4''pt5'");
    });
$(".dragsld").owlCarousel({
 loop:true,
 nav:false,
 dots:true,
 margin:10,
 responsive:{
     0:{
     
         items:1
         
     },
     600:{
         
         items:1
     
     },
     
     1000:{
         
         items: 2
         
     }
     
 }
})
    
});