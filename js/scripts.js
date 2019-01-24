$(document).ready(function(){
  $('form#unlucky').submit(function(event) {
    event.preventDefault();
    var unluckyEvents = [];
    $('input:checkbox[name=unlucky-events]:checked').each(function() {
      var unluckyEvent = $(this).val();
      unluckyEvents.push(unluckyEvent);
    });
    $('input:checkbox[name=lucky-events]:checked').each(function() {
      var luckyEvents = $(this).val();
      console.log(luckyEvents);
    });
    console.log(unluckyEvents);
  });
});
