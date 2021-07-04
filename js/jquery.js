// M.AutoInit();
$(document).ready(function () {
  var app = {
    selectedTasks: []
  };

  $("#btnadd").click(function () {
    $('.modal').modal();
  });

  $("#addclick").click(function () {
    var task_title = document.getElementById("icon_title").value.toString();
    var task_descrip = document.getElementById("icon_descrip").value.toString();

    var t = '<li class="collection-item avatar"><i class="material-icons circle">task</i><div><b>' + task_title +'</b><p>'+task_descrip+ '</p><a href="#!" class="secondary-content"><i class="material-icons cdel" id="cdelete">delete</i></a></div></li>';
    $(".collection").append(t);
    app.selectedTasks.push({
      task_title: task_title,
      task_descrip: task_descrip
    });
    var selectedTasks = JSON.stringify(app.selectedTasks);
    localStorage.selectedTasks = selectedTasks;
  });

  $(document).on("click", "i.cdel", function () {
    var p = $(this).parent().parent()['0']['firstChild']['data'];
    var sel = [];
    app.selectedTasks.forEach(function(element){
      console.log(element['task_title']);
      if (element['task_title']!=p)
        sel.push(element);
    });
    app.selectedTasks = sel;
    var selectedTasks = JSON.stringify(app.selectedTasks);
    localStorage.selectedTasks = selectedTasks;    
    $(this).parent().parent().parent().remove();
  });

});