function change_blue() {
  main = document.documentElement.style.getPropertyValue("--Fourth-Color");
  if (main != "#8a2be2") {
    document.documentElement.style.setProperty("--Fourth-Color", "#8a2be2");
  }
}
function change_cyan() {
  main = document.documentElement.style.getPropertyValue("--Fourth-Color");
  if (main != "#01c4ff") {
    document.documentElement.style.setProperty("--Fourth-Color", "#01c4ff");
  }
}
function change_red() {
  main = document.documentElement.style.getPropertyValue("--Fourth-Color");
  if (main != "#e22b2b") {
    document.documentElement.style.setProperty("--Fourth-Color", "#e22b2b");
  }
}
function change_wheat() {
  main = document.documentElement.style.getPropertyValue("--Fourth-Color");
  if (main != "#f5deb3") {
    document.documentElement.style.setProperty("--Fourth-Color", "#f5deb3");
  }
}
//////////////////////////////////////////////////////////////// Color Change
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
//////////////////////////////////////////////////////////////// Search Function
