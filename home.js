
const inputArea = document.getElementById("text-area");
const AddButton = document.getElementById("AddButton");
const ul = document.getElementById("list");

const cnt = document.getElementById("cnt");

const chkAllBtn = document.querySelector('#checkedAll');
const delAllChecked = document.querySelector('#deleteAllChecked')



//click on add button
AddButton.addEventListener('click', function () {


  //create list
  let list = document.createElement('li');

  //create checkbox
  let checkBox = document.createElement("input");

  checkBox.className = "cbox";
  checkBox.type = "checkbox";


  //append checkbox in li
  list.appendChild(checkBox);
  checkBox.addEventListener('click', function (event) {


    // console.log(event.target.parentElement);

    if (event.target.parentElement.className != "checkCompleted") {
      event.target.parentElement.className = "checkCompleted";

    }
    else {

      event.target.parentElement.className = "";
    }

    checkedCount();
  })


  //create text
  let text = document.createTextNode(inputArea.value);
  text.className = "li-text";
  //append text in li 
  list.appendChild(text);



  //create delBtn 
  var delBtn = document.createElement('input');
  delBtn.className = "deleteBtn";
  delBtn.type = "button";

  delBtn.value = "X";


  //append deletebtn in li
  list.appendChild(delBtn);

  //add function to delete the list
  delBtn.addEventListener('click', function (event) {

    list.remove();
    totalCount();
    checkedCount();

  })



  //append li in ul

  if (inputArea.value === '') {
    alert("You must write something!");
  } else {

    ul.insertBefore(list, ul.childNodes[0]);
  }


  inputArea.value = "";


  totalCount();



});
//count all li
function totalCount() {
  document.getElementById("all-tasks").innerHTML = "Total : " + document.querySelectorAll('li').length;


}




//count checked li
function checkedCount() {
  document.getElementById("completed-tasks").innerHTML = "Completed : " + document.querySelectorAll('input[type="checkbox"]:checked').length;
}





let bool = false;

chkAllBtn.addEventListener('click', () => {
  const cbox = document.querySelectorAll('.cbox');
  // console.log(cbox);
  // console.log('chck all');
  if (bool) {
    console.log("true");
    cbox.forEach((box) => {
      box.parentElement.className = '';
      box.checked = '';
    })
    bool = false;
  } else {
    console.log("false");
    console.log(cbox);
    cbox.forEach((box) => {
      box.parentElement.className = 'checkCompleted';
      box.checked = 'checked'
    })
    bool = true;
  }
  checkedCount();

})


//delete all what is checked
delAllChecked.addEventListener('click', () => {
  const toDelete = document.querySelectorAll('.checkCompleted')
  toDelete.forEach((item) => {
    item.remove();
  })
  checkedCount();
  totalCount();
})