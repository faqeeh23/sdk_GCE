window.addEventListener("scroll", function () {
    let landingPage = document.getElementById("landing");
    if (window.scrollY > 50) { 
        landingPage.classList.add("hidden");
    }
});

document.getElementById("enter-btn").addEventListener("click", function(){
    document.getElementById("landing").classList.add("hidden")
})