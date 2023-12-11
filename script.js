
function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }
  

  function drop(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
  

    var targetElementId = ev.target.id;
  

    if (data.includes('element') && targetElementId.includes('area')) {
      var color = data.split('-')[1];
      if (targetElementId.includes(color)) {
        ev.target.style.backgroundColor = color;
      } else {
        alert('Выберите правильную область для перетаскивания.');
      }
    } else {
      alert('Неправильный элемент для перетаскивания.');
    }
  }