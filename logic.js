document.getElementById("speakForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const textInput = document.getElementById("textInput").value;
    if (textInput) {
        const utterance = new SpeechSynthesisUtterance(textInput);
        window.speechSynthesis.speak(utterance);
    }
});
