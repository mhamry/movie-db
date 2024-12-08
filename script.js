$(".search-button").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=ba09adb4&s=" + $(".input-keyword").val(),

    success: (result) => {
      const movies = result.Search;

      let cards = "";
      movies.forEach((m) => {
        cards += ` <div class="col md-4 my-5">
            <div class="card" style="width: 18rem">
              <img src="${m.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid ="${m.imdbID}">Show Detail</a>
              </div>
            </div>
          </div>`;
      });

      $(".movie-container").html(cards);

      //ketika tombol show detail di klik

      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=ba09adb4&i=" + $(this).data("imdbid"),

          success: (m) => {
            const movieDetail = `
            <div class="container-fluid"> 
              <div class="row">
                <div class="col-6 col-md-3">
                  <img src="${m.Poster}" class="img-fluid" />
                </div>
                <div class="col-6 col-md">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                    <li class="list-group-item"><strong>Director :</strong>${m.Director}</li>
                    <li class="list-group-item"><strong>Actors :</strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Writer :</strong>${m.Writer}</li>
                    <li class="list-group-item"><strong>Plot :</strong><br />${m.Plot}</li>
                  </ul>
                </div>
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
              
            </div>`;

            $(".modal-body").html(movieDetail);
          },
        });
      });
    },

    error: (e) => {
      console.log(e.responseText);
    },
  });
});

$.ajax({
  url: "http://www.omdbapi.com/?apikey=ba09adb4&s=spider man",

  success: (result) => {
    const movies = result.Search;

    let cards = "";
    movies.forEach((m) => {
      cards += ` <div class="col md-4 my-5">
          <div class="card" style="width: 18rem">
            <img src="${m.Poster}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${m.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
              <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid ="${m.imdbID}">Show Detail</a>
            </div>
          </div>
        </div>`;
    });

    $(".movie-container").html(cards);

    //ketika tombol show detail di klik

    $(".modal-detail-button").on("click", function () {
      $.ajax({
        url: "http://www.omdbapi.com/?apikey=ba09adb4&i=" + $(this).data("imdbid"),

        success: (m) => {
          const movieDetail = `
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" />
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Director :</strong>${m.Director}</li>
                  <li class="list-group-item"><strong>Actors :</strong>${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer :</strong>${m.writer}</li>
                  <li class="list-group-item"><strong>Plot :</strong><br />${m.Plot}</li>
                </ul>
              </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>

          </div>`;

          $(".modal-body").html(movieDetail);
        },
      });
    });
  },

  error: (e) => {
    console.log(e.responseText);
  },
});
