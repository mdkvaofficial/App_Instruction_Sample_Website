document.getElementById("menuButton").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-260px";
  } else {
    sidebar.style.left = "0px";
  }
});
