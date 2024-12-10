let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
   count += 1
  countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

    function myFunction() {
        
        document.getElementById("demo").innerHTML = "next";

    
   
    }
  //  HTML

//<!DOCTYPE html>
//<html>
//<head>
  //  <title>Display Text on Button Click</title>
//    <script type="text/javascript">
  //      function displayText() {
    //        document.getElementById("text").style.display = "block";
      //  }
//    </script>
//</head>
//<body>/
    <button onclick="displayText()">Click me</button>
    <p id="text" style="display:none;">Hello, this is the text displayed after clicking the button!</p>
//</body>
//</html>