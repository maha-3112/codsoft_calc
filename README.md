<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <title>Calculator</title>
    <style>
      body {
          background-color: rgb(45, 43, 43);
      }
      h1 {
          text-align: center;
          color: white;
      }
      .container {
          height: 500px;
          width:450px;
          background-image: linear-gradient(to bottom, grey, white, grey);
          border-style: solid;
          border-width: 3px;
          border-color: black;
          border-radius: 4%;
          margin: 5% 0% 0% 35%;
          text-align: center;
      }
      #get {
          height: 40px;
          width: 400px;
          margin: 6% 0 7% -1%;
          padding: 2% 2% 2% 2%;
          border-radius: 15px;
          font-size: x-large;
          background-color: rgb(176, 248, 224);
          color: black;
      }
      button {
          height:60px;
          width: 60px;
          margin: 0 18px 10px;
          background-color: white;
          text-align: center;
          border-radius: 40px;
          font-size: large;
          box-shadow: 0px 5px 40px grey;
      }
      button:hover {
          background-color: rgb(100, 92, 92);
          color: white;
          cursor: pointer;
          box-shadow: 0 5px 40px white;
      }
      .ac {
          background-color: rgb(187, 75, 94);
          color: white;
      }
      .del {
          background-color: rgb(203, 20, 20);
          color: white;
      }
    </style>
</head>
<body>
    <h1>CALCULATOR</h1>
    <section class="container">
        <div class="row">
            <input id="get" type="text" placeholder="0"><br>
        </div>
        <div class="row">
            <button class="ac">AC</button>
            <button>/</button>
            <button>rt</button>
            <button class="del"><i class="material-icons">backspace</i></button>
        </div>
        <div class="row">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>X</button>
        </div>
        <div class="row">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
        </div>
        <div class="row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
        </div>
        <div class="row">
            <button>0</button>
            <button>.</button>
            <button>%</button>
            <button>=</button>
        </div>
    </section>
    <script>
         let input = document.getElementById('get');
         let buttons = document.querySelectorAll('button');
         buttons.forEach(button => {
             let val = button.innerText;
             button.addEventListener('click', () => {
                     operations(val);
                 })
         });
         function operations(val) {
            if (val==="AC") {
                input.value = '';
            } else if (val==="backspace") {
                input.value = input.value.slice(0,-1);
            } else if (val==="X") {
                input.value += "*";
            } else if (val==="rt") {
                input.value = Math.sqrt(input.value);
            } else if (val==="%") {
                input.value = input.value/100;
            } else if (val==="=") {
                input.value = eval(input.value);
            } else {
                input.value +=val;
            }
         };
    </script>
</body>
</html>





