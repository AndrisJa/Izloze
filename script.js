const vardi=['Jana Krūms', 'Alfrēds Bērziņš', 'Renāte Kasparoviča', 'Laura Ose', 'Eduards Priede'];
const balvas=['Dators', 'Telefons', 'Mašīna', 'Lāpsta', 'Grābeklis'];
const naudaKopa=1000000;
let uzvaretajuSkaits=5;
Math.random=Math.random()*5;
rand=Math.random()*vardi.length;  //vārdu skaits mainīgs
console.log(vardi[rand]);