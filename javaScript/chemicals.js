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

// var btnClick = document.getElementById("burger-icon");
function menuIcon(){
    var mainNav = document.getElementById("myLinks");
    if(mainNav.style.display === "block"){
        mainNav.style.display = "none";
    }else{
        mainNav.style.display = "block";
    }
}









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

