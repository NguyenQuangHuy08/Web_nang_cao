var index = 1;

changeImage = function () {

    var imgs = ["/Ogani/assets/sr-2.jpg", "/Ogani/assets/sr-3.jpg", "/Ogani/assets/blog-3.jpg", "/Ogani/assets/blog-4.jpg"];

    document.getElementById('img').src = imgs[index];

    index++;

    if (index == 4) {

        index = 0;

    }

}
setInterval(changeImage, 1000)