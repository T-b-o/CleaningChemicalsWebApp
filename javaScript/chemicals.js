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
btnClick.addEventListener("click", function menuIcon(){
    var mainNav = document.getElementById("myLinks");
    if(mainNav.style.display === "none"){
        mainNav.style.display === "block";
    }else{
        mainNav.style.display === "none";
    }
});








// console.log("selector");
// btnClick.addEventListener("click", function(){
//     if(mainNav.getElementsByClassName("menu-hide")){
//         mainNav.getAttribute('mobile-show');
//     }else{
//         console.log("no class");
//         mainNav.getAttribute('mobile-hide');
//     }
// });

// window.onclick()

