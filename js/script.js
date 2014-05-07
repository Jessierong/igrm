// JavaScript Document
$(function() {
	tabselect();
	PageMenu(); 
	LanguageMenu(); 
	
	//mobile support
	taptouch();
	    
	//plugin 
	iCheck(); 
	$(".fancybox").fancybox();
	$( '.datepicker' ).pickadate()
})

//win resize reload
$(window).resize(function() {

});

$(window).scroll(function () { 
	//You've scrolled this much:
	var scrollHeight = $(window).scrollTop();
	var hearderHeight = $("header").height();
	if ( scrollHeight > hearderHeight){
		$("header").addClass("headfixed");
		$("#allPart").css("padding-top",hearderHeight)
	}
	else{
		$("header").removeClass("headfixed");
		$("#allPart").css("padding-top",0)
	}
});


//tab select
function tabselect(){
	$(".tabbox h2").click(function(){
		$(this).addClass("on").siblings().removeClass("on");		
		var i = $(this).index();
		$(".tabcontainer>section").hide().parent().children().eq(i).show();
		}
	);
} 
 
//slide up donw only use class name
function slideToggle(target){ 
	var target = "." + target;
	$(target).slideToggle();
	if ( $(document).width() > 480 ){	
		if ( $(target).css("display") == "block" ){
			$(target).css("display","");
		}
	}
	shadowMobile()
}

function shadowMobile(){
	if ( $(document).width() <= 480 ){	
		$(".wrapper-mobile").toggleClass("blur");	
		$(".shadow-mobile").toggle();
	}
}

//menu page
function PageMenu(){
	$(".page li").click(function(){
		$(".page li").removeClass("selected");
		$(this).addClass("selected");
	})
}
//menu language
function LanguageMenu(){
	$(".language li").click(function(){
		$(".language li").removeClass("selected").addClass("gray");
		$(this).addClass("selected").removeClass("gray");
	})
}

//add touch effect on element
function taptouch(){
	$('.form li, .button').live('touchstart', function(e){
		$(this).addClass('active');
	});	
	$('.form li, .button').live('touchend', function(e){
		$('li, .button').removeClass('active');
	});
}

//icheck style initial
function iCheck(){	
	$('input').iCheck({
		checkboxClass: 'icheckbox_flat-orange',
		radioClass: 'iradio_flat-orange'
	});      	
}
 