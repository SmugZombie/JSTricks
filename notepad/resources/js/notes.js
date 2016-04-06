/* Defined Variables */
window.autoSave = 1;
window.saveTimer = null;

/* On Ready */
$( document ).ready(function() {
    resizeNotes();
    $("#notes")[0].value = localStorage.getItem("notes");
});

/* On Resize */
$(window).resize(function() {
	resizeNotes();  
});

function resizeNotes(){
	myHeight = window.innerHeight - 60;
  	$("#notes").css("height", myHeight);
}

fileToLoad.addEventListener("change", function() {
	if(loadButton2.style.display != 'none'){
		loadButton2.innerHTML = "Load: " + fileToLoad.files[0].name;
	}
});

function doneTyping(){
	resetAutoSave();
	$("#saveButton")[0].disabled = false;
	//clearTimeout(window.saveTimer);
	//window.saveTimer = setTimeout(saveNotes(), 3000);
	saveNotes();
}

function saveNotes(){
	if(window.autoSave == 1){
		myNotes = $("#notes")[0].value;
		//console.log(myNotes);
		localStorage.setItem("notes", myNotes);
		window.autoSave = 0;
		$("#saveButton")[0].disabled = true;
	}
	else{
		return;
	}
}

function resetAutoSave(){
	window.autoSave = 1;
	$("#saveButton")[0].disabled = false;
	/* clearTimeout(window.saveTimer);
	window.saveTimer = setTimeout(saveNotes(), 3000); */
}

function saveTextAsFile()
{
	var textToWrite = $("#notes")[0].value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = prompt("Save File As: (Include Extension)", ".txt");

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function checkFile(){
	$( "#fileToLoad" ).click();
	$("#loadButton1").css("display", 'none');
	$("#loadButton2").css("display", 'inline');
}

function loadFileAsText()
{
	//fileToLoad.click();
	//$( "#fileToLoad" ).click();

	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		$("#notes")[0].value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");

	$("#loadButton1").css("display", 'inline');
	$("#loadButton2").css("display", 'none');
	loadButton2.innerHTML = "Load...";
}