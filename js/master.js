$(document).ready(function () {

  new WOW().init();

  // $( "#bg-header" ).animate({
  //   opacity: 0.25,
  //   left: "+=500",
  //   height: "toggle"
  // }, 4000, function() {
  //   // Animation complete.
  // });


  var imgs = $('#bg-header img');
  // function sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }


  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  console.log('mohamed');

  const doSomething = async () => {
    await sleep(2000);
    //do stuff
  }


    // slides animations
    sleep(10000).then(() => {
      //do stuff
      $( "#slide-1" ).animate({
        opacity: 0.25,
        top: "-=500",
        height: "toggle"
      }, 3000, function() {
        sleep(10000).then(() => {


          // Animation complete.
          $( "#slide-2" ).animate({
            opacity: 0.25,
            top: "-=500",
            height: "toggle"
          }, 3000, function() {

            sleep(10000).then(() => {
              //do stuff
              // Animation complete.
              $( "#slide-3" ).animate({
                opacity: 0.25,
                top: "-=500",
                height: "toggle"
              }, 3000, function() {
                // Animation complete.
              });
            })//sleep

          });

        })//sleep

      });
    })


    for(var i = 1;i==3;i++) {
  }



});
