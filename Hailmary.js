const input = document.querySelector(".input-box input");
const speech = document.getElementById("speech");
const btn = document.querySelector(".checkpoint");
const title = document.querySelector(".Title");
const rocky = document.querySelector(".Rocky"); 
const rockyFull = document.getElementById("rocky-full");

function sendMessage() {
    const text = input.value.trim();

    if (text === "") {
        speech.style.display = "none";
    } else {
        speech.style.display = "block";
        const cleanText = text.replace(/[<>]/g, "");
        speech.textContent = `<${cleanText}>`;

        // กระพริบ
        speech.classList.remove("blink");
        void speech.offsetWidth;
        speech.classList.add("blink");

        title.classList.add("white-active");

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed"; 
        document.body.style.minHeight = "100vh";         
        document.body.style.margin = "0";  
        document.body.classList.add('bg-active'); 
        
        rocky.classList.add("hide");
        rockyFull.style.display = "block";
    }

    input.value = "";
    input.focus();
}

// เพิ่ม event listener
btn.addEventListener("click", sendMessage);

// กด Enter
//input.addEventListener("keydown", (e) => {
 //   if (e.key === "Enter") {
      //  sendMessage();
   // }
// });