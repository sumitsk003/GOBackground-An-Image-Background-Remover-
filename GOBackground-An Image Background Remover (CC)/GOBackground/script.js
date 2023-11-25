let imageURL;

function submitHandler(){
    console.log("click");
    const fileInput = document.getElementById('fileInput');
    console.log(fileInput.files);
    const image = fileInput.files[0];

    // Multipart file
    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = 'PASTE_YOUR_API_KEY';

    fetch('https://api.remove.bg/v1.0/removebg',{
        method:'POST',
        headers: {
            'X-Api-Key': "yhY3mDiCJ589LBepDK1HGMmV"
        },
        body: formData
    })
    .then(function(reponse){
        return reponse.blob()
    })
    .then(function(blob){
        console.log(blob);
        const url = URL.createObjectURL(blob);
        imageURL = url;
        const img = document.createElement('img');
        img.src = url;
        // document.body.appendChild(img);
        // URL.revokeObjectURL(url);
    })
    .catch();
}

function downloadFile(){
    var anchorElement = document.createElement('a');
    anchorElement.href = imageURL;
    anchorElement.download = 'naciasv.png';
    document.body.appendChild(anchorElement);

    anchorElement.click();

    document.body.removeChild(anchorElement);
    const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
}
