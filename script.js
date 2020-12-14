/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

const AFRAME = window.AFRAME;

    AFRAME.registerComponent("timer", 
{
  init: function() 
  {
    
    var ufo = document.querySelector('#ufo');
 
    var start = new Date().getTime();
    
    var update = setInterval(function() 
    {
      var now = new Date().getTime();
      var distance = now - start;

      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.querySelector("#time").setAttribute("text","value: " + minutes + "m" + seconds + "s");
      document.querySelector("#time2").setAttribute("text","value: " + minutes + "m" + seconds + "s");
      document.querySelector("#time3").setAttribute("text","value: " + minutes +  "m" + seconds + "s");
      document.querySelector("#time4").setAttribute("text","value: " + minutes +  "m" + seconds + "s");
      if (minutes >= 6) 
      {
        clearInterval(update);
        document.querySelector("#time").setAttribute("text","value: "+"SELF DESTRUCT");
        document.querySelector("#time2").setAttribute("text","value: "+"SELF DESTRUCT");
        document.querySelector("#time3").setAttribute("text","value: "+"SELF DESTRUCT");
        document.querySelector("#time4").setAttribute("text","value: "+"SELF DESTRUCT");
        document.querySelector("#boySays").setAttribute("text","value: "+"Good job killing us...");
      }
        
      ufo.addEventListener('grab-start', function() 
         {
            clearInterval(update);
            document.querySelector("#time").setAttribute("text","value: "+"You Win!");
            document.querySelector("#time2").setAttribute("text","value: "+"You Win!");
            document.querySelector("#time3").setAttribute("text","value: "+"You Win!");
            document.querySelector("#time4").setAttribute("text","value: "+"You Win!");
            document.querySelector("#boySays").setAttribute("text","value: "+"You found it! Lets go!");
        });
  },1000);
    
  }
})

