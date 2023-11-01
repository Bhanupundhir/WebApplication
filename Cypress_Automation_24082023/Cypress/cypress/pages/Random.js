class Random {
  
  randomStringUpperCaseGenerator(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 1; i <= length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

randomStringLowerCaseGenerator(length) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 1; i <= length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

randomNumberGenerator(length) {
  var text = "";
  var possible = "0123456789";
  for (var i = 1; i <= length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return "1" + text;
}
}

export default Random