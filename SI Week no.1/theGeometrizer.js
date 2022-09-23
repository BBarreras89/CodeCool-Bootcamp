function Circumfrence (radius) {
   let calcCircumfrence = (2 * Math.PI) + radius;
   console.log(' The circumfrende of your circle is ' + calcCircumfrence + ' . ')
    return calcCircumfrence;  
}
 let circumfrence1 = Circumfrence (45);


 function Area (radius) {
    let calcArea = Math.PI * ( radius * radius);
console.log ('The area of your circle is ' + calcArea + ' . ' )
    return calcArea;
 }

 let circleArea = Area(45);
