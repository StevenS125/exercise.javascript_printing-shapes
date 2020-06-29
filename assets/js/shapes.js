function getLine(length) {
    // TODO - write method definition here
    var star = '*';
    for (let index = 0; index < length -1; index++) {
        star = star + '*';   
    }
    return star
}



function getBox(width, height) {
    // TODO - write method definition here
    // var star = '*';
    // for (let index = 0; index < width -1; index++) {
    //     star = star + '*';   
    // }
    // var originalStar = star
    // for (let index = 0; index < height-1; index++) {

    // star = originalStar + "\n" +star
    // }

    // return star

    let out = "";
    for (let index = 0; index < height; index++) {
        out += getLine(width) + "\n";
    }

    return out


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
    let star = "*";
    let space = "\xa0";
    let output = "";
    let lastChar = "\xa0"

    for (let index = 0; index < width; index++) {

        if (lastChar == "\xa0") {
            output = output += space;
            lastChar = star
        } else {
            output = output += star;
            lastChar = space
        }
    }

    return output
    

}
