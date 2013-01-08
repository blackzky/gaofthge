var BOARD = {}

$(function() {
  //init();
  var result = $("#result");
  if (hasLocalStorage) {
    alert("has!");
  } else {
    alert("nope");
  }
});

function hasLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e){
    return false;
  }
}

function init(){
  createBoard();

  BOARD.row = parseInt($(document).height() / 8);
  BOARD.col = parseInt($(document).width() / 8);

  $(".row").css({
    width: BOARD.col * 8,
    height: BOARD.row
  });

  $(".col").css({
    width: BOARD.col,
    height: BOARD.row
  });
}

function createBoard(){
  var content = "";
  for(var row = 0; row < 8; row++){
    content += "<div class='row'>"
    for(var col = 0; col < 8; col++){
      content += "<div class='col'><div id='r"+ row +"c" + col + "'></div></div>";
    }
    content += "</div>";
  }
  $("#board").html(content);
}
