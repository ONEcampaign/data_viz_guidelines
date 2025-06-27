function initColorPickers() {
const pickers = document.querySelectorAll('.color-picker');
pickers.forEach(picker => {
  const hex = picker.dataset.color;
  picker.style.backgroundColor = hex;

  picker.addEventListener('click', () => {
    navigator.clipboard.writeText(hex);
    const original = picker.getAttribute('data-color');
    picker.setAttribute('data-color', 'copied!');
    setTimeout(() => {
      picker.setAttribute('data-color', original);
    }, 1500);
  });
});
}

// Run on load
window.addEventListener('DOMContentLoaded', initColorPickers);