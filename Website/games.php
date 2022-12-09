<?php

    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $dbname = "TestAgainDB"; 

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if(!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT stream_id, stream_name, stream_game FROM Streams_Table";
    $result = mysqli_query($conn, $sql); 

    if(mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            echo "stream_id: " . $row["stream_id"]. " - Twitch Channel: " . $row["stream_name"]. " " . $row["stream_game"]. "<br>";
        }
    }
    else {
        echo "0 results"; 
    }

    mysqli_clos($conn);

?>


<!DOCTYPE html>
<html>
<style>
    td,th {
        border: 1px solid black;
        padding: 10px;
        margin: 5px;
        text-align: center;
    }
</style>
  
<body>
    <table>
        <thead>
            <tr>
                <th>Twitch Channel</th>
                <th>Game</th>
            </tr>
        </thead>
        <tbody>
            <?php
               if(!empty($row))
               foreach($row as $rows)
              { 
            ?>
            <tr>
  
                <td><?php echo $rows['stream_name']; ?></td>
                <td><?php echo $rows['stream_game']; ?></td>
  
            </tr>
            <?php } ?>
        </tbody>
    </table>
</body>
</html>
  
