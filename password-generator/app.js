function init(){
  const passwordField = document.getElementById("password");
  const charSlider = document.getElementById('char-length');
  const charLength = document.querySelector('.app__range-value');
  const genPassBtn = document.getElementById("generate-password-btn");
  const copyBtn = document.getElementById("copy-btn");

  const checkboxes = document.querySelectorAll('.app__checkbox-input');
  const strengthLevel = document.querySelector('.app__strength-level');
  const bars = document.querySelectorAll('.app__strength-bar');

  let checkedBoxesArray = [];
  let checkedIds= [];

  const uppercases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const lowercases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbols = ['!', '@', '#', '$', '%', '&', '*'];

  let strength = 0;
  let password = '';

  // display strength level
  function addStrengthLevel(){
    switch (strength){
      case 0:
        strengthLevel.hidden= true;
        break;
      case 1:
        strengthLevel.innerText = `TOO WEAK!`;
        break;
      case 2:
        strengthLevel.innerText = `WEAK`;
        break;
      case 3:
        strengthLevel.innerText = `MEDIUM`;
        break;
      case 4:
        strengthLevel.innerText = `STRONG`;
        break;
    }
  }

  // reset all bars
  function removeAllBars(){
    for(let bar = 0; bar < bars.length; bar++){
      //   remove all strength levels
      bars[bar].classList.remove('app__strength-bar--too-weak');
      bars[bar].classList.remove('app__strength-bar--weak');
      bars[bar].classList.remove('app__strength-bar--medium');
      bars[bar].classList.remove('app__strength-bar--strong');
    }
  }

  // add strength bar
  function addBar(){
    // first: remove all the bars
    removeAllBars();

    // decide the appropriate class to add
    let styleClass = null;

    switch (strength){
      case 1:
        styleClass = 'app__strength-bar--too-weak';
        break;
      case 2:
        styleClass = 'app__strength-bar--weak';
        break;
      case 3:
        styleClass = 'app__strength-bar--medium';
        break;
      case 4:
        styleClass = 'app__strength-bar--strong';
        break;
    }

    // add the class to fill
    for(let bar = 0; bar < strength; bar++){
      bars[bar].classList.add(styleClass);
    }

    // add strength level
    addStrengthLevel();
  }

  // update strength and update bar
  function updateStrength(){
    checkedBoxesArray = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    strength = checkedBoxesArray.length;
    addBar();
  }

  // generate random number
  function generateRandomIndex(len){
    return Math.floor(Math.random() * len);
  }

  function generatePassword(){
    // extract ids and store them in idArray
    checkedIds = checkedBoxesArray.map(checkedBox => checkedBox.id);

    // loop till charLength randomly
    for(let index = 0; index < parseInt(charLength.innerText); index++){
      // generate random number
      const selectedIdIndex =  generateRandomIndex(checkedIds.length)

      if(checkedIds[selectedIdIndex] === 'uppercase-checkbox'){
        password += uppercases[generateRandomIndex(uppercases.length)];
      }else if(checkedIds[selectedIdIndex] === 'lowercase-checkbox'){
        password += lowercases[generateRandomIndex(lowercases.length)];
      }else if(checkedIds[selectedIdIndex] === 'number-checkbox'){
        password += numbers[generateRandomIndex(numbers.length)];
      }else if(checkedIds[selectedIdIndex] === 'symbol-checkbox'){
        password += symbols[generateRandomIndex(symbols.length)];
      }
    }
    // embed generated password to HTML
    passwordField.value = password;
  }

  // updating strength on every checkbox change
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', ()=>{
      updateStrength();
    });
  })

  // calculate slider value and convert to character length
  charSlider.addEventListener('input', () => {
    charSlider.style.background = `linear-gradient(90deg, var(--color-green-200) ${charSlider.value}%, var(--color-grey-850) ${charSlider.value}%)`
    charLength.innerText = Math.floor((charSlider.value/100)*20);
  })

  genPassBtn.addEventListener('click', () => {
    // reset the string before generating
    password = "";
    // generate new password and append the output to HTML
    generatePassword();
  })

  copyBtn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(passwordField.value);

    // display copy popup
    copyBtn.classList.add('app__output-button--copied');
    setTimeout(()=>{
      copyBtn.classList.remove('app__output-button--copied');
    },2000)
  })
}

init();