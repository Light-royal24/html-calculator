function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    }
    
    function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;
    let result;
    
    try {
        // Convert trigonometric function inputs from degrees to radians
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
    
        result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
    
    }
    
    function squareRoot() {
    let display = document.getElementById("display");
    display.value += "sqrt(";
    }
    
    function base10Log() {
    let display = document.getElementById("display");
    display.value += "log(";
    }
    
    function pi() {
    let display = document.getElementById("display");
    display.value += "pi";
    }
    
    function e() {
    let display = document.getElementById("display");
    display.value += "e";
    }
    
    function power() {
    let display = document.getElementById("display");
    display.value += "^(";
    }
    

   const navBar = document.querySelector(".navBar")

   navBar.addEventListener('click', (e) => {
    document.querySelector(".others").classList.toggle('active')
   })

   function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

