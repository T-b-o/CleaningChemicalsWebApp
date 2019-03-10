// jQuery Code

// $(document).ready(function(){
//     // Mobile navigation menu

//     $(".burger-icon").on("click", function(){
//         if($( ".main-nav" ).hasClass( ".mobile-hide" )){
//             $(".main-nav").removeClass(".mobile-hide");
//             $(".main-nav").addClass(".mobile-show");
//         }else{
//             $(".main-nav").addClass(".mobile-hide");
//             $(".main-nav").removeClass(".mobile-show");
//         }
//     });
//});

var btnClick = document.getElementById("burger-icon");
var mainNav = document.querySelector('ul');
console.log("selector");
btnClick.addEventListener("click", function(event){
    if(mainNav.hasAttribute('class')){
        mainNav.getAttribute('mobile-hide')
    }else{
        console.log("no class");
    }
});

