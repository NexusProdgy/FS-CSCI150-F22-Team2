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

    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $dbname = "TestAgainDB"; 

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if(!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT stream_id, stream_name, stream_game, stream_url FROM Streams_Table ORDER BY rand()";
    $result = mysqli_query($conn, $sql); 

    if(mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            

            echo '<div class="col-lg-4 col-md-4 col-sm-12">';
        
                echo '<div class="card">';
        
                    echo '<iframe src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        
                    echo '<div class="card-body">';
        
                      echo '<h5 class="card-title">'.$row["stream_name"].'</h5>';
                      echo '<p class="card-text">'.$row["stream_game"].'</p>';
                      echo '<a href="'.$row["stream_url"].'" class="btn btn-primary">Go to channel</a>';

                    echo '</div>';
                    
                  echo '</div>';
        
            echo '</div>';
        
        }
    }
    else {
        echo "0 results"; 
    }

?>
</div>
<div class="modal fade" id="uploadModal" data-bs-target="#uploadModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">

<div class="modal-dialog">

    <div class="modal-content">

        <div class="modal-header">

            <h5 class="modal-title" id="uploadModalLabel">Upload Twitch Link</h5>

            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

        </div>

        <div class="modal-body">

            <div class="form-outline mb-4">

                <input type="url"  id="urlForm" class="form-control" placeholder="Twitch URL">

            </div>

            <!--<form action="?" method="POST">
                <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                <br/>
                <input type="submit" value="Submit">
              </form>-->

        </div>

        <div class="modal-footer">

            <button type="button" class="btn btn-secondary" onclick="saveFile()">Submit</button>

            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

        </div>

    </div>

</div>

</div>


<?php include('footer.php');?>