const edgeThreshold             = 40;
let pixelsRequiredForEdge       = 100;
const edgeMinDistanceFromSide   = 12;
let edgeBorderMin               = 20; // How many pixels from the outside edge we should start looking for an inside edge
const edgePadMin                = 12; // How many pixels from an edge we will look for a stronger edge

self.addEventListener( 'message', function ( e ) {
    const blurredData = e.data.blurredData;

    const edges = highpass( blurredData );

    self.postMessage ( {
        status  : 'success',
        edges   : edges
    } );
} );

const highpass = function (pixels) {

    const allEdges = {
        left    : false,
        right   : false,
        top     : false,
        bottom  : false
    }

    const xOperator = [ 
                        1, 0, -1, 
                        2, 0, -2, 
                        1, 0, -1
                    ];
    const yOperator = [ 
                        -1, -2, -1, 
                        0, 0, 0, 
                        1, 2, 1 
                    ];
    
    let side = 3;
    let src = pixels.data;
    let canvasWidth = pixels.width;
    let canvasHeight = pixels.height;
    
    let edgeDictionary = {
        x: {},
        y: {}
    };

    for (let y = 0; y < canvasHeight; y++) {
        for (let x = 0; x < canvasWidth; x++) {
            let dstOff = (y * canvasWidth + x) * 4,
            sumRedsX = 0,
            sumGreensX = 0,
            sumBluesX = 0,
            sumRedsY = 0,
            sumGreensY = 0,
            sumBluesY = 0

            for (let kernelY = 0; kernelY < side; kernelY++) {
                for (let kernelX = 0; kernelX < side; kernelX++) {
                    let currentKernelY = y + kernelY ,
                    currentKernelX = x + kernelX;

                    if ( currentKernelY >= 0 &&
                    currentKernelY < canvasHeight &&
                    currentKernelX >= 0 &&
                    currentKernelX < canvasWidth ) {
                        let offset = (currentKernelY * canvasWidth + currentKernelX) * 4;

                        // Vertical
                        const weightX = xOperator[kernelY * side + kernelX];
                        sumRedsX += src[offset] * weightX;
                        sumGreensX += src[offset + 1] * weightX;
                        sumBluesX += src[offset + 2] * weightX;

                        // Horizontal
                        const weightY = yOperator[kernelY * side + kernelX];
                        sumRedsY += src[offset] * weightY;
                        sumGreensY += src[offset + 1] * weightY;
                        sumBluesY += src[offset + 2] * weightY;
                    }
                }
            }

            const sumAllX = Math.sqrt(Math.pow(sumRedsX, 2) + Math.pow(sumGreensX, 2) + Math.pow(sumBluesX, 2));
            const sumAllY = Math.sqrt(Math.pow(sumRedsY, 2) + Math.pow(sumGreensY, 2) + Math.pow(sumBluesY, 2));

            if (sumAllX > edgeThreshold 
            && x > edgeMinDistanceFromSide
            && y > edgeMinDistanceFromSide
            && x < canvasWidth - edgeMinDistanceFromSide
            && y < canvasHeight - edgeMinDistanceFromSide ) {
                // This is a pixel that meets the requirements to be part of a vertical edge
                if ( edgeDictionary.x[ x ] ) {
                    edgeDictionary.x[ x ]++;
                } else {
                    edgeDictionary.x[ x ] = 1;
                }
            } 

            if (sumAllY > edgeThreshold 
            && x > edgeMinDistanceFromSide
            && y > edgeMinDistanceFromSide
            && x < canvasWidth - edgeMinDistanceFromSide
            && y < canvasHeight - edgeMinDistanceFromSide ) {
                // This is a pixel that meets the requirements to be part of a horizontal edge
                if ( edgeDictionary.y[ y ] ) {
                    edgeDictionary.y[ y ]++;
                } else {
                    edgeDictionary.y[ y ] = 1;
                }
            } 
        }
    }

    allEdges.left   = findEdgeAndBorder( edgeDictionary.x, edgeBorderMin, edgePadMin, pixelsRequiredForEdge, true );
    allEdges.right  = findEdgeAndBorder( edgeDictionary.x, edgeBorderMin, edgePadMin, pixelsRequiredForEdge, false );
    allEdges.top    = findEdgeAndBorder( edgeDictionary.y, edgeBorderMin, edgePadMin, pixelsRequiredForEdge, true );
    allEdges.bottom = findEdgeAndBorder( edgeDictionary.y, edgeBorderMin, edgePadMin, pixelsRequiredForEdge, false );

     // Returning the object with all of the edge data
    return allEdges;
}

function findEdgeAndBorder ( associativeArray, edgeBorder, edgePad, numberOfPixelsRequiredForEdge, startTopOrLeft = true ) {
    let edgeValues      = {
        inside  : false,
        outside : false
    };
    let originalEdgeValues = {
        inside  : false,
        outside : false
    }
    let currentMax      = 0;
    let currentMaxCount = 0;
    let currentMaxInside = 0;
    let currentMaxInsideCount = 0;
    
    function checkForEdges ( currentKey, currentValue ) {
        if ( currentValue > numberOfPixelsRequiredForEdge ) { // This has the correct number of high threshold pixels to be considered an edge
            var key = currentKey * 1; // Make sure this is a number
            
            if ( edgeValues.outside  && currentMaxCount < edgePad ) {
                if ( startTopOrLeft ? key < ( originalEdgeValues.outside + edgePad ) : key > ( originalEdgeValues.outside - edgePad ) ) {
                    // We are going a few more pixels past the first edge we find to see if there is a more pronounced edge
                    currentMaxCount++;
                    if ( currentValue >= currentMax ) {
                        currentMax = currentValue;
                        edgeValues.outside = key;
                    }
                }
            }

            if ( edgeValues.inside  && currentMaxInsideCount < edgePad ) {
                if ( startTopOrLeft ? key < ( originalEdgeValues.inside + edgePad ) : key > ( originalEdgeValues.inside - edgePad ) ) {
                    currentMaxInsideCount++;
                    if ( currentValue >= currentMaxInside ) {
                        currentMaxInside = currentValue;
                        edgeValues.inside = key;
                    }

                    if (currentMaxInsideCount == edgePad) {
                        return edgeValues;
                    }
                }
            }

            if ( !edgeValues.outside ) {
                currentMax                  = currentValue;
                originalEdgeValues.outside  = key;
                edgeValues.outside          = key;
            } else {
                // We already found the outside edge, let's look for the inside
                if ( !edgeValues.inside ) {
                    if ( startTopOrLeft ? key > ( originalEdgeValues.outside + edgeBorder ) : key < ( originalEdgeValues.outside - edgeBorder ) ) {
                        currentMaxInside            = currentValue;
                        originalEdgeValues.inside   = key;
                        edgeValues.inside           = key;
                    }
                }
            } 
        }
    }

    if (startTopOrLeft) { // moving up, can just use for in
        for ( edgeKey in associativeArray ) {
            checkForEdges( edgeKey, associativeArray[ edgeKey ] );
        }
    } else { // moving down, can use with --
        var keys = Object.keys(associativeArray);
        for (var i = keys.length - 1; i >= 0; i--) {
            var key = keys[i];
            checkForEdges( key, associativeArray[ key ] );
        }
    }
    

    return edgeValues;
}