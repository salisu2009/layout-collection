


const fruits = [ 
    [1, "Amber","amber.jpg", `my name is salisu abubakar, i am going to university,<br> 
        i am studying civil or software engineering<br>
        i love operating computer i love studying my books,<br>
        i did my waec in ss2, i did my jamb to in ss2<br>`],

    [2, "American Trel","american-trel.png", `my name is salisu abubakar, i am going to university,<br> 
        i am studying civil or software engineering<br>
        i love operating computer i love studying my books,<br>
        i did my waec in ss2, i did my jamb to in ss2<br>`],

    [3, "Red Delicious", "red-delicious.png", `my name is salisu abubakar, i am going to university,<br> 
        i am studying civil or software engineering<br>
        i love operating computer i love studying my books,<br>
        i did my waec in ss2, i did my jamb to in ss2<br>`],

    [4, "Maharaja","maharaja.png", `my name is salisu abubakar, i am going to university,<br> 
        i am studying civil or software engineering<br>
        i love operating computer i love studying my books,<br>
        i did my waec in ss2, i did my jamb to in ss2<br>`],

    [5, "Hazal","hazal.png", `my name is salisu abubakar, i am going to university,<br> 
               i am studying civil or software engineering<br>
               i love operating computer i love studying my books,<br>
               i did my waec in ss2, i did my jamb to in ss2<br>`],

    [6, "Golden","golden.png", `my name is salisu abubakar, i am going to university,<br> 
        i am studying civil or software engineering<br>
        i love operating computer i love studying my books,<br>
        i did my waec in ss2, i did my jamb to in ss2<br>`]
]
// console.log(fruits[0]);

// let fruitTitle = document.getElementById("Fresh")

// document.getElementById('img-id').src = "Fruits/"+ fruits[4][2]

// fruitTitle.innerHTML = fruits[1][1]

let i = "";

for(let x = 0; x < fruits.length;x++){
i+=`<div class="main" id="bobby">
             <img src="Fruits/${fruits[x][2]}" id="img-id" width="300px"/>
             <h4 id="Fresh">
                 ${fruits[x][1]}
                </h4>
             <p>
             ${fruits[x][3]}
             </p>
           </div>`
}

 document.getElementById("flexible").innerHTML = i;
console.log = fruits.length

let arr = [1,2,3,4,["boy","girl","man","woman"]];
        //for(let i=0; i<arr[4].length; i+=1){
           // console.log(`${arr[i]} ${arr[4][i]}`) ;
        
