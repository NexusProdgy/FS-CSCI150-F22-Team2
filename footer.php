</body>

<script>

  let saveFile = () => {

    const url = document.getElementById('urlForm');

    let data = 

      '\r URL: ' + url.value + '\r\n';


    const textToBLOB = new Blob([data], {type: 'text/plain' });
    const sFileName = 'urlData.txt'; 

    let newLink = document.createElement("a"); 
    newLink.download = sFileName;

    if(window.webkitURL != null) {

      newLink.href = window.webkitURL.createObjectURL(textToBLOB);

    }

    else {

      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none"; 
      document.body.appendChild(newLink);

    }

    newLink.click();

  }

</script>

</html>