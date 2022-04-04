var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.preload = "none";
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = 0.95;
})
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = 1.05;
})


document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video.muted = true;
})
