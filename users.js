$(document).ready(function(){

	$("button").click(function(){
		var firstname= $("input[name=firstname").val();
		var lastname= $("input[name=lastname").val();
		var email= $("input[name=email").val();
		var phone= $("input[name=phone").val();

		console.log(firstname, lastname, email, phone);

		$("tbody").append("<tr><td>"+firstname+"</td>"+"<td>"+lastname+"</td>"+"<td>"+email+"</td>"+"<td>"+phone+"</td></tr>");
		
		return false;
	})
})






		
