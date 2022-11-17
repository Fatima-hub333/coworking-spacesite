const color = 'purple';
const hexCode = '#ef0';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode,
};

function getColor(key) {
  return colors[key];
}
delete colors.purple;
delete colors['yellow Color']
console.log(colors);