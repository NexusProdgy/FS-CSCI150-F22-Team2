<div class="modal fade" id="uploadModal" data-bs-target="#uploadModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">

            <h5 class="modal-title" id="uploadModalLabel">Upload Twitch Link</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                <div class="modal-body">

                    <div class="form-outline mb-4">
                        <form onsubmit="alert('Thank you! Your link has been submitted');" method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
                        <input type="text" name="fname" class="form-control" placeholder="TwitchURL" maxlength="40">
                    </div>
                </div>
            <div class="modal-footer">
                <input type="submit"  value="submit" class="btn btn-secondary">
                </form>
        </div>
    </div>
</div>

<?php
//mongodb connection script
if ($_SERVER["REQUEST_METHOD"] == "POST") { //check if it is server get request or post request

  require_once "vendor/autoload.php";

    $name=$_POST['fname']; //get the input value of the url inputted
    if(str_contains($name,'twitch.tv')){ //if it has twitch.tv open mongodb and upload

  $client = new MongoDB\Client(
    'mongodb+srv://website:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority');

  $db = $client->TestDatabase;

  $collection = $db->URLCollection;

  //$itemInfo = ['twitchURL'];

  

  $insertOneResult = $collection->insertOne([
      'URL' => $name
  ]);
  echo '<script> alert("'. $name .' was found")</script>';
}
else{
    echo '<script> alert("twitch.tv was not found")</script>';
}
}
?>

<script>
function checkstring()
{
var urlvale=document.getElementById("fname").value;
var errchange=document.getElementById("error");
    let data=urlvale
    let result=data.includes("twitch.tv")
    if(result==false)
    {
    errchange.innerText="Please submit a twitch.tv link"
    errchange.style.color="red"
    }
    else
    {
    errchange.innerText="thank you, your link has been accepted"
    errchange.style.color="green"
    }
    return alert('sucess')

}
</script>
</div>