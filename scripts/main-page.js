$(document).ready(async function () {

    let games = await getAllGames()

games.forEach(e => {

    $(".games-list").append(`
      <div class="game-card">
                <img src="${e.titleImageUrl}">
                <h2> ${e.title} </h2>
                <p> ${e.price} </p>
                <button> Придбати </button>
      </div>
    `)
})




});
function addgame(){
games.append(games.id + games.title + games.price + games.titleImageUrl );
}

