window.addEventListener("DOMContentLoaded", function () {
  getColor();

  const colorPicker = document.getElementById("colorForm");
  const selectColor = document.getElementById("selectColor");
  const colorList = document.querySelector(".colorList");
  var saveColorArray = [];
  let selectedColor;

  colorPicker.addEventListener("change", function (e) {});

  function addColor() {
    if (colorPicker.value) {
      console.log(typeof saveColorArray);
      saveColorArray.push(colorPicker.value);

      console.log(saveColorArray.length);

      localStorage.setItem("color", JSON.stringify(saveColorArray));
    }
  }

  function appendColor() {
    getColor();
    console.log(saveColorArray);

    colorList.innerHTML = `<li style="background-color: ${saveColorArray}"></li>`;
    // for (i=0; i < saveColorArray.length; i++){

    // }
  }

  function getColor() {
    if (localStorage.getItem("color") != null) {
      saveColorArray = JSON.parse(localStorage.getItem("color"));
    }
  }

  document.body.addEventListener("click", function (e) {
    // 현재 색 저장하기
    if (e.target.nodeName == "BUTTON" && e.target.id == "saveColor") {
      addColor();
      console.log("ddd");
      appendColor();
    }
  });
});
