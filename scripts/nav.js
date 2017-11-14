var counter = 0;
		var value = "";


		function search(value)
		{
			$('#textSpan').html(value);
			counter=value.length;
			showResult(counter)
			if(counter > 0)
			{
				$('#search-box').show();	
			}
			else
			{
				$('#search-box').hide();
			}
		}

		var blueprintSearch = 
				'<li><div class="result-label" style="background-color: {{color}}">\
					{{letter}}\
				</div>\
				<div class="result-text">\
					<a href="">{{name}}</a>\
					<a href="">{{title}}</a>\
				</div></li>';


		var ajResult = [
				{	"letter":"A",
					"color":"red",
					"name":"Adam Hegedus",
					"title":"Filming and Photography"},
				{	"letter":"L",
					"color":"teal",
					"name":"Lynn P. Asmussen",
					"title":"Drawing circles"},
				{	"letter":"C",
					"color":"#222",
					"name":"Claudiu C.",
					"title":"Coding C# faster than you"},
				{	"letter":"D",
					"color":"pink",
					"name":"Daria Darling",
					"title":"Doing the deed of doodleling"},
				{	"letter":"L",
					"color":"darkgreen",
					"name":"Line Hjort K.",
					"title":"Maker of green kale chips"}
			];

		var name ="";
		var title ="";
		var letter ="";
		var color ="";
		var result ="";

		function showResult(number){
			$('#search-list').html("");

			for(var i = 0 ; i<ajResult.length; i++){

				letter=ajResult[i].letter;
				color=ajResult[i].color;
				name=ajResult[i].name;
				title=ajResult[i].title;

				result = blueprintSearch.replace("{{letter}}",letter);
				result = result.replace("{{name}}",name);
				result = result.replace("{{title}}",title);
				result = result.replace("{{color}}",color);
				
				$('#search-list').append(result);
			}
		}

		//make the search disappeer by clicks, if there is no content
		var inputContent = "";
		document.addEventListener("click", function()
		{
			inputContent = $('#form-searchbar input').val();
			if (inputContent == ""){
				$('#search-box').hide();
			}
		});