var notes= document.querySelectorAll(".drum")

for(i=0;i<notes.length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        buttonAnimation(this.innerHTML)
        makeSound(this.innerHTML)
    })

}

document.addEventListener("keypress", function(event){
    buttonAnimation(event.key)
    makeSound(event.key)
})


    
function makeSound(key){

    switch (key){
        case 'w' :
            w = new Audio('sounds/crash.mp3')            
            w.play();                
            break;
        case 'a':  
            a = new Audio('sounds/kick-bass.mp3') 
            a.play();                
            break;
        case 's':
            s = new Audio('sounds/snare.mp3')            
            s.play();                
            break;
        case 'd':
            d = new Audio('sounds/tom-1.mp3')            
            d.play();                
            break;
        case 'j':
            j = new Audio('sounds/tom-2.mp3')            
            j.play();                
            break;
        case 'k':
            k = new Audio('sounds/tom-3.mp3')            
            k.play()
            break;
        case 'l':
            l = new Audio('sounds/tom-4.mp3')            
            l.play();                
            break;
        default:
    }

}
   
function buttonAnimation(key){
    var activeButton = document.querySelector("."+key)

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 200);
}





