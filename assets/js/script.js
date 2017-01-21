$(document).ready(function() {
	var projectY = $("#red-bar").offset().top;
  var aboutY = $("#blue-bar").offset().top;
  var headingY = $("#heading-container").offset().top;

  $("#cl-landing").click(function(){
    $("#close").show();
    $("#modal").fadeIn();
    $("#pic2").fadeIn();
    console.log("yo");
  })

  $("#close").click(function(){
    $("#pic1").hide();
    $("#pic2").hide();
    $("#close").hide();
  })

  $("#cl-item").click(function(){
    $("#close").show();
    $("#modal").fadeIn();
    $("#pic1").fadeIn();
    console.log("yo");
  })

  $("#close").click(function(){
    $("#pic1").hide();
    $("#pic2").hide();
    $("#close").hide();
  })

  $(window).scroll(function(){
  	
  	var currentScroll = ($(window).scrollTop() + 120); //calculates how far you are from the top of the screen

  	console.log(currentScroll);
    console.log(projectY);

  	if (currentScroll >= projectY){
  		console.log("at the top");
  	}

  	if (currentScroll >= projectY){

  		$(".title-bar").addClass("title-red");
      $(".about-link").addClass("about-red");
      $(".projects-link").addClass("projects-red");
      $(".heading").addClass("heading-red");
      $("#head2").show();

	} else{

		$(".title-bar").removeClass("title-red");
    $(".about-link").removeClass("about-red");
    $(".projects-link").removeClass("projects-red");
    $(".heading").removeClass("heading-red");
    $("#head2").hide();

	}

    if (currentScroll >= aboutY){
      console.log("at the top");
    }

    if (currentScroll >= aboutY){

      $(".title-bar").addClass("title-blue");
      $(".about-link").addClass("about-blue");
      $(".projects-link").addClass("projects-blue");
      $(".heading").addClass("heading-blue");
      $("#head3").show();

  } else{

    $(".title-bar").removeClass("title-blue");
    $(".about-link").removeClass("about-blue");
    $(".projects-link").removeClass("projects-blue");
    $(".heading").removeClass("heading-blue");
    $("#head3").hide();
  }



})

})