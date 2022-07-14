let missionData;

function getMissonData() {
  let getMissonDataString = window.localStorage.getItem("missionData");
  let getMissonDataObj = JSON.parse(getMissonDataString);
  missionData = getMissonDataObj;
}

function setMissionData() {
  window.localStorage.setItem("missionData", JSON.stringify(missionData));
}

let lay_1 = document.querySelector(".layer_cancle");
let lay_2 = document.querySelector("input");

lay_1.addEventListener("click", laycan);

function laycan() {
  lay_2.checked = false;
}
