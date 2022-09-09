let modalcard = document.querySelector(".modalcard");

let zzz = document.querySelector(".qwerty");

let querity = document.querySelector(".modal_bg-color")


let modalbtn = document.querySelector(".tugmacha");
modalbtn.addEventListener("click", () => {
  modalcard.classList.add("pastgatush");

  querity.style.display="block"
});



zzz.addEventListener("click", () => {
  modalcard.classList.remove("pastgatush");
  querity.style.display="none"
});


let selecttt = $(".nonqalin");

selecttt.addEventListener("change", () => {
  let nonini = $(".nonini");
  nonini.textContent = selecttt.value;
});

// katta
let olchamni = $(".olchami");

olchamni.addEventListener("change", () => {
  let kattaligini = $(".kattaligini");
  kattaligini.textContent = olchamni.value;
});

let smm = $(".smm");

smm.addEventListener("change", () => {
  let kattaligini = $(".kattaligini");
  kattaligini.textContent = smm.value;
});

let pro = $(".pro");

pro.addEventListener("change", () => {
  let kattaligini = $(".kattaligini");
  kattaligini.textContent = pro.value;
});

let pomidor = $(".pomidor");
let kurka_goshti = $(".kurka_goshti");
let zaytun = $(".zaytun");
let bodring = $(".bodring");
let qoziqorin = $(".qoziqorin");
let qazi = $(".qazi");

pomidor.addEventListener("click", () => {
  let a1 = $(".a");
  if (a1.textContent == pomidor.value) {
    a1.textContent = "";
  } else {
    a1.textContent = pomidor.value;
  }
});

kurka_goshti.addEventListener("click", () => {
  let a2 = $(".b");
  if (a2.textContent == kurka_goshti.value) {
    a2.textContent = "";
  } else {
    a2.textContent = kurka_goshti.value;
  }
});

zaytun.addEventListener("click", () => {
  let a3 = $(".c");
  if (a3.textContent == zaytun.value) {
    a3.textContent = "";
  } else {
    a3.textContent = zaytun.value;
  }
});
bodring.addEventListener("click", () => {
  let a4 = $(".d");
  if (a4.textContent == bodring.value) {
    a4.textContent = "";
  } else {
    a4.textContent = bodring.value;
  }
});
qoziqorin.addEventListener("click", () => {
  let a5 = $(".e");
  if (a5.textContent == qoziqorin.value) {
    a5.textContent = "";
  } else {
    a5.textContent = qoziqorin.value;
  }
});
qazi.addEventListener("click", () => {
  let a6 = $(".f");
  if (a6.textContent == qazi.value) {
    a6.textContent = "";
  } else {
    a6.textContent = qazi.value;
  }
});

let achchiq = $(".achchiq");
let sosiska = $(".sosiska");

achchiq.addEventListener("click", () => {
  let suma = $(".nums");
  if (suma.textContent == achchiq.value) {
    suma.textContent = "";
  } else {
    suma.textContent = achchiq.value;
  }
});

sosiska.addEventListener("click", () => {
  let sumav = $(".h");
  if (sumav.textContent == sosiska.value) {
    sumav.textContent = "";
  } else {
    sumav.textContent = sosiska.value;
  }
});

 