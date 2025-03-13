let articleFooter = document.querySelector(".article__footer");
let authorProfile = document.querySelector(".article__author");
let socialLinks = document.querySelector(".article__share");
let shareButton = document.getElementById("share-toggle");


function checkWindow(){
  if(window.innerWidth < 500){
    mobileView();
  }else{
    tabletView();
  }
}

window.addEventListener("load", checkWindow);
window.addEventListener("resize", checkWindow);

// function toggle profile <--> social-links (mobile view)
function mobileView(){
  shareButton.addEventListener("change", ()=>{
    console.log(shareButton.checked);
    if(shareButton.checked){
      // articleFooter.classList.toggle("article__footer--dark");
      articleFooter.classList.add("article__footer--dark");
      authorProfile.classList.toggle("article__footer-hidden");
      socialLinks.classList.toggle("article__footer-hidden");
    }else{
      articleFooter.classList.remove("article__footer--dark");
      authorProfile.classList.toggle("article__footer-hidden");
      socialLinks.classList.toggle("article__footer-hidden");
    }
  })
}

function tabletView(){
  console.log("tab view enabled");
}