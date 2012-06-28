/**
 * A JS for half/full pie chart drawing
 * @author Mohamed Samir <mohamedsamir216@gmail.com>
 * @Date Started June 24 2012 
 */

//Raphael Paper
var paper;

/*
Main drawing function pass parameters to pieChart, after initializing Raphael chart
*/
function drawPie(targetDiv,x,y,chartWidth,chartHeight,radious,percentages,colors,type){
    paper = Raphael(targetDiv, chartWidth,chartHeight);
    paper.pieChart(x,y,radious,percentages,colors,type);
}


/*
    Draw half pie chart using center point and giving the percentages of inner volumes 
    and radious of the half circle.

    using inner method sector to draw sectors using the given percentages then adding 
    the animation to show given percentage of each sector with animation style.

*/
Raphael.fn.pieChart = function (cx, cy, r, values, labels, type) {
    var paper = this,
        rad = Math.PI / 180,
        chart = this.set();
    var stroke="white";
    var radSize = 180;
    if(type.toLowerCase() =="full")radSize=360;
    
    /*
        Draw a sector from center point with specific radious [r] to rotate clockwise from start angle [startAngle in Radian]
        to end angle [endAngle in radian] with ability to add styling/animation in the params array
    */
    function sector(cx, cy, r, startAngle, endAngle, params) {
        var x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx + r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad);
        return paper.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"]).attr(params);
    }
    var angle = 0,
        total = 0,
        start = 0,
        process = function (j) {
            var value = values[j],
                angleplus = radSize * value / total,
                popangle = angle + (angleplus / 2),
                ms = 500,
                delta = 30,
                bcolor =labels[j],
                color=labels[j],
                p = sector(cx, cy, r, angle, angle + angleplus, {fill: "90-" + bcolor + "-" + color, stroke: stroke, "stroke-width":0.01});

               var txt;

                p.mouseover(function (e) {
                    p.stop().animate({transform: "s1.1 1.1 " + cx + " " + cy}, ms, "elastic");
                    txt = paper.text(cx, cy+10, values[j]+"%").attr({"font-size": 14,"font-weight":"bold"});
                    txt.stop().animate({opacity: 1}, ms, "elastic");

                }).mouseout(function () {
                    p.stop().animate({transform: ""}, ms, "elastic");
                    txt.stop().animate({opacity: 0}, ms);
                });

                angle += angleplus;
                chart.push(p);
                start += .1;
                };
    for (var i = 0, ii = values.length; i < ii; i++) {
        total += values[i];
    }
    for (i = 0; i < ii; i++) {
        process(i);
    }
    return chart;
};
