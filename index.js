
// get the number of buttons

var numberOfDrumButtons =  document.querySelectorAll(".drum").length;

// add an object event listener to each Button

for(var i=0; i<numberOfDrumButtons; i++)
  {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
  }

 // note that the listener is passed without() assigned to the function


// add event listener for keyboard event
 // document.addEventListener("keydown", function(eventInfo)
 //     {
 //       handleKey(eventInfo.key); // call to function and pass event parameter
 //     });

document.addEventListener("keydown", function(kevent)
  {
    var keyPressed = kevent.key;
    handleKey(keyPressed);
  });


// gets button which was pressed
function handleClick()
  {

    var butPressed = this;
    var keySelect = butPressed.innerHTML;

    switch (keySelect) {
      case "w":
            var audio1 = new Audio("sounds/tom-1.mp3");
        break;
      case "a":
            var audio1 = new Audio("sounds/tom-2.mp3");
        break;
      case "s":
            var audio1 = new Audio("sounds/tom-3.mp3");
        break;
      case "d":
            var audio1 = new Audio("sounds/tom-4.mp3");
        break;
      case "j":
            var audio1 = new Audio("sounds/kick-bass.mp3");
        break;
      case "k":
            var audio1 = new Audio("sounds/snare.mp3");
        break;
      case "l":
            var audio1 = new Audio("sounds/crash.mp3");

        break;

      default:
      break;

    }
    audio1.play(); // Audio object has play method
    changeKeyColour(butPressed)
  }

  // function receives keydown.key object which was pressed
  function handleKey(e)
    {

      switch (e) {
        case "w":
              var audio1 = new Audio("sounds/tom-1.mp3");
              var x = document.getElementsByClassName("w drum");
              changeKeyColour(x[0]);
              // x[0].style.color = "white";
              // setTimeout(function () { x[0].style.color = "#DA0463";}, 100);
          break;
        case "a":
              var audio1 = new Audio("sounds/tom-2.mp3");
              var x = document.getElementsByClassName("a drum");
              changeKeyColour(x[0]);
          break;
        case "s":
              var audio1 = new Audio("sounds/tom-3.mp3");
              var x = document.getElementsByClassName("s drum");
              changeKeyColour(x[0]);
          break;
        case "d":
              var audio1 = new Audio("sounds/tom-4.mp3");
              var x = document.getElementsByClassName("d drum");
              changeKeyColour(x[0]);
          break;
        case "j":
              var audio1 = new Audio("sounds/kick-bass.mp3");
              var x = document.getElementsByClassName("j drum");
              changeKeyColour(x[0]);
          break;
        case "k":
              var audio1 = new Audio("sounds/snare.mp3");
              var x = document.getElementsByClassName("k drum");
              changeKeyColour(x[0]);
          break;
        case "l":
              var audio1 = new Audio("sounds/crash.mp3");
              var x = document.getElementsByClassName("l drum");
              changeKeyColour(x[0]);

          break;

        default:
        break;

      }
      audio1.play();
    }

  function changeKeyColour(x)   // takes selected object changes colour for 100ms
  {

    x.style.color = "white";
    setTimeout(function () { x.style.color = "#DA0463";}, 100);

  }
