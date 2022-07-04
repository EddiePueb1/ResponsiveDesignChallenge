const toggle = () => {
  const menu = document.getElementById("links");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
  
  console.log(menu.style.display);

}

