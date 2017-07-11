jQuery(document).ready(function(){
	//WOW	


$("body").queryLoader2({
    backgroundColor: "#1F1F1F",
    percentage: true,
    deepSearch: true,
    barHeight: 0,
    completeAnimation: "fade",
    onLoadComplete: function() {
        new WOW().init();
    }
});


  
wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();
});
