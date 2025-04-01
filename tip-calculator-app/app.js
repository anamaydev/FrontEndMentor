function init(){
  const form = document.getElementById('app-form');
  const bill = document.getElementById("input-bill");
  const billErrorMsg = document.getElementById("bill-error-message");
  const tipPercentBtns = document.querySelectorAll(".form__button");
  const customTip = document.getElementById("custom-input");
  const totalPeople = document.getElementById("input-total-people");
  const totalPeopleErrorMsg = document.getElementById("total-people-error-message");
  const tipAmount = document.getElementById("tip-amount");
  const perPerson = document.getElementById('per-person');
  const resetBtn = document.getElementById("reset-btn");
  let data = {};

  function getData(eventObject){
    // get all input nodes
    const fields = eventObject.target.querySelectorAll("input");

    // store data in data object
    fields.forEach(field => data[field.name] = field.value);
  }

  // validate input
  function validateInputs(data){
    // check bill input
    if(data.bill === ''){
      billErrorMsg.classList.remove('hidden');
      bill.classList.add('form__input--error');
    }else{
      billErrorMsg.classList.add('hidden');
      bill.classList.remove('form__input--error');
    }

    // set customTip if empty
    if(data.customTip === ''){
      tipPercentBtns.forEach(tipBtn => {
        if(tipBtn.classList.contains('form__button--active')){
          data.customTip =  tipBtn.querySelector('span').textContent;
        }
      });
    }

    // check number of people input
    if(data.totalPeople === ''){
      totalPeopleErrorMsg.classList.remove('hidden');
      totalPeople.classList.add('form__input--error');
    }else{
      totalPeopleErrorMsg.classList.add('hidden');
      totalPeople.classList.remove('form__input--error');
    }
  }

  // calculate tip amount and per person amount
  function calculateSplit(){
    if(parseInt(data.customTip) !== 0){
      const tip = parseInt(data.bill) * (parseInt(data.customTip) / 100);
      tipAmount.innerText = `$${tip.toFixed(2)}`;
      const totalPerPerson = (parseInt(data.bill) + tip) / parseInt(data.totalPeople);
      perPerson.innerText = `$${totalPerPerson.toFixed(2)}`;

      // set active state to reset button
      resetBtn.classList.add('app__output-reset-btn--active');
    }

  }

  // reset all the input fields, buttons and display text
  function resetApp(){
   bill.value = "";
   customTip.value = "";
   tipPercentBtns.forEach(tipBtn => tipBtn.classList.remove('form__button--active'));
   totalPeople.value = "";
   tipAmount.innerText = "$0.00";
   perPerson.innerText = "$0.00";
    resetBtn.classList.remove('app__output-reset-btn--active');
  }

  form.addEventListener("submit", (e)=>{
    // preventing form from submitting
    e.preventDefault()
    // get data from input fields
    getData(e);
    // validating bill amount and total number of people
    validateInputs(data)
    // calculate and embed result
    calculateSplit();
  });

// setting tip button active state
  tipPercentBtns.forEach(tipBtn => {
    tipBtn.addEventListener("click", (e)=>{
      // remove active state from all buttons
      tipPercentBtns.forEach(tipBtn => tipBtn.classList.remove('form__button--active'));

      // add active state to clicked button
      e.target.classList.add("form__button--active");

      // clear custom tip input
      customTip.value = "";
    })
  })

  // remove active state from existing button
  customTip.addEventListener("click", (e)=>{
    tipPercentBtns.forEach(tipBtn => tipBtn.classList.remove('form__button--active'));
  })

  // reset all input fields, buttons, results
  resetBtn.addEventListener("click", (e)=> resetApp())
}

init();