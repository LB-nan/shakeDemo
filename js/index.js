(function(){
	var box = document.querySelector('#div');
	window.addEventListener('devicemotion', function(e){
		var motion = e.accelerationIncludingGravity;
		var x = Math.round(motion.x);
		var y = Math.round(motion.y);
		var z = Math.round(motion.z);
	})
})()