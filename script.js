var audioElement;
var array = [];

class Sound {   // press button we create sound object
    constructor(label,audio) {
	    this.name = label;
        this.sound = audio;
    }  
} 

function do_press(label,button_id) { // when you press button
	if(label=="120 future funk beats 25")
		link='https://static.wixstatic.com/mp3/eda39a_747bbdcf495845c5af816d857b450b11.mp3';
	if(label=="120 stutter breakbeats 16")
		link='https://static.wixstatic.com/mp3/eda39a_7c130d5dacde46dca56c1e13a3ee3f6c.mp3';
	if(label=="Bass Warwick heavy funk")
		link='https://static.wixstatic.com/mp3/eda39a_9e6848c0cea84fb099bc70365a6b3dac.mp3';
	if(label=="electric guitar coutry slide 120bpm - B")
		link='https://static.wixstatic.com/mp3/eda39a_96638c616260406da014a3a39c095938.mp3';
	if(label=="FUD 120 Stompy Slosh")
		link='https://static.wixstatic.com/mp3/eda39a_fee60220de4d46579454fea0db324a49.mp3';
	if(label=="GrooveB 120bpm Tanggu")
		link='https://static.wixstatic.com/mp3/eda39a_9b428c0176ed4923886933d209d4f23f.mp3';
	if(label=="MazePolitics 120 Perc")
		link='https://static.wixstatic.com/mp3/eda39a_e65a6d546b9b487e8d7a6565205dba9f.mp3';
	if(label=="PAS3GROOVE 1.03B Sound")
		link='https://static.wixstatic.com/mp3/eda39a_c79620c8df4c4242a0bb0f67b83f4c52.mp3';
	if(label=="SilentStar 120 Em OrganSynth")
		link='https://static.wixstatic.com/mp3/eda39a_9fa9170aed3d4207ac2d6d113949c23b.mp3';
	

	audioElement= new Audio(link); // Create Audio element for playing music.
  

  	if ($(button_id).css('background-color')!="rgb(255, 0, 0)") // check if button is not pressed
		{		 
		array.push(new Sound(label,audioElement)); // Add new Sound object to array.
		audioElement.onended = function() // Listener for finish the first looper.
		{
		
			for (var i =0; i <array.length; i++) { // Loop over all the selected sounds.
				array[i].sound.play(); // play sound.
				
		}
		}
	
	if(array.length==1) //if there is only 1 sound, play it immediatly.
		audioElement.play();

		 
		}
	else //if button is pressed
		{
		for (var i =0; i <array.length; i++) { // loop over array
			if(array[i].sound.src==link) // if you find the Sound object
				{
				array[i].sound.pause(); // pause it
				array.splice(i,1); // remove it
				}
			}	

		}
	$(button_id).toggleClass("pressed"); // switch color button when press
} //end of do_press function



$(document).ready(function(){
  $("#bt1").click(function(){
  do_press($("#bt1").text(),"#bt1");
  });
});


$(document).ready(function(){
  $("#bt2").click(function(){
  do_press($("#bt2").text(),"#bt2");
 
  });
});

$(document).ready(function(){
  $("#bt3").click(function(){
  do_press($("#bt3").text(),"#bt3");
  });
});

$(document).ready(function(){
  $("#bt4").click(function(){
  do_press($("#bt4").text(),"#bt4");
  });
});

$(document).ready(function(){
  $("#bt5").click(function(){
  do_press($("#bt5").text(),"#bt5");
  });
});

$(document).ready(function(){
  $("#bt6").click(function(){
  do_press($("#bt6").text(),"#bt6");
  });
});

$(document).ready(function(){
  $("#bt7").click(function(){
  do_press($("#bt7").text(),"#bt7");
  });
});

$(document).ready(function(){
  $("#bt8").click(function(){
  do_press($("#bt8").text(),"#bt8");
  });
});
$(document).ready(function(){
  $("#bt9").click(function(){
  do_press($("#bt9").text(),"#bt9");
  });
});





function stop_button() { // when you press stop button

		for (var i =0; i <array.length; i++) { // loop over array
			array[i].sound.pause();
}
			array=[];
  if ($("#bt1").css('background-color')=="rgb(255, 0, 0)")
{
    $("#bt1").toggleClass("pressed");
}

 if ($("#bt2").css('background-color')=="rgb(255, 0, 0)")
{
    $("#bt2").toggleClass("pressed");
}
 if ($("#bt3").css('background-color')=="rgb(255, 0, 0)")
{
    $("#bt3").toggleClass("pressed");
}
 if ($("#bt4").css('background-color')=="rgb(255, 0, 0)")
{
    $("#bt4").toggleClass("pressed");
}
 if ($("#bt5").css('background-color')=="rgb(255, 0, 0)")
{
    $("#bt5").toggleClass("pressed");
}
 if ($("#bt6").css('background-color')=="rgb(255, 0, 0)")
{
    $("#bt6").toggleClass("pressed");
}
 if ($("#bt7").css('background-color')=="rgb(255, 0, 0)")
{
    $("#bt7").toggleClass("pressed");
}
 if ($("#bt8").css('background-color')=="rgb(255, 0, 0)")
{
    $("#bt8").toggleClass("pressed");
}
 if ($("#bt9").css('background-color')=="rgb(255, 0, 0)")
{
    $("#bt9").toggleClass("pressed");
}

}

function pause_button() { // when you press stop button

		for (var i =0; i <array.length; i++) { // loop over array
		array[i].sound.pause();
		
		}

}

function play_button() { // when you press stop button

		for (var i =0; i <array.length; i++) { // loop over array
		array[i].sound.play();
		}
		}
