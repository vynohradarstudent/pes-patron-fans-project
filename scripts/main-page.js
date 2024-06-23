$(document).ready(async function () {

    let games = await getAllGames()


    games.slice(0,1).forEach(game =>{
        $(".carousel-inner").append(`
              <div class="carousel-item active">
                        <img src="${game.titleImageUrl}" class="d-block w-100" alt="...">
              </div>
        `)
    })
    games.slice(1,3).forEach(game =>{
        $(".carousel-inner").append(`
              <div class="carousel-item">
                        <img src="${game.titleImageUrl}" class="d-block w-100" alt="...">
              </div>
        `)
    })

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

