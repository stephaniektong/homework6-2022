var video = document.querySelector("#player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.preload = "none";
	video.loop = false;
	video.autoplay = false;
});


let vol = video.volume
document.querySelector("#play").addEventListener("click", function playvideo() {
	console.log("Play Video");
	video.play()
	document.getElementById("volume").innerHTML = vol;
});
document.querySelector("#pause").addEventListener("click", function pausevideo() {
	console.log("Pause Video");
	video.pause()
});


document.querySelector("#slower").addEventListener("click", function slowdown() {
	video.playbackRate *= 0.95;
	console.log("Decrease playback rate to " + video.playbackRate.toFixed(2) + " original speed");
})
document.querySelector("#faster").addEventListener("click", function speedup() {
	video.playbackRate /= 0.95
	console.log("Increase playback rate to " + video.playbackRate.toFixed(2) + " original speed");
})


document.querySelector("#skip").addEventListener("click", function advance() {
	if (video.currentTime <= (video.duration-15)){
		video.currentTime += 15;
		console.log("Current Video Time: " + video.currentTime.toFixed(2))
	}
	else {
		video.currentTime = 0;
		console.log("Current Video Time: " + video.currentTime.toFixed(2))
	}
})


document.querySelector("#mute").addEventListener("click", function mute() {
	if (video.muted == false){
		video.muted = true;
		console.log("Mute Video")
		document.getElementById("mute").innerHTML = "Unmute"
	}
	else {
		video.muted = false;
		console.log("Unmute Video")
		document.getElementById("mute").innerHTML = "Mute"
	}
})


document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100
	document.getElementById("volume").innerHTML = video.volume
})


document.getElementById("vintage").addEventListener("click", function () {
	video.classList.add('oldSchool');
	console.log("Styled Old School");
})
document.getElementById("orig").addEventListener("click", function () {
	video.classList.remove('oldSchool');
	console.log("Styled Original");

})
