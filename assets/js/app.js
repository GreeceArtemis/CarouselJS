$( () => {
    var index = 1;
    var t=5000;
    var mySlides = document.getElementsByClassName("my-slides");
    showNext1();
    //Time to Slide
    function showNext1() {
        for (var i = 0; i < mySlides.length; i++) {
           mySlides[i].style.display = "none";
        }
        index++;
        if (index > mySlides.length) {
          index = 1;
        }
        if(index>0){
          console.log(index);
          mySlides[index-1].style.display = "block";
        }
        else{
          index=6;
          mySlides[index-1].style.display = "block";
        }
    }
    setInterval(showNext1, 5000);
    $("#btnBefore").on('click',(e) => {
      e.preventDefault();
        for (var i = 0; i < mySlides.length; i++) {
           mySlides[i].style.display = "none";
        }
          index=index-1;
          if(index>0){
            mySlides[index-1].style.display = "block";
          }
          else{
            index=6;
             mySlides[index-1].style.display = "block";
          }
    });
    $(".my-slides").on('click',(e) => {
      e.preventDefault();
         var i = $(this).index();
         console.log(i);
      });
    $("#btnAfter").on('click',(e) => {
      e.preventDefault();
        index++;
        for (var i = 0; i < mySlides.length; i++) {
           mySlides[i].style.display = "none";
        }
        if (index > mySlides.length) {
          index = 1;
        }
        mySlides[index-1].style.display = "block";    });
    $('ul li').click(function() {
      var j = $(this).index();
      index=j;
      var t=5000;
      showNext1();
        });

  });
