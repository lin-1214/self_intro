var t = new Date();
document.getElementById("datetime").innerHTML =
  t.getDate() +
  "-" +
  t.getMonth() +
  "-" +
  t.getFullYear() +
  " " +
  t.getHours() +
  ":" +
  t.getMinutes() +
  ":" +
  t.getSeconds();
