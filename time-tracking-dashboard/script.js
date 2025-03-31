function init(){
  let dataCache = null;

  // navigation buttons
  const dailyBtn = document.getElementById("daily-btn");
  const weeklyBtn = document.getElementById("weekly-btn");
  const monthlyBtn = document.getElementById("monthly-btn");

  //user card
  const userCard = document.getElementById("user-card");

  // work hours
  const workCurrent = document.getElementById("work-current");
  const workPrevious = document.getElementById("work-previous");

  // play hours
  const playCurrent = document.getElementById("play-current");
  const playPrevious = document.getElementById("play-previous");

  // study hours
  const studyCurrent = document.getElementById("study-current");
  const studyPrevious = document.getElementById("study-previous");

  // exercise hours
  const exerciseCurrent = document.getElementById("exercise-current");
  const exercisePrevious = document.getElementById("exercise-previous");

  // social hours
  const socialCurrent = document.getElementById("social-current");
  const socialPrevious = document.getElementById("social-previous");

  // self-care hours
  const selfCareCurrent = document.getElementById("self-care-current");
  const selfCarePrevious = document.getElementById("self-care-previous");


  // getting data
  async function getData(){
    try{
      const response = await fetch('./data.json');
      dataCache = await response.json();
    }catch (error){
      console.log(error.message);
    }

    // displaying weekly data on loading
    displayData('weekly');
    weeklyBtn.classList.add('user-card__btn--active');
  }

  // displaying the data
  function displayData(requestedTimeFrame){
    dataCache.forEach((activity) => {
      const activityTitle = activity['title'];
      const activityTimeFrame = activity['timeframes'];

      if(activityTitle === 'Work'){
        workCurrent.innerText = `${activityTimeFrame[requestedTimeFrame].current}hrs`;
        if(requestedTimeFrame === 'daily'){
          workPrevious.innerText = `Yesterday - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else if(requestedTimeFrame === 'weekly'){
          workPrevious.innerText = `Last Week - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else{
          workPrevious.innerText = `Last Month - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
      }else if(activityTitle === 'Play'){
        playCurrent.innerText = `${activityTimeFrame[requestedTimeFrame].current}hrs`;
        if(requestedTimeFrame === 'daily'){
          playPrevious.innerText = `Yesterday - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else if(requestedTimeFrame === 'weekly'){
          playPrevious.innerText = `Last Week - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else{
          playPrevious.innerText = `Last Month - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
      }else if(activityTitle === 'Study'){
        studyCurrent.innerText = `${activityTimeFrame[requestedTimeFrame].current}hrs`;
        if(requestedTimeFrame === 'daily'){
          studyPrevious.innerText = `Yesterday - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else if(requestedTimeFrame === 'weekly'){
          studyPrevious.innerText = `Last Week - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else{
          studyPrevious.innerText = `Last Month - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
      }else if(activityTitle === 'Exercise'){
        exerciseCurrent.innerText = `${activityTimeFrame[requestedTimeFrame].current}hrs`;
        if(requestedTimeFrame === 'daily'){
          exercisePrevious.innerText = `Yesterday - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else if(requestedTimeFrame === 'weekly'){
          exercisePrevious.innerText = `Last Week - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else{
          exercisePrevious.innerText = `Last Month - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
      }else if(activityTitle === 'Social'){
        socialCurrent.innerText = `${activityTimeFrame[requestedTimeFrame].current}hrs`;
        if(requestedTimeFrame === 'daily'){
          socialPrevious.innerText = `Yesterday - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else if(requestedTimeFrame === 'weekly'){
          socialPrevious.innerText = `Last Week - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else{
          socialPrevious.innerText = `Last Month - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
      }else{
        selfCareCurrent.innerText = `${activityTimeFrame[requestedTimeFrame].current}hrs`;
        if(requestedTimeFrame === 'daily'){
          selfCarePrevious.innerText = `Yesterday - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else if(requestedTimeFrame === 'weekly'){
          selfCarePrevious.innerText = `Last Week - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
        else{
          selfCarePrevious.innerText = `Last Month - ${activityTimeFrame[requestedTimeFrame].previous}hrs`;
        }
      }
    })
  }

  // removing nav buttons active state
  function removeActiveState(){
    dailyBtn.classList.remove('user-card__btn--active');
    weeklyBtn.classList.remove('user-card__btn--active');
    monthlyBtn.classList.remove('user-card__btn--active');
  }

  // loading animation
  function loadingAnimation(){
    let windowHalfHeight = window.innerHeight/2;
    let userCardHalfHeight = userCard.offsetHeight/2;

    // activity cards initial state => opacity none
    gsap.set('.dashboard .activity-card-wrapper', {opacity: 0});
    // user card initial state => shift vertically mid
    gsap.set(userCard, {y: windowHalfHeight - userCardHalfHeight, opacity: 0});

    // creating timeline
    const step = gsap.timeline();

    // step 1: shift userCard back to original position
    step.to(userCard, {
      y: 0,
      opacity: 1,
      duration: 2,
    })

    // step 2: show activity cards one by one
    step.to('.dashboard .activity-card-wrapper', {
      opacity: 1,
      stagger: 0.2,
      scale: 1.05,
    })

    // step 3: scale back to original
    step.to('.dashboard .activity-card-wrapper', {
      scale: 1,
      stagger: 0.2,
    })
  }

  // calling getData function on page loading
  window.addEventListener('load', ()=> {
    loadingAnimation();
    getData()
  });

  dailyBtn.addEventListener('click', ()=> {
    displayData('daily');
    removeActiveState();
    dailyBtn.classList.add('user-card__btn--active');
  });

  weeklyBtn.addEventListener('click', ()=> {
    displayData('weekly');
    removeActiveState();
    weeklyBtn.classList.add('user-card__btn--active');
  });

  monthlyBtn.addEventListener('click',()=> {
    displayData('monthly');
    removeActiveState();
    monthlyBtn.classList.add('user-card__btn--active');
  });
}

init();