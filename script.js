var counts = document.querySelector("#count");
var counter = 1;

function like() {
  if (counter == 1) {
    counts.innerText = counter++ + " Like";
  } else {
    {
      counts.innerText = counter++ + " Likes";
    }
  }
}
