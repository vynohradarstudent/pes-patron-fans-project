$(document).ready(async function () {

    let games = await getAllGames()

    games.forEach(e => {

        $(".games-list").append(`
      <div class="game-card">
                <img src="${e.titleImageUrl}">
                <h2> ${e.title} </h2>
                <p> ${e.price}$ </p>
                <a href="/pes-patron-fans-project/pages/game-page.html?id=${e.id}"> <button> Придбати </button> </a>
      </div>
    `)
    })

    games =  games.sort((e1, e2, e3) => e1.averageRating - e2.averageRating - e3.averageRating)

    console.log(games)
});

function addgame() {
    games.append(games.id + games.title + games.price + games.titleImageUrl);
}

