// 实现放大镜功能
window.addEventListener('load', function () {
    var goods_Spic = document.querySelector('.goods_Spic');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    goods_Spic.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    goods_Spic.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    goods_Spic.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskx = x - mask.offsetWidth / 2;
        var masky = y - mask.offsetHeight / 2;
        if (maskx <= 0) {
            maskx = 0
        } else if (maskx >= goods_Spic.offsetWidth - mask.offsetWidth) {
            maskx = goods_Spic.offsetWidth - mask.offsetWidth;

        }
        if (masky <= 0) {
            masky = 0
        } else if (masky >= goods_Spic.offsetHeight - mask.offsetHeight) {
            masky = goods_Spic.offsetHeight - mask.offsetHeight;

        }
        mask.style.left = maskx + 'px';
        mask.style.top = masky + 'px';
        var maskmax = goods_Spic.offsetWidth - mask.offsetWidth;
        var bigphoto = document.querySelector('.bigphoto');
        var bigmax = bigphoto.offsetWidth - big.offsetWidth;
        var bigx = maskx * bigmax / maskmax;
        var bigy = masky * bigmax / maskmax;
        bigphoto.style.left = -bigx + 'px';
        bigphoto.style.top = -bigy + 'px';
    })
})

