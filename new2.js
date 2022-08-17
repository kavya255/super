let list1=['carrot','tomato','cucumber','cucumber','potato'];
let list2=['orange','red','green','green','yellow'];
veg='tomato';
function vegetable( veg){
for(let i=0;i<list1.length;i++){
if(veg==list1[i])
return(list2[i]);
}
}
console.log(vegetable(veg))