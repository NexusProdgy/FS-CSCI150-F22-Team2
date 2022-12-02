<?php 
  
  require_once "vendor/autoload.php";

  $client = new MongoDB\Client(
    'mongodb+srv://website:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority');

  $db = $client->TestDatabase;

  $collection = $db->URLCollection;

  //$itemInfo = ['twitchURL'];

  

  $insertOneResult = $collection->insertOne([
      'URL' => ""
  ]);



?>

<div class="modal fade" id="uploadModal" data-bs-target="#uploadModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">

<div class="modal-dialog">

    <div class="modal-content">

        <div class="modal-header">

            <h5 class="modal-title" id="uploadModalLabel">Upload Twitch Link</h5>

            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

        </div>

        <div class="modal-body">

            <div class="form-outline mb-4">

                <input type="url" required id="urlForm" class="form-control" name="twitchURL" placeholder="Twitch URL">

            </div>

            <!--<form action="?" method="POST">
                <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                <br/>
                <input type="submit" value="Submit">
              </form>-->

        </div>

        <div class="modal-footer">

            <button type="button" class="btn btn-secondary">Submit</button>

            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

        </div>

    </div>

</div>

</div>