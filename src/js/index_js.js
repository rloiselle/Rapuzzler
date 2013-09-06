$(document).ready(function() {

// I left this in so I remember that I want to play around with this more
// This function is very effective in invoking impatience and confusion into the player!
  // $('.cell').bind('click', function() {
  //   var that = this;
  //   window.setTimeout(function(){
  //     $(that).toggleClass("blue");
  //      hugNeighbors($(that));
  //    }, 1000);
  // });

// toggles cell color when clicked and also calls a function
  $('.cell').bind('click', function() {
      $(this).toggleClass("blue");
       hugNeighbors($(this));
  });

// suprise!! You've been raptorized!!
  $('#wipe').raptorize();

// congratulation box appears if all cells are blue
  $('#gameBox').bind('click', function() {
    cellcount = $('.cell').length;
    bluecount = $('div.blue').length;
    if (cellcount === bluecount) {
      alert("congratulations");
    }
  });

// resets cell colors
  $('#wipe').bind('click', function() {
    $('.cell').removeClass("blue");
  });

// function changes the color for boxes adjacent to the box clicked
  var hugNeighbors = function(position) {
    var rownum = position.data("row");
    var colnum = position.data("col");
    $("div.cell[data-row=" + (rownum) + "][data-col=" + (colnum + 1) + "]").toggleClass("blue");
    $("div.cell[data-row=" + (rownum) + "][data-col=" + (colnum - 1) + "]").toggleClass("blue");
    $("div.cell[data-row=" + (rownum + 1) + "][data-col=" + (colnum) + "]").toggleClass("blue");
    $("div.cell[data-row=" + (rownum - 1) + "][data-col=" + (colnum) + "]").toggleClass("blue");
  };

});