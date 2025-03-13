let articleFooter = document.querySelector(".article__footer");
let authorProfile = document.querySelector(".article__author");
let socialLinksMobile = document.querySelector(".article__share");
let socialLinksTablet = document.querySelector(".article__share-tablet");
let shareButton = document.getElementById("share-toggle");
let mobileView = false;


// checkWidth() function checks the current width of the window
function checkWidth(){
  if(window.innerWidth < 672){
    mobileView = true;
    console.log("It's Mobile view");
    console.log(`mobileView: ${mobileView}`);
  }else{
    mobileView = false;
    console.log("It's Desktop view");
    console.log(`mobileView: ${mobileView}`);
  }
}


function defaultShareState(){
  // share tablet pop up: hidden
  socialLinksTablet.classList.remove("article__share-tablet--visible");

  // share mobile block: hidden
  socialLinksMobile.classList.add("article__footer-hidden")
  // author profile: visible
  authorProfile.classList.remove("article__footer-hidden");
  // footer background-color: light
  articleFooter.classList.remove("article__footer--dark");

  // force share button state to uncheck
  shareButton.checked = false;
}

/*
* on loading the page, instantly
*   defaultShareState:
*     - hide: both share mobile + tablet views
*     - hide: footer background-color (mobile view)
*     - hide:
*/
window.addEventListener("load",()=>{
  defaultShareState();
  checkWidth();
})

/*
* just to be safe
* event listener (resize): calls checkWidth() function to check if it is a mobile view or not
*/
window.addEventListener("resize",()=>{
  checkWidth();
  defaultShareState();
});

/*
* Mobile view:
*   to hide footer, use class ---> "article__footer-hidden"
*   to highlight footer with social links --> "article__footer--dark"
* Desktop View:
*   to show pop up use class --> "article__share-tablet--visible"
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

    if(shareButton.checked){
      socialLinksTablet.classList.add("article__share-tablet--visible");
    }else{
      socialLinksTablet.classList.remove("article__share-tablet--visible");
    }
  }
})