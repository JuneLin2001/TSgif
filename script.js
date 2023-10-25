document.getElementById("button1").addEventListener("click", function () {
    document.getElementById("image-container").style.display = "block";
    document.getElementById("image1").style.display = "block";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
});

document.getElementById("button2").addEventListener("click", function () {
    document.getElementById("image-container").style.display = "block";
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "block";
    document.getElementById("image3").style.display = "none";
});

document.getElementById("button3").addEventListener("click", function () {
    document.getElementById("image-container").style.display = "block";
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "block";
});


function previewImage() {
    const imageInput = document.getElementById("imageInput");
    const imagePreview = document.getElementById("imagePreview");
    const previewImage = document.getElementById("previewImage");

    if (imageInput.files.length > 0) {
        const imageFile = imageInput.files[0];
        const imageURL = URL.createObjectURL(imageFile);

        previewImage.src = imageURL;
        imagePreview.style.display = "block";
    } else {
        imagePreview.style.display = "none";
    }
}
