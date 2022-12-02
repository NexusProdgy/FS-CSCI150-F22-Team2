<?php include('header.php');?>

<div class="carousel-item">

        <div class="card mb-3">

            <div class="row g-0">

              <div class="col-md-6">

              <img src="https://blog.gfuel.com/hubfs/xqc-felix-lengyel.jpg" alt="Simply Easy Learning" width="285" height="275">
                      </div>

                      <div class="col-md-6">

                        <div class="card-body">

                          <h5 class="card-title">Limelight HOF</h5>
                          <p class="card-text">XQC</p>
                          <p class="card-text"><small class="text-muted">Limelight increased my by views 50% ~XQC</small></p>
                          <a href="#" class="btn btn-primary">Go to channel</a>

                </div>

              </div>

            </div>

        </div>

    </div>

    <div class="carousel-item">

        <div class="card mb-3">

            <div class="row g-0">

              <div class="col-md-6">

              <img src="https://blog.gfuel.com/hubfs/xqc-felix-lengyel.jpg" alt="Simply Easy Learning" width="285" height="275">
                      </div>

                      <div class="col-md-6">

                        <div class="card-body">

                          <h5 class="card-title">Limelight HOF</h5>
                          <p class="card-text">XQC</p>
                          <p class="card-text"><small class="text-muted">Limelight increased my by views 50% ~XQC</small></p>
                          <a href="#" class="btn btn-primary">Go to channel</a>

                </div>

              </div>

            </div>

        </div>

    </div>

</div>

<a class="carousel-control-prev" href="#carouselControls" role="button" data-bs-slide="prev"> 
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
</a>

<a class="carousel-control-next" href="#carouselControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
</a>

</div>

<div class="container features">
<div class="row">


<?php 
  
  require_once "vendor/autoload.php";

  $client = new MongoDB\Client(
    'mongodb+srv://website:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority');

  $db = $client->TestDatabase;

  $collection = $db->TestCollection;

  $cursor = $collection->find();
    
  foreach($cursor as $document) {
    echo "<div class='col-lg-4 col-md-4 col-sm-12'>";
      echo "<div class='card'>";
        echo "<div class='card-body'>";
          echo "<h5 class='card-title'>" . $document["title"] . "</h5>";
          echo "<p class='card-text'>" . $document["category"] ."</p>";
          echo "<a href='" . $document["URL"] . "' target= '_blank' class='btn btn-primary'>" . $document["name"] . " - Channel" . "</a>";
        echo "</div>"; 
      echo "</div>"; 
    echo "</div>";
  }

?>

</div>

<?php include('form.php');?>

<?php include('footer.php');?>