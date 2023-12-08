let selectList;
document.addEventListener("DOMContentLoaded", () => {
          selectList = document.querySelectorAll("#searchSelect")

         document.addEventListener("change", displayProducts());

});

function displayProducts(){
    let filter = selectList.value
}