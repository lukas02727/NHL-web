const input = document.querySelector('#searchbar');
const sortList = list => [...list].sort((a, b) => {
    const A = a.textContent, B = b.textContent;
    return (A < B) ? -1 : (A > B) ? 1 : 0;
});
const box = document.querySelector("#list")
window.addEventListener("load", function() {
    const list = box.querySelectorAll(".animals");
    box.append(...sortList(list))
})


input.onkeyup = () => {
    search_team();
}



function search_team() {
    let input = document.getElementById('searchbar').value
    let x = document.querySelectorAll('.animals');
      
    if(input.length === 0){
        x.forEach((xs) => {
            xs.style.display="none";
        })
    }
        else{
           input=input.toLowerCase();


           x.forEach((xs) => {
            if(!xs.innerHTML.toLowerCase().includes(input)) {
                xs.style.display="none";
            }
            else {
                xs.style.display="block";
            }
           })
        }
    
}
const players = document.getElementsByClassName("player");
const PlayerNumber = document.getElementsByClassName("number_of_player_index");
const PlayerName = document.getElementsByClassName("name_of_player_index");
const PlayerLogo = document.getElementsByClassName("logo_of_player_team_index");

const RandomHole = (minimum, maximum) => {
    const myHole = Math.floor(Math.random() * (maximum - minimum));
    return myHole;
}

let a;

const Hole_a = () => {
    
    if (a !== undefined) {
        players[a].style.display = "none";
        PlayerNumber[a].style.display = "none";
        PlayerName[a].style.display = "none";
        PlayerLogo[a].style.display = "none";
         
    }
    a = RandomHole(0, 8);
    players[a].style.display = "block";
    PlayerNumber[a].style.display = "block";
    PlayerName[a].style.display = "block";
    PlayerLogo[a].style.display = "block";
    
    
    


};
let In;
In = setInterval(() => {
    Hole_a();
   
}, 2500);
