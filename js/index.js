(function(){
	var box = document.querySelector('#div');
	var lastX,lastY,lastZ;
	// 记录用户摇一摇的幅度，然后对比前后两次摇的幅度判断用户是否在摇晃手机
	window.addEventListener('devicemotion', function(e){
		var motion = e.accelerationIncludingGravity;
		var x = Math.round(motion.x);
		var y = Math.round(motion.y);
		var z = Math.round(motion.z);
		var maxRang = 80;
		var minRang = 15;
		var isShake = false;
		box.innerHTML = Math.max(dis);
		if(typeof lastX == 'undefined'){
			lastX = x;
			lastY = y;
			lastZ = z;
			return;
		}
		
		var dis = Math.abs(x - lastX) + Math.abs(y - lastY) + Math.abs(z - lastZ);
		box.innerHTML = Math.max(dis);
		 if(dis > maxRang){
		 	isShake = true;
		 }
		 if(dis < minRang && isShake){
		 	isShake = false;
		box.innerHTML = Math.max(dis);
		 	alert("摇完了");
		 }
		 
		lastX = x;
		lastY = y;
		lastZ = z;
	})
})()