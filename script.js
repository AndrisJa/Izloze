const vardi=['Jana Krūms', 'Alfrēds Bērziņš', 'Renāte Kasparoviča', 'Laura Ose', 'Eduards Priede'];
const balvas=['Dators', 'Telefons', 'Mašīna', 'Lāpsta', 'Grābeklis'];
const naudaKopa=1000000;

let uzvaretajuSkaits=5;
let rindas=document.querySelector('.rindas'); //pievieno mainīgo
rindas.innerHTML ='';

for(let i=0;i<uzvaretajuSkaits;i++){
let rand=Math.random()*vardi.length;  //vārdu skaits mainīgs
rand=Math.floor(rand); //noapaļo uz leju


let uzvaretaju = vardi[rand]; //console.log vietā
let laimesti = balvas[rand];


         rindas.innerHTML +=` 
<tr>
    <td>${i + 1}</td>
    <td>${uzvaretaju}</td>
    <td>${laimesti}</td>
</tr>`

}