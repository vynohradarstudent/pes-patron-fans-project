$(document).ready(async function () {
    let variable = window.location.search
    let game = await getGameById(variable.split("=")[1])

    $(".game-page-content").append(
        `
        <div class="game-description">
        <h1> ${game.title} </h1>
        <p class="pre-desc">  ${game.releaseDate}  </p>
        <p> ${game.description} </p>
        <p class="rating"> Рейтинг: ${game.averageRating}/5 </p>
        <a href="https://www.youtube.com/embed/o4789Ba2HYo?si=XtDIfk_FTNgJhZP3"> Дивитися трейлер </a>
        <div class="buy-cont">
            <button> Придбати </button>
            <p> ${game.price}$ </p>
        </div>
    </div>
    <div class="carousel-cont">
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-inner">
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>

            </button>
        </div>
    </div>
        `
    )

    $(".carousel-inner").append(`
             <div class="carousel-item active">
                    <img src="${game.titleImageUrl}" class="d-block w-100" alt="...">
                </div>
    `)

    game.screenshots.forEach(e => {
        $(".carousel-inner").append( `
             <div class="carousel-item ">
                    <img src="${e}" class="d-block w-100" alt="...">
                </div>
           `)
    })
})


function addgame() {
    games.append(games.id + games.title + games.price + games.titleImageUrl + games.releaseDate);
}


