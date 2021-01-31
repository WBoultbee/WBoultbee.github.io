function populateFileArray()
{
	var names=["pictures/pic1.jpg","pictures/pic2.jpg","pictures/pic3.jpg"];
	return names;
}

function nextPicture()
{
var srcId = document.getElementById("picture");

// Check if at the end of the fileNames array, then roll back to start
	if (pictureCounter == fileNames.length)
		{
			pictureCounter=0;
		}	
		
//Generate new fileName 		
	var newSrc=fileNames[pictureCounter];

//Change the src to new picture
	srcId.src=newSrc;
//Increment pictureCounter for next roll
	pictureCounter++;



}

var fileNames=[];
var pictureCounter=0;

// Populate dynamic array of filenames, done this way to allow for later expansion)
	fileNames=populateFileArray();

//Change the image every 3 seconds
    setInterval(nextPicture, 1500);
    