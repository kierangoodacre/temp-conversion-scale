function convertTemp(temp, from_scale, to_scale){
  if (from_scale === "De"){
    if (to_scale === "K"){
      return Math.round((373.15 - (temp * (2/3))));
    } else if (to_scale === "C"){
      return Math.round(100-(temp * (2/3)));
    }
  }
};
