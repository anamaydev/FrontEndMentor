function init(){
  let dataCache = null;

  // navigation buttons
  const dailyBtn = document.getElementById("daily-btn");
  const weeklyBtn = document.getElementById("weekly-btn");
  const monthlyBtn = document.getElementById("monthly-btn");

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
      console.log(response);
      dataCache = await response.json();
      console.log(dataCache);
    }catch (error){
      console.log(error.message);
    }

    displayData('daily');
    dailyBtn.classList.add('user-card__btn--active');
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

  // calling getData function on page loading
  window.addEventListener('load', ()=> getData());

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