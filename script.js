const quote = '"All events have a cause, although the validity of the cause may be flawed."';
const quoteElement = document.getElementById("quote");

let i = 0;
const typeWriter = () => {
  if (i < quote.length) {
    quoteElement.innerHTML += quote.charAt(i);
    i++;
    setTimeout(typeWriter, 50); 
  } else {
  }
};

quoteElement.classList.add("typing"); 
typeWriter();
