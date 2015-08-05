command:"",
render: function(){

	$('head').append('<link rel="stylesheet" href="css/StickyNoteDemo.css"><link rel="stylesheet" href="css/jquery.postitall.css"><script src="js/jquery.postitall.js"></script>');
	return "<div id='divStickyNotesContainer'>a</div>";
	
},
update: function (){
	$(document).ready(function() {
	  $('#divStickyNotesContainer').postitall(
		  {
		  	id              : 0,                        //Id
		  	created         : Date.now(),               //Creation date
		  	domain          : window.location.origin,   //Domain in the url
		  	page            : window.location.pathname, //Page in the url
		  	backgroundcolor : '#FFFC7F',                //Background color
		  	textcolor       : '#333333',                //Text color
		  	textshadow      : true,                     //Shadow in the text
		  	position        : 'relative',               //Position absolute or relative
		  	posX            : '5px',                    //top position
		  	posY            : '5px',                    //left position
			height          : 180,                      //height
		  	width           : 200,                      //width
		  	minHeight       : 152,                      //resizable min-width
		  	minWidth        : 131,                      //resizable min-height
		  	description     : '',                       //content
		  	newPostit       : false,                    //create a new postit
		  	autoheight      : true,                     //Set autoheight feature on or off
		  	draggable       : true,                     //Set draggable feature on or off
		  	resizable       : true,                     //Set resizable feature on or off
		  	removable       : true,                     //Set removable feature on or off
		  	changeoptions   : true,                     //Set options feature on or off
		  	savable         : true,                    //Save postit in local storage
		  }
	  );
	});
},
style: "        \n\
  top: 100px     \n\
  left: 500px     \n\
  color: #fff     \n\
  font-family: Helvetica Neue     \n\
  "
	

