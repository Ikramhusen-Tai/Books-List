
document.addEventListener("DOMContentLoaded", function(){
	
	var list = document.querySelector("#book-list ul");
	var forms = document.forms;
	//console.log(forms);
	
	//================= delete a book
	list.addEventListener("click", (e)=>{
		if(e.target.className == "delete"){
			var li = e.target.parentElement;
			li.parentNode.removeChild(li);
		}
	})
	
	
	//================ Add a book
	var addForm = forms["add-book"];
	//console.log(addForm);
	addForm.addEventListener("submit", (e)=>{
		e.preventDefault();
		// 1- read the text input
		var value = addForm.querySelector("input[type='text']").value;
		
		// 2- create an empty elements
		var li = document.createElement("li");
		var bookName = document.createElement("span");
		var deleteBtn = document.createElement("span");
		
		
		// 3- add some text
		bookName.textContent = value;
		deleteBtn.textContent = "delete";
		
		
		// add class
		bookName.className = "name";
		deleteBtn.className = "delete";
		
		//append into the DOM
		li.appendChild(bookName);
		li.appendChild(deleteBtn);
		list.appendChild(li);
		
		// clear the text input
		addForm.querySelector("input[type='text']").value = "";
	})
	
	
})