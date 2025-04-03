function init(){
  const charSlider = document.getElementById('char-length');
  const charLength = document.querySelector('.app__range-value');

  const checkboxes = document.querySelectorAll('.app__checkbox-input');
  const strengthLevel = document.querySelector('.app__strength-level');
  const bars = document.querySelectorAll('.app__strength-bar');

  let strength = 0;

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

  function updateStrength(){
    strength = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    addBar();
  }

  // updating strength on every checkbox change
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateStrength);
  })

  // calculate slider value and convert to character length
  charSlider.addEventListener('input', (event) => {
    charSlider.style.background = `linear-gradient(90deg, var(--color-green-200) ${charSlider.value}%, var(--color-grey-850) ${charSlider.value}%)`
    charLength.innerText = Math.floor((charSlider.value/100)*20);
  })
}

init();


























