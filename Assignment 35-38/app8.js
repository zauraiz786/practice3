function calculateHypotenuse(){
    var base = prompt(`Enter BASE of the triangle`);
    var perp = prompt(`Enter PERPENDICULAR of the triangle`);
    if(!isNaN(base) || !isNaN(perp)){
        var BaseSquare = base*base;
        var PerpSquare = perp*perp;
        var hyp = BaseSquare + PerpSquare;
    }else{
        alert(`Invalid Number`);
    }
    alert(`The Hypotenuse of the triangle is ${hyp}`);
}
calculateHypotenuse();