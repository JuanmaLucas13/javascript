const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},
                      {name: "Salmon", isVegan: false}, 
                      {name: "Tofu", isVegan: true}, 
                      {name: "Burger", isVegan: false}, 
                      {name: "Rice", isVegan: true},
                      {name: "Pasta", isVegan: true} ];

for (let index = 0; index < foodSchedule.length; index++) {

    if (foodSchedule[index].isVegan == false)    
     {
        foodSchedule[index].isVegan = true;
        foodSchedule[index].name = fruits[0];
        fruits.splice(0,1);
     }
}                    
console.log(foodSchedule);
