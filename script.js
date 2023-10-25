function toggleImage(imageId) {
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById(imageId).style.display = "block";
}

document.getElementById("button1").addEventListener("click", function () {
    document.getElementById("image-container").style.display = "block";
    toggleImage("image1");
});

document.getElementById("button2").addEventListener("click", function () {
    document.getElementById("image-container").style.display = "block";
    toggleImage("image2");
});

document.getElementById("button3").addEventListener("click", function () {
    document.getElementById("image-container").style.display = "block";
    toggleImage("image3");
});

// 获取宽度和高度输入字段
const widthControl = document.getElementById("width-control");
const heightControl = document.getElementById("height-control");

// 获取所有图像元素
const images = document.querySelectorAll("#image-container img");

// 添加事件监听器以更改图像大小
widthControl.addEventListener("input", function () {
    const widthValue = this.value + "px";
    images.forEach(function (image) {
        image.style.width = widthValue;
    });
});

heightControl.addEventListener("input", function () {
    const heightValue = this.value + "px";
    images.forEach(function (image) {
        image.style.height = heightValue;
    });
});

// 获取下载按钮
const downloadButton = document.getElementById("download-button");

// 添加点击事件监听器以生成并下载 GIF 图像
downloadButton.addEventListener("click", function () {
    const gif = new GIF({
        workers: 2,
        quality: 10,
    });

    // 获取用户输入的宽度和高度
    const widthValue = parseInt(widthControl.value);
    const heightValue = parseInt(heightControl.value);

    // 获取所有图像元素
    const images = document.querySelectorAll("#image-container img");

    // 添加每一帧图像到 GIF
    images.forEach(function (image) {
        gif.addFrame(image, { copy: true, delay: 200 }); // 200毫秒的延迟
    });

    // 完成 GIF 并生成数据 URL
    gif.on("finished", function (blob) {
        const dataURL = URL.createObjectURL(blob);

    // 创建一个下载链接
        const downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        downloadLink.download = "modified_image.gif"; // 指定文件名为 GIF 格式
        downloadLink.click();
    });

    gif.render();
});
