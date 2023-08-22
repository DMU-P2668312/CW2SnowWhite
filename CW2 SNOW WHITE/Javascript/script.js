//A javascript page was added so that the 
//functions that are used on all pages are in one place and save repeating codes and 
// making the code too big to load properly.



// NAME CHANGER was sourced from ChatGPT; this is referenced on the footer and report, 
//The creator take no credit for this; only the styling is her own for this function
// help was needed to learn how to achieve this, and the creator would continue to learn from the sources she 
//found and tried.
// NAME CHANGER 
document.addEventListener("DOMContentLoaded", function () {
    const storyElement = document.getElementById("story");
    const newWordInput = document.getElementById("newWord");
    const submitButton = document.getElementById("submitBtn");
  
    submitButton.addEventListener("click", function () {
      const newWord = newWordInput.value.trim();
  
      if (newWord !== "") {
        const storyContent = storyElement.innerText;
        const updatedContent = storyContent.replace(/Leona/g, newWord);
        storyElement.innerText = updatedContent;
      }
    });
  });
  

// help for this was found on w3schools.
// SIDE TAB FOR MENU
  function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  }


// AUTO READER FOR WEBSITE was sourced from ChatGPT; this is referenced on the footer and report, 
//The creator take no credit for this. Only the styling is her own for this function
// help was needed to learn how to achieve this, and the creator would continue to learn from the sources she 
//found and tried.
// AUTO READER FOR WEBSITE
  // Get references to the buttons
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");

  let isReading = false;
  let currentParagraphIndex = 0;
  let paragraphs = document.getElementsByTagName("p");

  // Function to read the current paragraph
  function readParagraph() {
  if (currentParagraphIndex < paragraphs.length && isReading) {
  const paragraphText = paragraphs[currentParagraphIndex].textContent;
  const utterance = new SpeechSynthesisUtterance(paragraphText);
  speechSynthesis.speak(utterance);

  currentParagraphIndex++;
  utterance.onend = readParagraph;
  }
  }

  // help for the page navigators was found on w3schools
   // Start reading
  startButton.addEventListener("click", () => {
  isReading = true;
  readParagraph();
  });

  // Stop reading
  stopButton.addEventListener("click", () => {
  isReading = false;
  speechSynthesis.cancel();
  currentParagraphIndex = 0;
  });



