const handleValidations = (data, setColorFormText, colorFormReset) => {
  
  let isValid = true;
  const newColorFormText = colorFormReset;
  const dangerText = "danger";
  if(!(data.dni.length>=3 && data.dni.length<=10)){
    isValid = false;
    newColorFormText.dni = dangerText;
  } if(!(data.name.length>=3 && data.name.length<=30)){
    isValid = false;
    newColorFormText.name = dangerText;
  } if(!(data.fatherLastName.length>=3 && data.fatherLastName.length<=30)){
    isValid = false;
    newColorFormText.fatherLastName = dangerText;
  } if(!(data.motherLastName.length>=3 && data.motherLastName.length<=30)){
    isValid = false;
    newColorFormText.motherLastName = dangerText;
  } if(!(data.birthDate.length===10)){
    isValid = false;
    newColorFormText.birthDate = dangerText;
  } if(!(data.telephone.length>=3 && data.telephone.length<=30)){
    isValid = false;
    newColorFormText.telephone = dangerText;
  } if(!(data.address.length>=3 && data.address.length<=60)){
    isValid = false;
    newColorFormText.address = dangerText;
  } if(!(data.email.length>=3 && data.email.length<=30)){
    isValid = false;
    newColorFormText.email = dangerText;
  } if(!(data.yunta.length>=3 && data.yunta.length<=10)){
    isValid = false;
    newColorFormText.yunta = dangerText;
  } if(data.grade===""){
    isValid = false;
    newColorFormText.grade = dangerText;
  } if(data.weapon===""){
    isValid = false;
    newColorFormText.weapon = dangerText;
  } if(!(data.promo.length===4)){
    isValid = false;
    newColorFormText.promo = dangerText;
  } if(!/^[0-9]+$/.test(data.promo)){
    isValid = false;
    newColorFormText.promo = dangerText;
  } if(!/^[0-9]+$/.test(data.dni)){
    isValid = false;
    newColorFormText.dni = dangerText;
  } if(!/^[0-9]+$/.test(data.telephone)){
    isValid = false;
    newColorFormText.telephone = dangerText;
  } if (!/\S+@\S+\.\S+/.test(data.email)){
    isValid = false;
    newColorFormText.email = dangerText;
  }
  setColorFormText(newColorFormText);
  return isValid;
};

export default handleValidations;
