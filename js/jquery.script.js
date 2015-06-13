$(document).ready(function () {
	var $data =
	[
	    {
	    	"food": "Макароны",
	    	"age": "2-3 года",
	    	"Ккал": "58",
	    	"Белки": "49",
	        "Жиры": "64",
	        "Углеводы": "56",
	        "Кальций": "6",
	        "Фосфор": "20",
	        "Железо": "30",
	        "Йод": "0",
	        "Витамин С*": "0"
	    },
	    {
	    	"food": "Хлеб",
	    	"age": "2-3 года",
	    	"Ккал": "75",
	    	"Белки": "71",
	        "Жиры": "25",
	        "Углеводы": "101",
	        "Кальций": "10",
	        "Фосфор": "37",
	        "Железо": "48",
	        "Йод": "0",
	        "Витамин С*": "0"
	    },
	    {
	    	"food": "Чипсы",
	    	"age": "2-3 года",
	    	"Ккал": "77",
	    	"Белки": "31",
	        "Жиры": "155",
	        "Углеводы": "46",
	        "Кальций": "6",
	        "Фосфор": "44",
	        "Железо": "32",
	        "Йод": "0",
	        "Витамин С*": "83"
	    },
	    {
	    	"food": "Картошка",
	    	"age": "2-3 года",
	    	"Ккал": "32",
	    	"Белки": "29",
	        "Жиры": "5",
	        "Углеводы": "47",
	        "Кальций": "9",
	        "Фосфор": "46",
	        "Железо": "48",
	        "Йод": "0",
	        "Витамин С*": "193"
	    },
	    {
	    	"food": "Фастфуд",
	    	"age": "2-3 года",
	    	"Ккал": "45",
	    	"Белки": "69",
	        "Жиры": "78",
	        "Углеводы": "22",
	        "Кальций": "36",
	        "Фосфор": "43",
	        "Железо": "49",
	        "Йод": "0",
	        "Витамин С*": "2"
	    },
	    {
	    	"food": "Шоколад",
	    	"age": "2-3 года",
	    	"Ккал": "79",
	    	"Белки": "47",
	        "Жиры": "148",
	        "Углеводы": "50",
	        "Кальций": "88",
	        "Фосфор": "88",
	        "Железо": "30",
	        "Йод": "0",
	        "Витамин С*": "0"
	    },
	    {
	    	"food": "Газировка",
	    	"age": "2-3 года",
	    	"Ккал": "27",
	    	"Белки": "0",
	        "Жиры": "0",
	        "Углеводы": "43",
	        "Кальций": "0",
	        "Фосфор": "0",
	        "Железо": "0",
	        "Йод": "0",
	        "Витамин С*": "0"
	    },
	    {
	    	"food": "Макароны",
	    	"age": "3-7 лет",
	    	"Ккал": "45",
	    	"Белки": "38",
	        "Жиры": "50",
	        "Углеводы": "44",
	        "Кальций": "5",
	        "Фосфор": "17",
	        "Железо": "30",
	        "Йод": "0",
	        "Витамин С*": "0"
	    },
	    {
	    	"food": "Хлеб",
	    	"age": "3-7 лет",
	    	"Ккал": "58",
	    	"Белки": "56",
	        "Жиры": "19",
	        "Углеводы": "79",
	        "Кальций": "8",
	        "Фосфор": "33",
	        "Железо": "48",
	        "Йод": "0",
	        "Витамин С*": "0"
	    },
	    {
	    	"food": "Чипсы",
	    	"age": "3-7 лет",
	    	"Ккал": "60",
	    	"Белки": "24",
	        "Жиры": "121",
	        "Углеводы": "36",
	        "Кальций": "5",
	        "Фосфор": "39",
	        "Железо": "32",
	        "Йод": "0",
	        "Витамин С*": "74"
	    },
	    {
	    	"food": "Картошка",
	    	"age": "3-7 лет",
	    	"Ккал": "25",
	    	"Белки": "22",
	        "Жиры": "4",
	        "Углеводы": "36",
	        "Кальций": "8",
	        "Фосфор": "41",
	        "Железо": "48",
	        "Йод": "0",
	        "Витамин С*": "174"
	    },
	    {
	    	"food": "Фастфуд",
	    	"age": "3-7 лет",
	    	"Ккал": "35",
	    	"Белки": "54",
	        "Жиры": "61",
	        "Углеводы": "17",
	        "Кальций": "32",
	        "Фосфор": "37",
	        "Железо": "49",
	        "Йод": "0",
	        "Витамин С*": "2"
	    },
	    {
	    	"food": "Шоколад",
	    	"age": "3-7 лет",
	    	"Ккал": "62",
	    	"Белки": "36",
	        "Жиры": "116",
	        "Углеводы": "39",
	        "Кальций": "78",
	        "Фосфор": "77",
	        "Железо": "30",
	        "Йод": "0",
	        "Витамин С*": "0"
	    },
	    {
	    	"food": "Газировка",
	    	"age": "3-7 лет",
	    	"Ккал": "21",
	    	"Белки": "0",
	        "Жиры": "0",
	        "Углеводы": "33",
	        "Кальций": "0",
	        "Фосфор": "0",
	        "Железо": "0",
	        "Йод": "0",
	        "Витамин С*": "0"
	    },
	    {
	    	"food": "Макароны",
	    	"age": "7-11 лет",
	    	"Ккал": "39",
	    	"Белки": "32",
	        "Жиры": "43",
	        "Углеводы": "37",
	        "Кальций": "4",
	        "Фосфор": "13",
	        "Железо": "25",
	        "Йод": "0",
	        "Витамин С*": "0"
	    },
	    {
	    	"food": "Хлеб",
	    	"age": "7-11 лет",
	    	"Ккал": "50",
	    	"Белки": "48",
	        "Жиры": "17",
	        "Углеводы": "67",
	        "Кальций": "7",
	        "Фосфор": "24",
	        "Железо": "40",
	        "Йод": "0",
	        "Витамин С*": "0"
	    },
	    {
	    	"food": "Чипсы",
	    	"age": "7-11 лет",
	    	"Ккал": "52",
	    	"Белки": "21",
	        "Жиры": "104",
	        "Углеводы": "30",
	        "Кальций": "4",
	        "Фосфор": "28",
	        "Железо": "27",
	        "Йод": "0",
	        "Витамин С*": "62"
	    },
	    {
	    	"food": "Картошка",
	    	"age": "7-11 лет",
	    	"Ккал": "21",
	    	"Белки": "19",
	        "Жиры": "3",
	        "Углеводы": "31",
	        "Кальций": "7",
	        "Фосфор": "29",
	        "Железо": "40",
	        "Йод": "0",
	        "Витамин С*": "145"
	    },
	    {
	    	"food": "Фастфуд",
	    	"age": "7-11 лет",
	    	"Ккал": "30",
	    	"Белки": "46",
	        "Жиры": "52",
	        "Углеводы": "15",
	        "Кальций": "26",
	        "Фосфор": "27",
	        "Железо": "41",
	        "Йод": "0",
	        "Витамин С*": "2"
	    },
	    {
	    	"food": "Шоколад",
	    	"age": "7-11 лет",
	    	"Ккал": "53",
	    	"Белки": "31",
	        "Жиры": "99",
	        "Углеводы": "33",
	        "Кальций": "64",
	        "Фосфор": "56",
	        "Железо": "25",
	        "Йод": "0",
	        "Витамин С*": "0"
	    },
	    {
	    	"food": "Газировка",
	    	"age": "7-11 лет",
	    	"Ккал": "18",
	    	"Белки": "0",
	        "Жиры": "0",
	        "Углеводы": "29",
	        "Кальций": "0",
	        "Фосфор": "0",
	        "Железо": "0",
	        "Йод": "0",
	        "Витамин С*": "0"
	    }
	]

	drawChart($data, "Макароны", "2-3 года");

	function drawChart(data, food, age)
	{
		var $item = {},
			$itemData = [];
		var margin ={top:10, right:30, bottom:40, left:10},
		width=960-margin.left - margin.right, 
		height=289-margin.top-margin.bottom;

		// scale to ordinal because x axis is not numerical
		var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

		//scale to numerical value by height
		var y = d3.scale.linear().domain([0, 100]).range([height, 0]);

		var formatter = d3.format(".0%");

		var xAxis = d3.svg.axis()
		          .scale(x)
		          .orient("bottom");  //orient bottom because x-axis will appear below the bars

		var yAxis = d3.svg.axis()
		          .scale(y)
		          .orient("left")
		          .tickFormat(formatter);

 		// Add our chart to the #chart div
		var chart = d3.select("#charts").append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		    .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		// Находим выбранную комбинацию
        data.forEach(function(d)
	        {
	        	if (d.food == food && d.age == age) {
	        		$item = d;
	        	}
	        });
        
        // Преобразуем данные
        $.each($item, function (key, val) {
			if (key != "food" && key != "age"){
				$itemData.push({name: key, value : val});
				// console.log($itemData);
			}
		});

		x.domain($itemData.map(function(d)
		{
			return d.name;
		}));


		var bar = chart.selectAll("g")
			.data($itemData)
			.enter()
			.append("g")
			.attr("transform", function(d, i) {
				return "translate(" + (100*i) + ", 0)";
			})
			.attr("alt", function(d, i) {
				return d.name;
			})
			.attr("class", "bar")
			.attr("stroke", "#673510")
			.attr("stroke-width", "2");

		bar.append("rect")
			.attr("class", "bar-holder")
			.attr("rx", "4")
			.attr("y", "5")
			.attr("x", "0")
			.attr("height", "234")
			.attr("fill", "#f7f7e5")
			.attr("width", "92"); //set width base on range on ordinal data

		var nested = bar.append("g")

			.append("rect")
			.attr("fill", "#8ed644")
			.attr("class", "barfill")
			.attr("y", height)
			.attr("x", "1")
			.attr("rx", "4")
			.attr("height", "0")
			.transition()
			.delay(function(d, i) { return i * 100; })
			.attr("y", function (d, i) {
				if (d.value > 100) {
					return "6px";
				}
				else{
					return y(d.value);
				}
			})
        	.attr("height", function (d) {  
        		if (d.value > 100) {
					return "232";
				}
				else
				{
					return height - y(d.value);
				}
        	})
			.attr("width", "90"); //set width base on range on ordinal data 


			bar.append("text")
				.attr("class", "percentage")
				.attr("x", "60")
				.attr("y", height-20)
				.attr("dy", ".75em")
				.text(function(d) {
					return d.value + "%";
				})
				.transition()
				.delay(function(d, i) { return i * 100; })
				.attr("y", function(d) {
					if (y(d.value) > 40) {
						return y(d.value) - 20;
					}
					else{
						return 10;
					}
				})
	        	.attr("height", function (d) {  
	        		if (d.value > 100) {
						return "232";
					}
					else
					{
						return height - y(d.value);
					}
	        	})


			chart.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(" + margin.left + "," + height + ")")
				.call(xAxis);

				chart.selectAll("path.domain")
				.attr("d","M-16 0 l905 0")

				chart.selectAll("g.tick>text")
				.attr("x", "-24")
				.attr("y", "15")
				.attr("style", "text-anchor: middle");
	}

	$("select").fancySelect();

	$("#foodselect").fancySelect().on('change.fs', function() {
		var foodval = $("#foodselect + .trigger").html();
		var ageval = $("#ageselect + .trigger").html();
	    $(".charts-holder").empty();
		drawChart($data, foodval, ageval);
	}); 

	$("#ageselect").fancySelect().on('change.fs', function() {
		var foodval = $("#foodselect + .trigger").html();
		var ageval = $("#ageselect + .trigger").html();
	    $(".charts-holder").empty();
		drawChart($data, foodval, ageval);
	});
});