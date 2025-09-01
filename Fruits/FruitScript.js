 
const fruits = [
                    [1, "Amber", "amber.jpg", `This red, medium-sized fruit becomes fully ripe in mid-October. It is mostly grown in Shopian and Kulgam.`, `This red, medium-sized fruit becomes fully ripe in mid-October. It is mostly grown in Shopian and Kulgam.` ],

                    [2, "American Trel", "american-trel.png", `A small, rounded, very crispy and sweet fruit variety that ripens in mid-September.`, `A small, rounded, very crispy and sweet fruit variety that ripens in mid-September.` ],

                    [3, "Red Delicious", "red-delicious.png", `A very popular and widely cultivated variety of apple that ripens in mid-September. Its flesh is greenish white, grainy and juicy.`, `A very popular and widely cultivated variety of apple that ripens in mid-September. Its flesh is greenish white, grainy and juicy.` ],

                    [4, "Maharaej", "maharaja.png", `A large apple with red and green color. It tastes a bit sour but sweetens with time and is available by late October.`, `A large apple with red and green color. It tastes a bit sour but sweetens with time and is available by late October.` ],

                    [5, "Hazratbael", "hazal.png", `A quickly perishable variety that ripens in early July. It is the oldest variety of apples cultivated in the valley and is mostly consumed domestically`, `A quickly perishable variety that ripens in early July. It is the oldest variety of apples cultivated in the valley and is mostly consumed domestically` ],

                    [6, "Golden Delicious", "golden.png", `A variety with comparatively longer shelf life, it is crispy,
                    juicy and has thick greenish-white flesh which turns golden upon
                    ripening. It is available till January.`, `A variety with comparatively longer shelf life, it is crispy,
                    juicy and has thick greenish-white flesh which turns golden upon
                    ripening. It is available till January.` ]
               ]
let fruitCount = 0;
while(fruitCount < fruits.length){
     let item = fruits[fruitCount];
     
     let name = "";     
     let checkSpace = item[2].split('.'); 
     name = checkSpace[0]

     let info = `<a href="${name}-details.html"><div class="tile">
                    <img src="Fruits/${item[2]}" alt="photo of ${item[1]}" />
                    <h4>${item[1]}</h4>
                    <p>
                         ${item[3]}
                    </p>
               </div></a>`
     
     console.log(info);

     fruitCount++;
}