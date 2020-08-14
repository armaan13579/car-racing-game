class Player {
    constructor(){
 
    } 
 getCount(){
 var PlayercountRef=database.ref('playerCount');
 PlayercountRef.on("value",function(data){
     gameState = data.val();
 })
    }
    updateCount(count){
        database.ref('/').update({
           playerCount:count
        })
    }
update(name){
    var playerIndex = "player"+playerCount;
    database.ref(playerIndex).set({
        name:name
    })
}
 }
 