<!DOCTYPE html>
<html lang="en">
<head>
	<title>Lime Light</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" >
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
    <script src="js/jquery.js"></script>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

</head>
<body>

    <nav class="navbar navbar-expand-md">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#main-navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="main-navigation">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div id="browse-menu" class="dropdown">
                            <a id="browse-b" class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Browse
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="games.html">Games</a></li>
                            <li><a class="dropdown-item" href="#">IRL</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadModal" href="#">Upload</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-inner">

    <div class="carousel-item active">

        <div class="card mb-3">

            <div class="row g-0">

              <div class="col-md-6">

                <iframe src="https://www.youtube.com/embed/pWahNIMRxR0" title="No copyright video cinematic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div class="col-md-6">

                <div class="card-body">

                  <h5 class="card-title">Twitch Channel Name</h5>
                  <p class="card-text">Description/Games</p>
                  <p class="card-text"><small class="text-muted">Viewer Count?</small></p>
                  <a href="#" class="btn btn-primary">Go to channel</a>

                </div>

              </div>

            </div>

        </div>

    </div>

