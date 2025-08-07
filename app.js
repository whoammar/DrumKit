var buttons = document.querySelectorAll("button");

// Button Clicks
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var key = this.innerHTML.toLowerCase();  // Get button text
        playSound(key);
    });
}

// Key Presses
document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();  // Get key pressed
    playSound(key);
});

// Sound Player Function
function playSound(key) {
    switch (key) {
        case 'a':
            new Audio("sounds/snare.mp3").play();
            break;
        case 's':
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case 'd':
            new Audio("sounds/crash.mp3").play();
            break;
        case 'f':
            new Audio("sounds/tom-1.mp3").play();
            break;
        case 'g':
            new Audio("sounds/tom-2.mp3").play();
            break;
        case 'h':
            new Audio("sounds/tom-3.mp3").play();
            break;
        case 'j':
            new Audio("sounds/tom-4.mp3").play();
            break;
        default:
            console.log("No sound mapped for key:", key);
    }
}
