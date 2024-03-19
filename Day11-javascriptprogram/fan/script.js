var fan = document.getElementById("fan");

document.addEventListener("click", function (e) {
  let target = e.target;
  let name = target.getAttribute("data-name");
  if (name != null) {
    fan.classList.add(name);
  }
  fan.classList.remove("stop", "one", "two", "three","turbo");
});
