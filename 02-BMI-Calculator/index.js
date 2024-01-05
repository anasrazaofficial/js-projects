document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()

  let height = document.getElementById('height')
  let weight = document.getElementById('weight')
  let bmi;

  if (height.value == '' || height.value <= 0 || isNaN(height.value)) {
    alert('Please enter valid height')
  } else if (weight.value == '' || weight.value <= 0 || isNaN(weight.value)) {
    alert('Please enter valid weight')
  } else {
    bmi = (weight.value / ((height.value * height.value) / 10000)).toFixed(2)
    let status;
    if (bmi < 18.6) {
      status = `According to your BMI ${bmi}, you are under weight`
    } else if (bmi > 18.6 && bmi < 24.9) {
      status = `According to your BMI ${bmi}, you are normal in weight`
    } else {
      status = `According to your BMI ${bmi}, you are over weight`
    }
    document.getElementById('result').innerHTML = `<span>The Body mass index (BMI) of given information is ${bmi}</span><br>
    <span>${status}</span>`
    height.value = ''
    weight.value = ''
  }

})