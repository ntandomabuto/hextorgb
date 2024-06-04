document.querySelector('#convertButton').addEventListener('click', () => {
let hexInput = document.querySelector('#hexInput').value.trim();
let rgb = hexToRgb(hexInput);
if (rgb) {
  document.querySelector('#result').textContent = `RGB: ${rgb}`;
} else {
  document.querySelector('#result').textContent = 'Invalid. Enter a valid hex value.';
}
});
function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  if (hex.length !== 6) {
    return null;
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}