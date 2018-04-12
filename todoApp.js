let todoList = $("#todoList");
let itemId = 0;
$("#inputItemText").focus();

$("#addItemBtn").click(function() {
  itemId += 1;

  let inputItemText = $("#inputItemText").val();

  // create todoItem
  let editItemBtn = '<button class="editItemBtn" onclick=editItem(' + itemId + ') data-toggle="modal" data-target="#editModal">Edit</button>';
  let deleteItemBtn = '<button class="deleteItemBtn" onclick=deleteItem(this)>Delete</button>';
  let todoItem = '<li><span id=todoText' + itemId + '>' + inputItemText + '</span><div style="float:right;">' + editItemBtn + deleteItemBtn + '</div></li>';

  if (inputItemText === "") {
    alert("텍스트를 입력해주세요!");
  } else {
    todoList.append(todoItem);
  }

  $("#inputItemText").focus();
  $("#inputItemText").val("");
});

$("#closeBtn").click(function () {
  $("#editText").val("");
})

function focus() {
$("#editText").focus();
}

function editItem(itemId) {
  $("#saveChangesBtn").val(itemId);
  setTimeout(focus, 400);
}

function saveChanges(element) {
  let itemId = element.value;
  let editItem = $("#todoText"+itemId)[0];

  editItem.textContent = $("#editText").val();

  $("#editText").val("");
  $("#editModal").modal('hide');
}

function deleteItem(element) {
  element.parentElement.parentElement.remove();
}

function formatTodayDate() {
    let dateString = "Today's date is: ";
    let d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return dateString += [year, month, day].join('-');
    // return dateString
}

(function () {
  let today = formatTodayDate();
  console.log(today);
  $("#todayDate").append(today);
})();
