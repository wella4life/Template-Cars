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
function show_toyota() {
  var b = document.getElementById("pop-up-t");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  if ((b.style.display = "none")) {
    b.style.display = "flex";
  } else {
    b.style.display = "none";
  }
  if ((c.style.opacity = 1)) {
    c.style.opacity = 0.5;
  } else {
    c.style.opacity = 1;
  }
  if ((c1.style.opacity = 1)) {
    c1.style.opacity = 0.5;
  } else {
    c1.style.opacity = 1;
  }
  if ((c2.style.opacity = 1)) {
    c2.style.opacity = 0.5;
  } else {
    c2.style.opacity = 1;
  }
}
function close_toyota() {
  var b = document.getElementById("pop-up-t");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var vid = document.getElementById("brand-video-t");
  vid.pause();
  vid.currentTime = 0;
  if ((b.style.display = "flex")) {
    b.style.display = "none";
  } else {
    b.style.display = "flex";
  }
  if ((c.style.opacity = 0.5)) {
    c.style.opacity = 1;
  } else {
    c.style.opacity = 0.5;
  }
  if ((c1.style.opacity = 0.5)) {
    c1.style.opacity = 1;
  } else {
    c1.style.opacity = 0.5;
  }
  if ((c2.style.opacity = 0.5)) {
    c2.style.opacity = 1;
  } else {
    c2.style.opacity = 0.5;
  }
}
//////////////////////////////////////////////////////////////// Toyota
function show_volkswagen() {
  var b = document.getElementById("pop-up-w");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  if ((b.style.display = "none")) {
    b.style.display = "flex";
  } else {
    b.style.display = "none";
  }
  if ((c.style.opacity = 1)) {
    c.style.opacity = 0.5;
  } else {
    c.style.opacity = 1;
  }
  if ((c1.style.opacity = 1)) {
    c1.style.opacity = 0.5;
  } else {
    c1.style.opacity = 1;
  }
  if ((c2.style.opacity = 1)) {
    c2.style.opacity = 0.5;
  } else {
    c2.style.opacity = 1;
  }
}
function close_volkswagen() {
  var b = document.getElementById("pop-up-w");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var vid = document.getElementById("brand-video-w");
  vid.pause();
  vid.currentTime = 0;
  if ((b.style.display = "flex")) {
    b.style.display = "none";
  } else {
    b.style.display = "flex";
  }
  if ((c.style.opacity = 0.5)) {
    c.style.opacity = 1;
  } else {
    c.style.opacity = 0.5;
  }
  if ((c1.style.opacity = 0.5)) {
    c1.style.opacity = 1;
  } else {
    c1.style.opacity = 0.5;
  }
  if ((c2.style.opacity = 0.5)) {
    c2.style.opacity = 1;
  } else {
    c2.style.opacity = 0.5;
  }
}
//////////////////////////////////////////////////////////////// Volkswagen
function show_mercedes() {
  var b = document.getElementById("pop-up-m");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  if ((b.style.display = "none")) {
    b.style.display = "flex";
  } else {
    b.style.display = "none";
  }
  if ((c.style.opacity = 1)) {
    c.style.opacity = 0.5;
  } else {
    c.style.opacity = 1;
  }
  if ((c1.style.opacity = 1)) {
    c1.style.opacity = 0.5;
  } else {
    c1.style.opacity = 1;
  }
  if ((c2.style.opacity = 1)) {
    c2.style.opacity = 0.5;
  } else {
    c2.style.opacity = 1;
  }
}
function close_mercedes() {
  var b = document.getElementById("pop-up-m");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var vid = document.getElementById("brand-video-m");
  vid.pause();
  vid.currentTime = 0;
  if ((b.style.display = "flex")) {
    b.style.display = "none";
  } else {
    b.style.display = "flex";
  }
  if ((c.style.opacity = 0.5)) {
    c.style.opacity = 1;
  } else {
    c.style.opacity = 0.5;
  }
  if ((c1.style.opacity = 0.5)) {
    c1.style.opacity = 1;
  } else {
    c1.style.opacity = 0.5;
  }
  if ((c2.style.opacity = 0.5)) {
    c2.style.opacity = 1;
  } else {
    c2.style.opacity = 0.5;
  }
}
//////////////////////////////////////////////////////////////// Mercedes
function show_ford() {
  var b = document.getElementById("pop-up-f");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  if ((b.style.display = "none")) {
    b.style.display = "flex";
  } else {
    b.style.display = "none";
  }
  if ((c.style.opacity = 1)) {
    c.style.opacity = 0.5;
  } else {
    c.style.opacity = 1;
  }
  if ((c1.style.opacity = 1)) {
    c1.style.opacity = 0.5;
  } else {
    c1.style.opacity = 1;
  }
  if ((c2.style.opacity = 1)) {
    c2.style.opacity = 0.5;
  } else {
    c2.style.opacity = 1;
  }
}
function close_ford() {
  var b = document.getElementById("pop-up-f");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var vid = document.getElementById("brand-video-f");
  vid.pause();
  vid.currentTime = 0;
  if ((b.style.display = "flex")) {
    b.style.display = "none";
  } else {
    b.style.display = "flex";
  }
  if ((c.style.opacity = 0.5)) {
    c.style.opacity = 1;
  } else {
    c.style.opacity = 0.5;
  }
  if ((c1.style.opacity = 0.5)) {
    c1.style.opacity = 1;
  } else {
    c1.style.opacity = 0.5;
  }
  if ((c2.style.opacity = 0.5)) {
    c2.style.opacity = 1;
  } else {
    c2.style.opacity = 0.5;
  }
}
//////////////////////////////////////////////////////////////// Ford
function show_honda() {
  var b = document.getElementById("pop-up-h");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  if ((b.style.display = "none")) {
    b.style.display = "flex";
  } else {
    b.style.display = "none";
  }
  if ((c.style.opacity = 1)) {
    c.style.opacity = 0.5;
  } else {
    c.style.opacity = 1;
  }
  if ((c1.style.opacity = 1)) {
    c1.style.opacity = 0.5;
  } else {
    c1.style.opacity = 1;
  }
  if ((c2.style.opacity = 1)) {
    c2.style.opacity = 0.5;
  } else {
    c2.style.opacity = 1;
  }
}
function close_honda() {
  var b = document.getElementById("pop-up-h");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var vid = document.getElementById("brand-video-h");
  vid.pause();
  vid.currentTime = 0;
  if ((b.style.display = "flex")) {
    b.style.display = "none";
  } else {
    b.style.display = "flex";
  }
  if ((c.style.opacity = 0.5)) {
    c.style.opacity = 1;
  } else {
    c.style.opacity = 0.5;
  }
  if ((c1.style.opacity = 0.5)) {
    c1.style.opacity = 1;
  } else {
    c1.style.opacity = 0.5;
  }
  if ((c2.style.opacity = 0.5)) {
    c2.style.opacity = 1;
  } else {
    c2.style.opacity = 0.5;
  }
}
//////////////////////////////////////////////////////////////// Honda
function show_general_motors() {
  var b = document.getElementById("pop-up-gm");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  if ((b.style.display = "none")) {
    b.style.display = "flex";
  } else {
    b.style.display = "none";
  }
  if ((c.style.opacity = 1)) {
    c.style.opacity = 0.5;
  } else {
    c.style.opacity = 1;
  }
  if ((c1.style.opacity = 1)) {
    c1.style.opacity = 0.5;
  } else {
    c1.style.opacity = 1;
  }
  if ((c2.style.opacity = 1)) {
    c2.style.opacity = 0.5;
  } else {
    c2.style.opacity = 1;
  }
}
function close_general_motors() {
  var b = document.getElementById("pop-up-gm");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var vid = document.getElementById("brand-video-gm");
  vid.pause();
  vid.currentTime = 0;
  if ((b.style.display = "flex")) {
    b.style.display = "none";
  } else {
    b.style.display = "flex";
  }
  if ((c.style.opacity = 0.5)) {
    c.style.opacity = 1;
  } else {
    c.style.opacity = 0.5;
  }
  if ((c1.style.opacity = 0.5)) {
    c1.style.opacity = 1;
  } else {
    c1.style.opacity = 0.5;
  }
  if ((c2.style.opacity = 0.5)) {
    c2.style.opacity = 1;
  } else {
    c2.style.opacity = 0.5;
  }
}
//////////////////////////////////////////////////////////////// General Motors
function show_BMW() {
  var b = document.getElementById("pop-up-bmw");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  if ((b.style.display = "none")) {
    b.style.display = "flex";
  } else {
    b.style.display = "none";
  }
  if ((c.style.opacity = 1)) {
    c.style.opacity = 0.5;
  } else {
    c.style.opacity = 1;
  }
  if ((c1.style.opacity = 1)) {
    c1.style.opacity = 0.5;
  } else {
    c1.style.opacity = 1;
  }
  if ((c2.style.opacity = 1)) {
    c2.style.opacity = 0.5;
  } else {
    c2.style.opacity = 1;
  }
}
function close_BMW() {
  var b = document.getElementById("pop-up-bmw");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var vid = document.getElementById("brand-video-bmw");
  vid.pause();
  vid.currentTime = 0;
  if ((b.style.display = "flex")) {
    b.style.display = "none";
  } else {
    b.style.display = "flex";
  }
  if ((c.style.opacity = 0.5)) {
    c.style.opacity = 1;
  } else {
    c.style.opacity = 0.5;
  }
  if ((c1.style.opacity = 0.5)) {
    c1.style.opacity = 1;
  } else {
    c1.style.opacity = 0.5;
  }
  if ((c2.style.opacity = 0.5)) {
    c2.style.opacity = 1;
  } else {
    c2.style.opacity = 0.5;
  }
}
//////////////////////////////////////////////////////////////// BMW
function show_hyundai() {
  var b = document.getElementById("pop-up-hy");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  if ((b.style.display = "none")) {
    b.style.display = "flex";
  } else {
    b.style.display = "none";
  }
  if ((c.style.opacity = 1)) {
    c.style.opacity = 0.5;
  } else {
    c.style.opacity = 1;
  }
  if ((c1.style.opacity = 1)) {
    c1.style.opacity = 0.5;
  } else {
    c1.style.opacity = 1;
  }
  if ((c2.style.opacity = 1)) {
    c2.style.opacity = 0.5;
  } else {
    c2.style.opacity = 1;
  }
}
function close_hyundai() {
  var b = document.getElementById("pop-up-hy");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var vid = document.getElementById("brand-video-hy");
  vid.pause();
  vid.currentTime = 0;
  if ((b.style.display = "flex")) {
    b.style.display = "none";
  } else {
    b.style.display = "flex";
  }
  if ((c.style.opacity = 0.5)) {
    c.style.opacity = 1;
  } else {
    c.style.opacity = 0.5;
  }
  if ((c1.style.opacity = 0.5)) {
    c1.style.opacity = 1;
  } else {
    c1.style.opacity = 0.5;
  }
  if ((c2.style.opacity = 0.5)) {
    c2.style.opacity = 1;
  } else {
    c2.style.opacity = 0.5;
  }
}
//////////////////////////////////////////////////////////////// Hyundai
function show_nissan() {
  var b = document.getElementById("pop-up-n");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  if ((b.style.display = "none")) {
    b.style.display = "flex";
  } else {
    b.style.display = "none";
  }
  if ((c.style.opacity = 1)) {
    c.style.opacity = 0.5;
  } else {
    c.style.opacity = 1;
  }
  if ((c1.style.opacity = 1)) {
    c1.style.opacity = 0.5;
  } else {
    c1.style.opacity = 1;
  }
  if ((c2.style.opacity = 1)) {
    c2.style.opacity = 0.5;
  } else {
    c2.style.opacity = 1;
  }
}
function close_nissan() {
  var b = document.getElementById("pop-up-n");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var vid = document.getElementById("brand-video-n");
  vid.pause();
  vid.currentTime = 0;
  if ((b.style.display = "flex")) {
    b.style.display = "none";
  } else {
    b.style.display = "flex";
  }
  if ((c.style.opacity = 0.5)) {
    c.style.opacity = 1;
  } else {
    c.style.opacity = 0.5;
  }
  if ((c1.style.opacity = 0.5)) {
    c1.style.opacity = 1;
  } else {
    c1.style.opacity = 0.5;
  }
  if ((c2.style.opacity = 0.5)) {
    c2.style.opacity = 1;
  } else {
    c2.style.opacity = 0.5;
  }
}
//////////////////////////////////////////////////////////////// Nissan
function show_tesla() {
  var b = document.getElementById("pop-up-ts");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  if ((b.style.display = "none")) {
    b.style.display = "flex";
  } else {
    b.style.display = "none";
  }
  if ((c.style.opacity = 1)) {
    c.style.opacity = 0.5;
  } else {
    c.style.opacity = 1;
  }
  if ((c1.style.opacity = 1)) {
    c1.style.opacity = 0.5;
  } else {
    c1.style.opacity = 1;
  }
  if ((c2.style.opacity = 1)) {
    c2.style.opacity = 0.5;
  } else {
    c2.style.opacity = 1;
  }
}
function close_tesla() {
  var b = document.getElementById("pop-up-ts");
  var c = document.getElementById("c");
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var vid = document.getElementById("brand-video-ts");
  vid.pause();
  vid.currentTime = 0;
  if ((b.style.display = "flex")) {
    b.style.display = "none";
  } else {
    b.style.display = "flex";
  }
  if ((c.style.opacity = 0.5)) {
    c.style.opacity = 1;
  } else {
    c.style.opacity = 0.5;
  }
  if ((c1.style.opacity = 0.5)) {
    c1.style.opacity = 1;
  } else {
    c1.style.opacity = 0.5;
  }
  if ((c2.style.opacity = 0.5)) {
    c2.style.opacity = 1;
  } else {
    c2.style.opacity = 0.5;
  }
}
//////////////////////////////////////////////////////////////// Tesla
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
