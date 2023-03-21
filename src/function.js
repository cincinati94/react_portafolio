export function colorText() {
    const text = document.getElementById("coloredText");
    const letters = text.textContent.split("");
    text.innerHTML = "";
  

    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.className='span-animated';
    

      span.addEventListener("mouseenter", () => {
        span.style.color = `hsl(${(360 / letters.length) * index}, 100%, 50%)`;
        span.style.fontSize = '3rem';
        span.style.transition= 'fadeIn all 1s';
      });

      span.addEventListener("mouseleave", () => {
       span.style.color='black';
        span.style.fontSize = "";

      });
      text.appendChild(span);
    });
  }
   