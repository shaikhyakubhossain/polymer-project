const MENS_TSHIRT = [
  { id: "1", name: "Tri-Blend Leisure Shirt", price: "$50.20" },
  { id: "2", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "3", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "4", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "5", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "6", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "7", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "8", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "9", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "10", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "11", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "12", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "13", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "14", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "15", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "16", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "17", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "18", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "19", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "20", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "21", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "22", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "23", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "24", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "25", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "26", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "27", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "28", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "29", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "30", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "31", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "32", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "33", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "34", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "35", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "36", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "37", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "38", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "39", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
  { id: "40", name: "Men's Tech Shell Full-Zip", price: "$50.20" },
];
const leftBoxOn = () => {
  document.getElementById("leftBoxContainer").style.left = "0px";
  // document.getElementById("scrimId").style.zIndex = "100";
  document.getElementById("scrimId").style.visibility = "visible";
  document.getElementById("scrimId").style.opacity = "1";
};
const leftBoxOff = () => {
  document.getElementById("leftBoxContainer").style.left = "-256px";
  document.getElementById("scrimId").style.opacity = "0";
  // document.getElementById("scrimId").style.zIndex = "-9999";
  setTimeout(() => {
    document.getElementById("scrimId").style.visibility = "hidden";
  }, 200);
};
const mouseWheelCheck = (event) => {
  var Yaxis = event.deltaY;
  if (Yaxis < 0) {
    document.getElementById("topNav").style.position = "sticky";
  }
  else {
    document.getElementById("topNav").style.position = "static";
  }

};
