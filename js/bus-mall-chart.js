
function buildChart() {
	var chart = new CanvasJS.Chart("chart-container", {
		title:{
			text: "Total Votes Per Products"
		},
		data: [
		{
			type: "bar",
			dataPoints: images,
		}
		]
	});
	chart.render();
}