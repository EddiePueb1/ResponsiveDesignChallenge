const toggle = () => {
  var x = document.getElementById("links");
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.transition = "0.4s ease"
  } else {
    x.style.display = "none";
  }

  console.log(x.style.display);
}