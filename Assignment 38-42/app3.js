function ToCalculateS(a,b,c){
    return (a+b+c)/2;
}
function ToCalculateArea(a,b,c){
    let side = ToCalculateS(a,b,c)
    let area = Math.sqrt(side*(side-a)*(side-b)*(side-c));
    return area.toFixed(2);
}

const sidesOfTriangle = ToCalculateArea(2,5,6);
console.log(sidesOfTriangle);