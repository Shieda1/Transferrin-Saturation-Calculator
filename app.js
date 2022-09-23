// https://www.omnicalculator.com/health/transferrin

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const transferrinsaturationRadio = document.getElementById('transferrinsaturationRadio');
const serumironconcentrationRadio = document.getElementById('serumironconcentrationRadio');
const totalironbindingcapacityRadio = document.getElementById('totalironbindingcapacityRadio');

let transferrinsaturation;
let serumironconcentration = v1;
let totalironbindingcapacity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

transferrinsaturationRadio.addEventListener('click', function() {
  variable1.textContent = 'Serum iron concentration';
  variable2.textContent = 'Total iron-binding capacity';
  serumironconcentration = v1;
  totalironbindingcapacity = v2;
  result.textContent = '';
});

serumironconcentrationRadio.addEventListener('click', function() {
  variable1.textContent = 'Transferrin saturation';
  variable2.textContent = 'Total iron-binding capacity';
  transferrinsaturation = v1;
  totalironbindingcapacity = v2;
  result.textContent = '';
});

totalironbindingcapacityRadio.addEventListener('click', function() {
  variable1.textContent = 'Transferrin saturation';
  variable2.textContent = 'Serum iron concentration';
  transferrinsaturation = v1;
  serumironconcentration = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(transferrinsaturationRadio.checked)
    result.textContent = `Transferrin saturation = ${computetransferrinsaturation().toFixed(2)}`;

  else if(serumironconcentrationRadio.checked)
    result.textContent = `Serum iron concentration = ${computeserumironconcentration().toFixed(2)}`;

  else if(totalironbindingcapacityRadio.checked)
    result.textContent = `Total iron-binding capacity = ${computetotalironbindingcapacity().toFixed(2)}`;
})

// calculation

function computetransferrinsaturation() {
  return (Number(serumironconcentration.value) / Number(totalironbindingcapacity.value)) * 100;
}

function computeserumironconcentration() {
  return (Number(transferrinsaturation.value) / 100) * Number(totalironbindingcapacity.value);
}

function computetotalironbindingcapacity() {
  return Number(serumironconcentration.value) / (Number(transferrinsaturation.value) / 100);
}