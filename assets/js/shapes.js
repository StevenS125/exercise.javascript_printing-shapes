function getLine(length) {
    // TODO - write method definition here
    var star = '*';
    for (let index = 0; index < length -1; index++) {
        star = star + '*';   
    }
    console.log(
`Shape: 
${star}`)

}



function getBox(width, height) {
    // TODO - write method definition here
    var star = '*';
    for (let index = 0; index < width -1; index++) {
        star = star + '*';   
    }
    var originalStar = star
    for (let index = 0; index < height-1; index++) {
star = 
`${star}
${originalStar}`
}

console.log(star);


}



function getBottomLeftTriangle(length) {
    // TODO - write method definition here
}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here
}



function getPyramid(length) {
    // TODO - write method definition here
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}
