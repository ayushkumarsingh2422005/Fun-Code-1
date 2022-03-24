window.onload = function() {
  const con = document.querySelector("#con");
  const yes = document.querySelector("#yes");
  const no = document.querySelector("#no");
  const bg = document.querySelector("#bg");
  no.onclick = function() {
    window.navigator.vibrate(100);
    let x = Math.random() * (10) + 50;
    let y = Math.random() * (30) + 40;
    no.style.left = x + "vw";
    no.style.top = y + "vh";
  }


  yes.onclick = function() {
    window.navigator.vibrate(900);
    con.innerHTML = "🤣😁 I knew it 😂😅";
    con.style.color = "red";
    bg.style.display = "block";
  }
}
