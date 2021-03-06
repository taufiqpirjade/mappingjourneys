$(document).ready(function() {
		$.ajax({
			type: 'POST',
	        url: 'getEventForIndex',
	        dataType: 'json',
	        headers: {
	            Accept : "application/json"
	        },
	       success: function(response){
	    	for (i = 0; i < response.length; i++) { 
	    	   $('#flexiselDemo1').append('<li id="dynamicList"><div class="w3layouts_event_grid"><div class="w3_agile_event_grid1">'
	    			  + '<img src="'+response[i].thumbnailimagelink+'" alt=" " class="img-responsive" /><div class="w3_agile_event_grid1_pos">'
	    			   +'<p>'+timeConverter(response[i].eventDate)+'</p></div>'
	    			   +'<div class="agile_event_grid1_pos">'
	    			   +'<ul>'
	    			   +'<li><a href="#"><i class="fa fa-inr" aria-hidden="true"></i>'+response[i].amount+'</a></li>'
	    			   +'<li><a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>200</a></li>'
	    			   +'</ul></div></div>'
	    			   +'<div class="agileits_w3layouts_event_grid1">'
	    			   +'<h5><a href="#" data-toggle="modal" data-target="#myModal">'+response[i].name+'</a></h5>'
	    			  // +'<p>'+response[i].description+'</p>'
	    			   +'<div class="more more1">'
	    			   +'<button id="'+response[i].id+'" class="morelink">More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>'
	    			   +'</div>'
	    			   +'</div>'
	    			   +'</div></li>');
	       }
	    	 $("#flexiselDemo1").flexisel({
			visibleItems: 4,
			animationSpeed: 1000,
			autoPlay: true,
			autoPlaySpeed: 3000,    		
			pauseOnHover: true,
			enableResponsiveBreakpoints: true,
			responsiveBreakpoints: { 
				portrait: { 
					changePoint:480,
					visibleItems: 1
				}, 
				landscape: { 
					changePoint:667,
					visibleItems:2
				},
				tablet: { 
					changePoint:800,
					visibleItems: 3
				}
			}
		}); 
		  }
	});
		
		
		function timeConverter(UNIX_timestamp){
			  var a = new Date(UNIX_timestamp);
			  var months = ['January','February','March','April','May','Jun','July','August','September','October','November','December'];
			  var year = a.getFullYear();
			  var month = months[a.getMonth()];
			  var date = a.getDate();
			  var time = date + ' ' + month + ' ' + year;
			  return time;
			};
		
});