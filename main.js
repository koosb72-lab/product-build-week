const generateBtn = document.getElementById('generate');
const setsInput = document.getElementById('sets');
const resultsDiv = document.getElementById('results');

generateBtn.addEventListener('click', () => {
  const numSets = parseInt(setsInput.value, 10);

  if (numSets < 1 || numSets > 5) {
    alert('1에서 5 사이의 숫자를 입력해주세요.');
    return;
  }

  resultsDiv.innerHTML = '';

  for (let i = 0; i < numSets; i++) {
    const lottoSet = document.createElement('div');
    lottoSet.classList.add('lotto-set');

    const numbers = generateLottoNumbers();
    numbers.forEach(number => {
      const lottoNumber = document.createElement('span');
      lottoNumber.classList.add('lotto-number');
      lottoNumber.textContent = number;
      lottoNumber.style.backgroundColor = getColorForNumber(number);
      lottoSet.appendChild(lottoNumber);
    });

    resultsDiv.appendChild(lottoSet);
  }
});

function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

function getColorForNumber(number) {
  if (number >= 1 && number <= 10) {
    return '#fbc400'; // Yellow
  } else if (number >= 11 && number <= 20) {
    return '#69c8f2'; // Blue
  } else if (number >= 21 && number <= 30) {
    return '#ff7272'; // Red
  } else if (number >= 31 && number <= 40) {
    return '#aaa'; // Gray
  } else {
    return '#b0d840'; // Green
  }
}