const genPred = () => {
  randomNumber = Math.round(Math.random())
  console.log(randomNumber)

  const resDiabPred = document.querySelector('.resDiabPred')
  if (randomNumber == 0) resDiabPred.innerHTML = 'Patient is Healthy'
  else {
    resDiabPred.innerHTML = 'Patient has Diabetic Symptoms , Consult a Doctor'
  }
  // resDiabPred.innerHTML = randomNumber
}

const diabPred = document.querySelector('.diabPred')
diabPred.addEventListener('click', genPred)
