const charSlider = document.getElementById('char-length');
const charLength = document.querySelector('.app__range-value');


charSlider.addEventListener('input', (event) => {
  charSlider.style.background = `linear-gradient(90deg, var(--color-green-200) ${charSlider.value}%, var(--color-grey-850) ${charSlider.value}%)`
  charLength.innerText = Math.floor((charSlider.value/100)*20);
})


























// const input = document.querySelector(".app__checkbox-input");
// const label = document.querySelector(".app__checkbox-label");
//
// input.addEventListener("change", e => {
//   if (e.target.checked) console.log('clicked');
//   else console.log('un-clicked');
// })