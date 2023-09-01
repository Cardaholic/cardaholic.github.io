function convertToGrayscale(imageData) {
    const grayscaleImageData = [];
    for (let i = 0; i < imageData.length; i += 4) {
        var grayValue = .299 * imageData[i + 2] + .587 * imageData[i + 1] + .114 * imageData[i];
        grayscaleImageData.push(grayValue);
    }
    return grayscaleImageData;
}

function gaussianBlur(imageData, width, height, radius) {
    var blur = radius;
    var blurRange = blur * 3;
    var gaussparam = new Array;
    for (var i = 0; i <= blurRange; i++) {
        gaussparam[i] = Math.exp(-i * i / (2 * blur * blur));
    }

    var newData, newImageData;
    // blur y
    newData = switchXY(width, height, imageData.data, true);
    newImageData = blurX(width, height, newData);
    // blur x
    newData = switchXY(width, height, newImageData.data, false);
    newImageData = blurX(width, height, newData);
    // draw
    return newImageData;

    function blurX(width, height, imageData) {
        /*
        var canvasDraw = document.createElement('canvas');
        canvasDraw.width = width;
        canvasDraw.height = height;
        canvasDraw.crossOrigin = 'anonymous';
        var ctxDraw = canvasDraw.getContext('2d');
        var imageDataDraw = ctxDraw.getImageData(0,0,width,height);
        var dataDraw = imageDataDraw.data;
       */

        let imageDataDraw = new ImageData(new Uint8ClampedArray(imageData), width, height);
        let dataDraw = imageDataDraw.data;

        let ox, oy, gauss, count, R, G, B, A;
        for (let i = 0, len = width * height; i < len; i++) {
            gauss = count = R = G = B = A = 0;
            ox = i % width;
            oy = (i / width) | 0; // = Math.floor(i / width);          
            for (let x = -1 * blurRange; x <= blurRange; x++) {
                var tx = ox + x;
                if ((0 <= tx) && (tx < width)) {
                    gauss = gaussparam[x < 0 ? -x : x]; // = [Math.abs(x)]
                    var k = i + x;
                    R += imageData[k * 4 + 0] * gauss;
                    G += imageData[k * 4 + 1] * gauss;
                    B += imageData[k * 4 + 2] * gauss;
                    A += imageData[k * 4 + 3] * gauss;
                    count += gauss;
                }
            }
            dataDraw[i * 4 + 0] = (R / count) | 0;
            dataDraw[i * 4 + 1] = (G / count) | 0;
            dataDraw[i * 4 + 2] = (B / count) | 0;
            dataDraw[i * 4 + 3] = (A / count) | 0;
        }
        return imageDataDraw
    }

    function switchXY(width, height, data, clockwiseFlg) {
        var newData = new Array;
        if (clockwiseFlg) {
            for (var i = 0, len = width * height; i < len; i++) {
                var k = (i % width) * height + ((i / width) | 0);
                newData[k * 4] = data[i * 4];
                newData[k * 4 + 1] = data[i * 4 + 1];
                newData[k * 4 + 2] = data[i * 4 + 2];
                newData[k * 4 + 3] = data[i * 4 + 3];
            }
        } else {
            for (var i = 0, len = width * height; i < len; i++) {
                var k = (i % width) * height + ((i / width) | 0);
                newData[i * 4] = data[k * 4];
                newData[i * 4 + 1] = data[k * 4 + 1];
                newData[i * 4 + 2] = data[k * 4 + 2];
                newData[i * 4 + 3] = data[k * 4 + 3];
            }
        }
        return newData;
    }


}

function toNormalized(bytes) {
    const normalized = [];
    for (let i = 0; i < bytes.length; i += 4) {
        normalized.push(bytes[i] / 255);
    }
    return normalized;
}

function toPixels(values) {
    const expanded = [];
    values.forEach(x => {
        expanded.push(x);
        expanded.push(x);
        expanded.push(x);
        expanded.push(255);
    });
    return expanded;
}