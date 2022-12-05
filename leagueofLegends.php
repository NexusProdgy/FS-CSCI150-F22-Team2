<?php include('header.php');?>

    <div class="container features">
    <div class="row">


    <?php 
    
    require_once "vendor/autoload.php";

    $client = new MongoDB\Client(
        'mongodb+srv://website:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority');

    $db = $client->TestDatabase;

    $collection = $db->LeagueofLegends;

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