var inputFname, inputLname, inputEmail;

// var spriteArray = [];

function setup() {
	var myCanvas = createCanvas(800,600);
	myCanvas.parent('myp5');
	menuScene = loadImage("memoria/camel.png");
	houseScene = loadImage("memoria/forest_blur.png");
	forestScene = loadImage("memoria/forest_blur.png");
	mountainScene = loadImage("memoria/mountain_blur.png");
	desertScene = loadImage("memoria/desert_blur.png");
	conclusionScene = loadImage("memoria/conclusion.png");
	lorraine = loadImage("memoria/lorraine.png");
	lorraine_flip = loadImage("memoria/lorraine_flip.png");
	ian = loadImage("memoria/ian.png");
	elf = loadImage("memoria/elf.png");
	goat = loadImage("memoria/goat.png");
	camel = loadImage("memoria/camel.png");
	stone = loadImage("memoria/stone.png");
	bg = menuScene;
	// frameRate(10);
	// scene1button = createButton("start scene1");
	// scene1button.position(200,65);
	// scene1button.mouseClicked(loadSceneOne);
	//var startImg = loadImage("memoria/click_to_start.png");
	//var startSprite = createSprite(375,260,445,86);
	//startSprite.addImage(startImg);
	//startSprite.setCollider("rectangle",0,0,800,600);
	//startSprite.onMouseReleased = function() {
	    //load html for controls on bottom, load scene1
	    //loadControls();
    	
	//}
}

function draw() {
	
	background(bg);
	//background(51);
	if (keyWentDown("c"))
	{
	   // clear();
	    // allSprites.removeSprites();
	   // for (i = 0; i < allSprites.length; i++)
	   // {
	   //     allSprites[i].visible = false;
	   // }
	   // for(i = 0; i < spriteArray.length; i++)
	   // {
	   //     spriteArray[i].visible = false;
	   // }
	    console.log('cleared');
	}
// 	if (keyWentDown("t"))
// 	{
// 	    fill('red');
// 	    ellipse(mouseX, mouseY, 20, 20);
// 	}
	drawSprites();
}

function clear_all() {
	allSprites.removeSprites();
}


function mousePressed()
{
    
    //var lorraine = loadImage("memoria/lorraine.png");
    //create a sprite at the mouse position and store it in a temporary variable
    //var s = createSprite(mouseX, mouseY, 30, 30);
    //s.addImage(lorraine)
    //if no image or animation is associated it will be a rectancle of the specified size
    //and a random color
    
    //now you can use the variable to set properties
    //e.g. a random velocity on the x and y coordinates
    //s.velocity.x = random(-5, 5);
	//s.velocity.y = random(-5, 5);
    // spriteArray.push(s);

}


function loadMenu()
{
	bg = menuScene;
	var startImg = loadImage("memoria/click_to_start.png");
	var startSprite = createSprite(375,260,445,86);
	startSprite.addImage(startImg);
	startSprite.setCollider("rectangle",0,0,800,600);
	startSprite.onMouseReleased = function() {
	    start();
	}
	
}

// introduction
function loadScenePre()
{
	//document.getElementById("startButton").style.display = "none";
	bg = houseScene;
	var lorraineSprite = createSprite(200, 350);
	lorraineSprite.addImage(lorraine);
	var ianSprite = createSprite(400, 350);
	ianSprite.addImage(ian);
}

// lorraine meets elf
function loadSceneZero()
{
	bg = forestScene;
	var lorraineSprite = createSprite(200, 350);
	lorraineSprite.addImage(lorraine);
	var elfSprite = createSprite(500, 500);
	elfSprite.addImage(elf);
}

// lorraine must answer question 1
function loadSceneOne()
{
    // clear();0.
    bg = forestScene;
    var lorraineSprite = createSprite(200, 350);
    lorraineSprite.addImage(lorraine);
    var elfSprite = createSprite(500, 350);
	elfSprite.addImage(elf);
}

// lorraine gets question 1 right
function loadSceneOneRight()
{
	bg = forestScene;
    var lorraineSprite = createSprite(200, 350);
    lorraineSprite.addImage(lorraine);
    var elfSprite = createSprite(500, 350);
	elfSprite.addImage(elf);
}


// lorraine gets question 1 wrong
function loadSceneOneWrong()
{
	bg = forestScene;
    var lorraineSprite = createSprite(200, 350);
    lorraineSprite.addImage(lorraine);
}



// lorraine meets goat and has to answer his question
function loadSceneTwo()
{
	bg = mountainScene;
    var lorraineSprite = createSprite(200, 350);
    lorraineSprite.addImage(lorraine);
    var goatSprite = createSprite(500, 350);
    goatSprite.addImage(goat);
}


// lorraine gets question 2 right
function loadSceneTwoRight()
{
	bg = mountainScene;
    var lorraineSprite = createSprite(200, 350);
    lorraineSprite.addImage(lorraine);
    var goatSprite = createSprite(500, 350);
    goatSprite.addImage(goat);
}


// lorraine gets question 2 wrong
function loadSceneTwoWrong()
{
	bg = mountainScene;
    var lorraineSprite = createSprite(200, 350);
    lorraineSprite.addImage(lorraine);
}



// lorraine meets camel and has to answer his question
function loadSceneThree()
{
    bg = desertScene;
    var lorraineSprite = createSprite(600, 350);
    lorraineSprite.addImage(lorraine_flip);
    var camelSprite = createSprite(200, 350);
    camelSprite.addImage(camel);
}

// lorraine gets question 3 right
function loadSceneThreeRight()
{
	bg = desertScene;
    var lorraineSprite = createSprite(600, 350);
    lorraineSprite.addImage(lorraine_flip);
    var camelSprite = createSprite(200, 350);
    camelSprite.addImage(camel);
}


// lorraine gets question 3 wrong
function loadSceneThreeWrong()
{
	bg = desertScene;
    var lorraineSprite = createSprite(600, 350);
    lorraineSprite.addImage(lorraine_flip);
    var camelSprite = createSprite(100, 250);
    camelSprite.addImage(camel);
    camelSprite.mirrorX(-1);
}



// lorraine finds stone (end)
function loadSceneFour()
{
    bg = 51;
    var lorraineSprite = createSprite(200, 350);
    lorraineSprite.addImage(lorraine);
    var stoneSprite = createSprite(600, 350);
    stoneSprite.addImage(stone);
}


function loadControls()
{
    // old browser check
	// if ie7+, firefox, chrome, opera, safari
	// if (window.XMLHttpRequest) {
		// xmlhttp = new XMLHttpRequest();
	// }
	// else {//else probably ie6, ie5
		// xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	// }
	// xmlhttp.onreadystatechange = function() {
		// State  Description
		// 0      The request is not initialized
		// 1      The request has been set up
		// 2      The request has been sent
		// 3      The request is in process
		// 4      The request is complete
		// http: 200 == OK
		// if (this.readyState == 4 && this.status == 200) {
			document.getElementById("controls").style.display = "block";
			document.getElementById("nextButton").style.display = "none";
		// }
	// };
	// xmlhttp.open("GET","controls.html");
	// xmlhttp.send();
}

function loadEndSurvey()
{
	inputFname = createInput();
	inputFname.position(20,65);
	inputLname = createInput();
	inputLname.position(20,inputFname.y+inputFname.height);
	inputEmail = createInput();
	inputEmail.position(20,inputLname.y+inputLname.height);

	button = createButton("submit");
	button.position(20,inputEmail.y+inputEmail.height);
	button.mouseClicked(submitDataPayload);

	/*
	// old browser check
	// if ie7+, firefox, chrome, opera, safari
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}
	else {//else probably ie6, ie5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		// State  Description
		// 0      The request is not initialized
		// 1      The request has been set up
		// 2      The request has been sent
		// 3      The request is in process
		// 4      The request is complete
		// http: 200 == OK
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("game").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET","feedback.html");
	xmlhttp.send();
	*/
}

function submitDataPayload()
{
	var form = document.createElement("form");
	form.setAttribute("method","post");
	form.setAttribute("action","telemetry.php");

	var fnameField = document.createElement("input");
	fnameField.setAttribute("type","hidden");
	fnameField.setAttribute("name","fname");
	fnameField.setAttribute("value",inputFname.value());
	form.appendChild(fnameField);

	var lnameField = document.createElement("input");
	lnameField.setAttribute("type","hidden");
	lnameField.setAttribute("name","lname");
	lnameField.setAttribute("value",inputLname.value());
	form.appendChild(lnameField);

	var mailField = document.createElement("input");
	mailField.setAttribute("type","hidden");
	mailField.setAttribute("name","email");
	mailField.setAttribute("value",inputEmail.value());
	form.appendChild(mailField);

	document.body.appendChild(form);
	form.submit();
	textSize(32);
	text("submitted?", 10, 30);
}