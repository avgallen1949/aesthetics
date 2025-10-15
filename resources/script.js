const weightSlider = document.getElementById('weightSlider');
const displayText = document.getElementById('displayText');
const section2 = document.getElementById('section2');
const labels = document.querySelector('.labels');

if (weightSlider && displayText && section2) {
// Get elements
const weightSlider = document.getElementById('weightSlider');
const displayText = document.getElementById('displayText');
const section2 = document.querySelector('.section-2');
const labels = document.querySelector('.labels');

// Add event listener
weightSlider.addEventListener('input', function() {
  const weight = this.value;
  console.log('Slider value:', weight); // Debug line
  
  // Update font weight
  displayText.style.fontVariationSettings = `'wght' ${weight}`;
  
  // Calculate progress (0 to 1)
  const progress = (weight - 100) / 800; // 800 = 900 - 100
  
  // Change background from blue to white
  const bgR = Math.round(124 + (255 - 124) * progress);
  const bgG = Math.round(187 + (255 - 187) * progress);
  const bgB = Math.round(240 + (255 - 240) * progress);
  section2.style.backgroundColor = `rgb(${bgR}, ${bgG}, ${bgB})`;
  
  // Change text from yellow-green to black
  const textR = Math.round(200 + (0 - 200) * progress);
  const textG = Math.round(255 + (0 - 255) * progress);
  const textB = Math.round(109 + (0 - 109) * progress);
  const textColor = `rgb(${textR}, ${textG}, ${textB})`;
  
  displayText.style.color = textColor;
  labels.style.color = textColor;
});
}