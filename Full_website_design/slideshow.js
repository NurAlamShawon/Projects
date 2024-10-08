var slide = document.querySelectorAll(".element");
console.log(slide.length);
var count = 1;

    setInterval(() => {
        var current = document.querySelector(".current");
        console.log(current);
        count++;
        current.classList.remove("current");
        if (count > slide.length) {
            slide[0].classList.add("current");
            count=1;
        } else {
    
            current.nextElementSibling.classList.add("current");
        }
    
    
    }, 2000)
