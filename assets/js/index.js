const categoryList = document.querySelectorAll(".task-for-btn");
const checkbox = document.querySelectorAll("#checkbox");
let check = false;

for (const i in categoryList) {
  console.log(categoryList[i]);
  if (categoryList[i].value == "Personal") {
    categoryList[i].style.backgroundColor = "orange";
  } else if (categoryList[i].value == "Work") {
    categoryList[i].style.backgroundColor = "green";
  } else if (categoryList[i].value == "School") {
    categoryList[i].style.backgroundColor = "blue";
  } else if (categoryList[i].value == "Cleaning") {
    categoryList[i].style.backgroundColor = "purple";
  } else if (categoryList[i].value == "Other") {
    categoryList[i].style.backgroundColor = "red";
  }
}
