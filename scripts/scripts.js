/**
 * Created by User on 06.07.2016.
 */
 function resetForms (){
 	$('#user_form').trigger('reset');
 }


 $(function(){
 	$('#addNewField').click(function(){
 		var tr = $('<tr></tr>'),
 		fNameTD = $('<td></td>').append($('#firstName').val()),
 		lNameTD = $('<td></td>').append($('#lastName').val()),
 		ageTD = $('<td></td>').append($('#age').val()),
 		countryTD=$('<td></td>').append($('#country').val()),
 		deleteBtn = $('<a href="#">Delete</a>'),
 		updateBtn = $ ('<a href="#">Edit</a>'),
 		editTD=$('<td></td>').append(deleteBtn," ",updateBtn);
 		tr.append(fNameTD)
 		tr.append(lNameTD)
 		tr.append(ageTD)  
 		tr.append(countryTD)
 		tr.append(editTD)
 		tr.appendTo('tbody','userList')
 		deleteBtn.click(function(){tr.remove()})
 	})

 	


 })

