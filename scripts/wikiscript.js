$(document).ready(function(){
	// click function to search 
	$('#search').click(function(){

		var searchTerm = $('#searchTerm').val();
		// console.log(searchTerm);
		// ApI url with seachTearm 
		var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
		console.log(api);
		$.ajax({
			type:"GET",
			url:api,
			async:false,
			dataType:"json",
			success :function(data){
				// console.log(data[1][0]);
				$('#output').html('');
				for(var i=0;i<data[1].length;i++){
					$('#output').prepend("<div><div class='btn-default'> <a  target='blank'  href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></div></div>");	
				}
				$('#searchTerm').val('');
			},
			error:function(errorMessage){
				alert("error");
			}

		});
	});
// search function for pressing for ENTER button 
$("#searchTerm").keypress(function(e){
	if(e.which==13){
		$("#search").click();
	}
});

});