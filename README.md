#Raphael Pie Chart
Built on the official demo in raphaeljs website to draw half/full pie chart , with given percentages and colors

##Usage:
1- Embed lib Scripts and PieChart.js  
2- Creat container div with any ID you want
3- Call the drawPie.

```javascript
		/* Parameters:
		  -> Center point (x,y)
		  -> Chart width
		  -> Chart Height 
		  -> Radious of the chart
		  -> Percentages of each section Total SUM = 100
		  -> Color of each section
		  -> Type "Full" for full circle "Half" for half circle
		*/
	drawPie(targetDiv,x,y,chartWidth,chartHeight,radious,percentages,colors,type);
```
* You can check example.html if not clear.

##Sample:
[<img src="http://img703.imageshack.us/img703/1927/pieexamples.png">](http://img703.imageshack.us/img703/1927/pieexamples.png)