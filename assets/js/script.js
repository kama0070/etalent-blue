// All, Pre-Arrival, Post-Arrival - Show/Hide
if($("#data-forecasts").css("display") != "none" && $("#analysis-reporting").css("display") != "none" && $("#smart-economy").css("display") != "none"){
	$("#all-prog-tab").addClass("btn-rounded-white-select");
}

$(document).ready(function(){

  $("#data-forecasts-tab").click(function(){
	$("#data-forecasts").show();
    $("#analysis-reporting").hide();
	$("#smart-economy").hide();
	// Add select class and remove it from others
	$("#all-prog-tab").removeClass("btn-rounded-white-select");
	$("#data-forecasts-tab").addClass("btn-rounded-white-select");
	$("#analysis-reporting-tab").removeClass("btn-rounded-white-select");
	$("#smart-economy-tab").removeClass("btn-rounded-white-select");
  });

  $("#analysis-reporting-tab").click(function(){
    $("#data-forecasts").hide();
    $("#analysis-reporting").show();
	$("#smart-economy").hide();
	// Add select class and remove it from others
	$("#all-prog-tab").removeClass("btn-rounded-white-select");
	$("#data-forecasts-tab").removeClass("btn-rounded-white-select");
	$("#analysis-reporting-tab").addClass("btn-rounded-white-select");
	$("#smart-economy-tab").removeClass("btn-rounded-white-select");
  });
  
  $("#all-prog-tab").click(function(){
    $("#data-forecasts").show();
    $("#analysis-reporting").show();
	$("#smart-economy").show();
	// Add select class and remove it from others
	$("#all-prog-tab").addClass("btn-rounded-white-select");
	$("#data-forecasts-tab").removeClass("btn-rounded-white-select");
	$("#analysis-reporting-tab").removeClass("btn-rounded-white-select");
	$("#smart-economy-tab").removeClass("btn-rounded-white-select");
  });
  
});

$("#navbar-btn-icon").click(function(e) {
  var menuItem = $(this);

  if (menuItem.attr("aria-expanded") === "true") {
    $("span.navbar-toggler-icon").addClass('clicked');
  }
  else if (menuItem.attr("aria-expanded") === "false") {
    $("span.navbar-toggler-icon").removeClass('clicked');
  }

});
