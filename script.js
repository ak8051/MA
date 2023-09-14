let taskTitle = document.getElementById("taskTitle"),
  btn = document.getElementById("btn"),
  output = document.getElementById("output");

btn.addEventListener("click", function (ev) {
  ev.preventDefault();
  let taskTitleValue = taskTitle.value.trim();

  function addTask(taskTitleValue) {
    return `<div>
        <h2>${taskTitleValue}</h2>
        <div id="dlt">Done</div>
      </div>`;
  }

  output.insertAdjacentHTML("afterbegin", addTask(taskTitleValue));
});
