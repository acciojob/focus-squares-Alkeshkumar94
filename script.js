document.addEventListener("DOMContentLoaded",()=>{
	//your JS code here. If required.
 const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
      squares.forEach(s => {
        if (s !== square) {
          s.style.backgroundColor = '#6F4E37'; // Change color to Coffee
        }
      });
    });

    square.addEventListener('mouseleave', () => {
      squares.forEach(s => {
		  
        s.style.backgroundColor = '#E6E6FA'; // Reset color to Lavender
      });
    });
  });
});