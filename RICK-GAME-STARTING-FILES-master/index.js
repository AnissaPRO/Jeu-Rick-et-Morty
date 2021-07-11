const clouds = document.querySelectorAll(".clouds");
const heads = document.querySelectorAll(".head");
const scoreBoard = document.querySelector(".score");
let lastCloud;
let timeUp = false; //false si pas fini, true quand c'est fini
let score = 0;

function randomTime(min,max){
	return Math.round(Math.random()*(max-min)+min);
	
};

function randomCloud(clouds){
	 const indexCloud = Math.floor(Math.random()*(clouds.length));
	 const cloudSelect = clouds[indexCloud];
	 
	 if(cloudSelect == lastCloud){
		 return randomCloud(clouds);
	 }
	 lastCloud = cloudSelect;
	 
	 return cloudSelect;
};

function showHead1 () {
	const temps = randomTime(600,1000);
	const cloud = randomCloud(clouds);
	cloud.classList.add("up");
	
	setTimeout(() => {
		if (!timeUp) showHead1();
	cloud.classList.remove("up");
	} ,temps);
};

function showHead2 () {
	const temps = randomTime(500,800);
	const cloud = randomCloud(clouds);
	cloud.classList.add("up");
	
	setTimeout(() => {
		if (!timeUp) showHead2();
	cloud.classList.remove("up");
	} ,temps);
};

function showHead3 () {
	const temps = randomTime(250,500);
	const cloud = randomCloud(clouds);
	cloud.classList.add("up");
	
	setTimeout(() => {
		if (!timeUp) showHead3();
	cloud.classList.remove("up");
	} ,temps);
};

function playerScore(event){
	if(!event.isTrusted) return;
	score++;
	this.classList.remove("up");
	scoreBoard.textContent = score;
	
	
}

heads.forEach(heads => heads.addEventListener("click", playerScore));
/*Commencement de jeu */
function startGame1 () {
	scoreBoard.textContent = 0;
	score = 0;
	timeUp = false;
	showHead1();
	setTimeout( () => {
		timeUp = true;
		setTimeout ( () => {
			scoreBoard.textContent = "End";
			
		}, 2000);
		
	}, 10000);
	
}

function startGame2 () {
	scoreBoard.textContent = 0;
	score = 0;
	timeUp = false;
	showHead2();
	setTimeout( () => {
		timeUp = true;
		setTimeout ( () => {
			scoreBoard.textContent = "End";
			
		}, 2000);
		
	}, 10000);
	
}

function startGame3 () {
	scoreBoard.textContent = 0;
	score = 0;
	timeUp = false;
	showHead3();
	setTimeout( () => {
		timeUp = true;
		setTimeout ( () => {
			scoreBoard.textContent = "End";
			
		}, 2000);
		
	}, 10000);
	
}
/*texte niveaux*/
	var text1 = "NOVICE";
	var i=0;
	var text2 = "APPRENTI";
	var k=0;
	var text3 = "SENIOR";
	var j=0;
	
	const speed= 50;
	
	function textWritter1() {
		
		if(i < text1.length) {
			document.getElementById("demo1").innerHTML += text1.charAt(i);
			i++;
			setTimeout(textWritter1,speed);
		}
	}
		
		function textWritter2() {
		
		if(k < text2.length) {
			document.getElementById("demo2").innerHTML += text2.charAt(k);
			k++;
			setTimeout(textWritter2,speed);
		}
	}
	function textWritter3() {
		
		if(j < text3.length) {
			document.getElementById("demo3").innerHTML += text3.charAt(j);
			j++;
			setTimeout(textWritter3,speed);
		}
	}
	
	function myClick(){
		for(var i=1;i<=3;i++){
			document.getElementById("demo"+i).addEventListener("click", function() {
			document.getElementById("demo1").style.display= "none";
			document.getElementById("demo2").style.display= "none";
			document.getElementById("demo3").style.display= "none";
			});
			
		}
		
	}
	
	document.getElementById("morty-play").addEventListener("click",function() {
				textWritter1();
				textWritter2();
				textWritter3();
				myClick();
		
	});




