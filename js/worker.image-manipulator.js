importScripts('./helpers.image-manipulator.js');

self.originalImageData = false;
self.imageDimensions = {
    width: 0,
    height: 0
}

self.addEventListener('message', function (e) {
    const data = e.data;

    if (data.blurRadius && data.dimensions && data.imageData) {
        const blurRadius = data.blurRadius;
        const height = data.dimensions.height;
        const originalData = data.imageData;
        const width = data.dimensions.width;


        const grayscalePixelData = createGrayscaleData(originalData, width, height);
        const grayscaleImageData = new ImageData(new Uint8ClampedArray(grayscalePixelData), width, height);
        const blurredPixelData = createGaussianData(grayscaleImageData, width, height, blurRadius);
        const blurredImageData = new ImageData(new Uint8ClampedArray(blurredPixelData.data), width, height);


        self.postMessage({
            status: 'success',
            value: blurredImageData
        });

    } else {
        self.postMessage({
            status: 'error',
            value: false
        });
    }


});

function createGaussianData(data, width, height, blurRadius) {
    return gaussianBlur(data, width, height, blurRadius);
}

function createGrayscaleData(data, width, height) {
    return toPixels(convertToGrayscale(data, width, height));
}