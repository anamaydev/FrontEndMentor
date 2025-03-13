let articleFooter = document.querySelector(".article__footer");
let authorProfile = document.querySelector(".article__author");
let socialLinksMobile = document.querySelector(".article__share");
let shareButton = document.getElementById("share-toggle");
let mobileView = false;


// checkWidth() function checks the current width of the window
function checkWidth(){
  if(window.innerWidth < 780){
    mobileView = true;
    console.log("It's Mobile view");
    console.log(`mobileView: ${mobileView}`);
  }else{
    mobileView = false;
    console.log("It's Desktop view");
    console.log(`mobileView: ${mobileView}`);
  }
}

/*
* on loading the page, instantly
*   show ==> profile block
*   hide ==> social link
*/
window.addEventListener("load",()=>{
  socialLinksMobile.classList.add("article__footer-hidden")
  checkWidth();
})

/*
* just to be safe
* event listener (resize): calls checkWidth() function to check if it is a mobile view or not
*/
window.addEventListener("resize",checkWidth);

/*
* to hide footer use class ---> "article__footer-hidden"
* to highlight footer with social links --> "article__footer--dark"
*/
shareButton.addEventListener("change", ()=>{
  if(mobileView){
    if(shareButton.checked){
      authorProfile.classList.add("article__footer-hidden");
      socialLinksMobile.classList.remove("article__footer-hidden");
      articleFooter.classList.add("article__footer--dark");
    }else{
      authorProfile.classList.remove("article__footer-hidden");
      socialLinksMobile.classList.add("article__footer-hidden");
      articleFooter.classList.remove("article__footer--dark");
    }
  }else{
    console.log("----------- DESKTOP VIEW -----------");
    /*
    * todo:
    *  social links pop up for desktop view
    */
  }
})