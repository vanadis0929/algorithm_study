window.addEventListener("DOMContentLoaded", function () {
  const colorPicker = document.getElementById("colorForm");
  const selectColor = document.getElementById("selectColor");
  const colorList = document.querySelector(".colorList");
  var saveColorArray = [];
  let selectedColor;

  getColor();

  colorPicker.addEventListener("change", function (e) {});

  function addColor() {
    if (colorPicker.value) {
      saveColorArray.push(colorPicker.value);
      localStorage.setItem("color", JSON.stringify(saveColorArray));
    }
  }

  function appendColor() {
    getColor();
    console.log(saveColorArray);

    for (i = 0; i < saveColorArray.length; i++) {
      var str;
      str += `<li style='background-color: ${saveColorArray[i]}'></li>`;
      console.log(str);
      colorList.innerHTML = str;
    }
  }

  function getColor() {
    if (localStorage.getItem("color") != null) {
      saveColorArray = JSON.parse(localStorage.getItem("color"));
      console.log(saveColorArray);
      for (i = 0; i < saveColorArray.length; i++) {
        var str;
        str += `<li style='background-color: ${saveColorArray[i]}'></li>`;
        console.log();
        colorList.innerHTML = str;
      }
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
