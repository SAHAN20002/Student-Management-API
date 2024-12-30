

$(document).ready(function(){
   
/*index page icon navigations*/
$("#Img-on-1").click(function(){
  window.location.href = "insert_student.html";
})

$("#Img-on-2").click(function(){
  window.location.href = "update_student.html";
})

$("#Img-on-3").click(function(){
  window.location.href = "show_students.html";
})
/*index page icon navigations*/ 

/* back to top function start*/ 

 $(window).scroll(function () { /*Btn-Hide*/ 
 if ($(this).scrollTop() > 100) {
     $('#scrollToTopBtn').fadeIn();
 } else {
     $('#scrollToTopBtn').fadeOut();
 }
});

$('#scrollToTopBtn').click(function () { /* Scroll-smooth*/ 
 $('html, body').animate({ scrollTop: 0 }, 90);
 return false;
});

/* back to top function end*/ 


  $("#Hide-div-img").mouseover(function(){
    $("#Hide-div").fadeIn().css("visibility","visible");
  });
  
  $("#Hide-div-img").mouseleave(function(){
    $("#Hide-div").fadeOut().css("visibility","hidden");
  });

  $("#Hide-div-img-1").mouseover(function(){
    $("#Hide-div-1").fadeIn().css("visibility","visible");
  });
  
  $("#Hide-div-img-1").mouseleave(function(){
    $("#Hide-div-1").fadeOut().css("visibility","hidden");
  });

  $("#Hide-div-img-2").mouseover(function(){
    $("#Hide-div-2").fadeIn().css("visibility","visible");
  });
  
  $("#Hide-div-img-2").mouseleave(function(){
    $("#Hide-div-2").fadeOut().css("visibility","hidden");
  });

  $("#Hide-div-img-3").mouseover(function(){
    $("#Hide-div-3").fadeIn().css("visibility","visible");
  });
  
  $("#Hide-div-img-3").mouseleave(function(){
    $("#Hide-div-3").fadeOut().css("visibility","hidden");
  });

  $("#Hide-div-img-4").mouseover(function(){
    $("#Hide-div-4").fadeIn().css("visibility","visible");
  });
  
  $("#Hide-div-img-4").mouseleave(function(){
    $("#Hide-div-4").fadeOut().css("visibility","hidden");
  });

});
 
  /* Data Fetch from the server */

  function GetStudentDetails(){

     var StudentId = $("#ID").val();
     var StudentEmail = $("#Input_email").val();
     var StudentFName = $("#Input-F-Name").val();
     var StudentLName = $("#Input-L-Name").val();
     var StudentCity = $("#Input-City").val();
     var StudentGurading = $("#Input-Gurading").val();
     var ProgramSelect = $("#ProgramSelect").val();

     var SubjectArry =  []; 
     $("input:checkbox[name=type]:checked").each(function(){
      SubjectArry.push($(this).val())
     })
     
              if(StudentId.trim() !== "" && StudentEmail.trim() !== "" && StudentFName.trim() !== "" && StudentLName.trim() !== "" &&
                     StudentCity.trim() !=="" && StudentGurading.trim() !== "" && ProgramSelect.trim() !== "" && SubjectArry.length > 0){
              
                 var studentData = {

                      StudentId: StudentId,
                      StudentEmail: StudentEmail,
                      StudentFName: StudentFName,
                      StudentLName: StudentLName,
                      StudentCity: StudentCity,
                      StudentGurading: StudentGurading,
                      ProgramSelect: ProgramSelect,
                      SubjectArry:SubjectArry,

                 };
                

                 fetch('http://localhost:3000/students/creat',{
                  method:'POST',
                  headers:{
                    'Content-Type': 'application/json',
                  },
                  body:JSON.stringify(studentData),
                 })
                  .then((response) => response.json())
                  .then((data) =>{
                    console.log('Success',data);
                    alert(data.message);

                    // Clear the text fields after successful insertion
                   document.getElementById('ID').value = '';
                   document.getElementById('Input_email').value = '';
                   document.getElementById('Input-F-Name').value = '';
                   document.getElementById('Input-L-Name').value = '';
                   document.getElementById('Input-City').value = '';
                   document.getElementById('Input-Gurading').value = '';
                   document.getElementById('ProgramSelect').value = '';

                   $("input:checkbox[name=type]").each(function() {
                    $(this).prop('checked', false);
                  });

                  })
                  .catch((error) => {
                    console.error('Error',error);
                    alert(error);
                  });

              }else{
                alert("Please fill in all the required fields.");
              }

      }

  /* Data Fetch from the server */

   // Function to fetch and display students
   function fetchAndDisplayStudents() {
    // Fetch data from the server
    fetch('http://localhost:3000/students/show')
      .then(response => response.json())
      .then(students => {
        const tableBody = document.getElementById('studentsTableBody');
        tableBody.innerHTML = ''; // Clear existing rows
  
        students.forEach(student => {
          const row = tableBody.insertRow();
  
          // Adjust the cell indexes based on the structure of your student data
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          const cell3 = row.insertCell(2);
          const cell4 = row.insertCell(3);
          const cell5 = row.insertCell(4);
          const cell6 = row.insertCell(5);
          const cell7 = row.insertCell(6);
          const cell8 = row.insertCell(7);
  
          // Assuming your student object has properties like StudentId, StudentFName, etc.
          cell1.textContent = student.StudentId;
          cell2.textContent = student.StudentFName;
          cell3.textContent = student.StudentLName;
          cell4.textContent = student.StudentEmail;
          cell5.textContent = student.StudentCity;
          cell6.textContent = student.StudentGurading;
          cell7.textContent = student.SubjectArry;
          cell8.textContent = student.ProgramSelect;
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  // Function to fetch and display students
 
// update student

  

  function updatedStudent() {
    // Fetch student details based on the selected criteria and input
    const searchCriteria = document.getElementById('searchCriteria').value;
    const searchInput = document.getElementById('searchInput').value;

      if(searchCriteria !== "" && searchInput !== ""){
    // Make a request to your server to fetch the student details
             fetch(`http://localhost:3000/students/search${searchCriteria}/${searchInput}`)
             .then(response => response.json())
             .then(student => {

               // Populate the form fields with the retrieved student details
               document.getElementById('floatingInputGrid').value = student.StudentId;
               document.getElementById('Email').value = student.StudentEmail;
               document.getElementById('F_name').value = student.StudentFName;
               document.getElementById('L_name').value = student.StudentLName;
               document.getElementById('City').value = student.StudentCity;
               document.getElementById('ProgramSelect').value = student.ProgramSelect;
               document.getElementById('Guarding').value = student.StudentGurading;
               
                 })
                .catch(error => console.error('Error fetching student details:', error));
        }else{
             alert("Please fill in all the required fields.");
        }      
  }

  function updateSaveStudents () {

   

     var SubjectArry =  []; 
     $("input:checkbox[name=type]:checked").each(function(){
      SubjectArry.push($(this).val())
     })


    
             // Retrieve updated student details from the form
            const updatedStudent = {

             StudentId: document.getElementById('floatingInputGrid').value,
             StudentEmail: document.getElementById('Email').value,
             StudentFName: document.getElementById('F_name').value,
             StudentLName:document.getElementById('L_name').value,
             StudentCity:document.getElementById('City').value,
             ProgramSelect:document.getElementById('ProgramSelect').value,
             StudentGurading:document.getElementById('Guarding').value,
             SubjectArry : SubjectArry
             // ... retrieve other fields ...
              };
          
    // Make a request to your server to update the student details
              fetch('http://localhost:3000/students/update', {
               method: 'PUT',
               headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedStudent),
              })
             .then(response => response.json())
             .then(result => {
             console.log(result.message);
             alert(result.message);
             

             // Clear the text fields and checkboxes after successful update
              $('#ID, #Email, #F_name, #L_name, #City, #IGuarding, #ProgramSelect, #floatingInputGrid,#Guarding').val('');

              $("input:checkbox[name=type]").prop('checked', false);

            // Optionally, you can reset the form after updating
              document.getElementById('resetButton').click();
         })
         .catch(error => console.error('Error updating student details:', error));
      


    
    } 

  // update student

  // Search Student
  function SearchStudent() {
    // Fetch student details based on the selected criteria and input
    const searchCriteria = document.getElementById('floatingSelect').value;
    const searchInput = document.getElementById('searchInput').value;
  
    if (searchCriteria !== "" && searchInput !== "") {
      // Make a request to your server to fetch the student details
      fetch(`http://localhost:3000/students/search${searchCriteria}/${searchInput}`)
        .then(response => response.json())
        .then(data => {
          // Log the data to understand its structure
          console.log('Server data:', data.error);
          alert('Server data:', data.error);
          const tableBody = document.getElementById('studentsTableBody');
          tableBody.innerHTML = ''; 
          if(data.error){
          tableBody.innerHTML = 'Data not found'; 
          }// Clear existing rows
  
          if (Array.isArray(data)) {
            data.forEach(student => {
              const row = tableBody.insertRow();
              // Adjust the cell indexes based on the structure of your student data
              const cell1 = row.insertCell(0);
              const cell2 = row.insertCell(1);
              const cell3 = row.insertCell(2);
              const cell4 = row.insertCell(3);
              const cell5 = row.insertCell(4);
              const cell6 = row.insertCell(5);
              const cell7 = row.insertCell(6);
              const cell8 = row.insertCell(7);
  
              cell1.textContent = student.StudentId;
              cell2.textContent = student.StudentFName;
              cell3.textContent = student.StudentLName;
              cell4.textContent = student.StudentEmail;
              cell5.textContent = student.StudentCity;
              cell6.textContent = student.StudentGurading;
              cell7.textContent = student.SubjectArry;
              cell8.textContent = student.ProgramSelect;
            });
          } else if (typeof data === 'object') {
            const row = tableBody.insertRow();
            // Adjust the cell indexes based on the structure of your student data
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            const cell8 = row.insertCell(7);
  
            cell1.textContent = data.StudentId;
            cell2.textContent = data.StudentFName;
            cell3.textContent = data.StudentLName;
            cell4.textContent = data.StudentEmail;
            cell5.textContent = data.StudentCity;
            cell6.textContent = data.StudentGurading;
            cell7.textContent = data.SubjectArry;
            cell8.textContent = data.ProgramSelect;
          } else {
            console.error('Unexpected data format:', data);
            alert('Unexpected data format from the server.');
            tableBody.innerHTML = ''; // Clear existing rows
          if (data.error) {
            const row = tableBody.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 8;
            cell.textContent = 'Student not found';
            cell.style.textAlign = 'center';
          }
          }
        })
        .catch(error => {
          console.error('Error fetching student details:', error);
          alert('Error fetching student details from the server.');
        });
    } else {
      alert('Please fill in all the required fields.');
    }
  }
  
  
  

  // Search Student

  // delete Students
    
  function deleteSearchStudents() {
    const searchCriteria = document.getElementById('floatingSelect').value;
    const searchInput = document.getElementById('searchInput').value;
  
    if (searchCriteria !== "" && searchInput !== "") {
      // Make a request to your server to fetch the student details
      fetch(`http://localhost:3000/students/search${searchCriteria}/${searchInput}`)
        .then(response => response.json())
        .then(data => {
          // Log the data to understand its structure
          console.log('Server data:', data);
  
          const tableBody = document.getElementById('studentsTableBody');
          tableBody.innerHTML = ''; // Clear existing rows
  
          if (Array.isArray(data)) {
            data.forEach(student => {
              const row = tableBody.insertRow();
              // Adjust the cell indexes based on the structure of your student data
              const cell1 = row.insertCell(0);
              const cell2 = row.insertCell(1);
              const cell3 = row.insertCell(2);
              const cell4 = row.insertCell(3);
              const cell5 = row.insertCell(4);
              const cell6 = row.insertCell(5);
              const cell7 = row.insertCell(6);
              const cell8 = row.insertCell(7);
              const cell9 = row.insertCell(8);

  
              cell1.textContent = student.StudentId;
              cell2.textContent = student.StudentFName;
              cell3.textContent = student.StudentLName;
              cell4.textContent = student.StudentEmail;
              cell5.textContent = student.StudentCity;
              cell6.textContent = student.StudentGurading;
              cell7.textContent = student.SubjectArry;
              cell8.textContent = student.ProgramSelect;

              const deleteButton = document.createElement('button');
               deleteButton.type = 'button';
               deleteButton.className = 'btn btn-danger delete-button';
               deleteButton.textContent = 'Delete';
               deleteButton.setAttribute('data-student-id', data.StudentId);
               cell9.appendChild(deleteButton); // Append 

               deleteButton.addEventListener('click', function () {
                const studentIdToDelete = this.getAttribute('data-student-id');
                console.log(studentIdToDelete);
               // Call a function to handle the deletion based on the student ID
                deleteStudent(studentIdToDelete);
                 });
   


            });
          } else if (typeof data === 'object') {
            const row = tableBody.insertRow();
            // Adjust the cell indexes based on the structure of your student data
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            const cell8 = row.insertCell(7);
            const cell9 = row.insertCell(8);

  
            cell1.textContent = data.StudentId;
            cell2.textContent = data.StudentFName;
            cell3.textContent = data.StudentLName;
            cell4.textContent = data.StudentEmail;
            cell5.textContent = data.StudentCity;
            cell6.textContent = data.StudentGurading;
            cell7.textContent = data.SubjectArry;
            cell8.textContent = data.ProgramSelect;
            


           // Create a "Delete" button for the fetched student
               const deleteButton = document.createElement('button');
               deleteButton.type = 'button';
               deleteButton.className = 'btn btn-danger delete-button';
               deleteButton.textContent = 'Delete';
               deleteButton.setAttribute('data-student-id', data.StudentId);
               cell9.appendChild(deleteButton); // Append the delete button to the cell

          // Add an event listener to the "Delete" button
             deleteButton.addEventListener('click', function () {
             const studentIdToDelete = this.getAttribute('data-student-id');
             console.log(studentIdToDelete);
            // Call a function to handle the deletion based on the student ID
             deleteStudent(studentIdToDelete);
              });
           // Append the "Delete" button to the table cell
           cell9.appendChild(deleteButton);
          } else {
            console.error('Unexpected data format:', data);
            alert('Unexpected data format from the server.');
          }
        })
        .catch(error => {
          console.error('Error fetching student details:', error);
          alert('Error fetching student details from the server.');
        });
    } else {
      alert('Please fill in all the required fields.');
    }
  }
  
  function deleteStudent(studentId) {
    // Display a confirmation dialog
    const userConfirmed = window.confirm('Are you sure you want to delete this student?');
  
    // Check if the user confirmed the deletion
    if (userConfirmed) {
      // Make a request to your server to delete the student
      fetch(`http://localhost:3000/students/delete/${studentId}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(result => {
          console.log(result.message);
          location.reload();
          alert(result.message);
  
          // Refresh the page after successful deletion
         
        })
        .catch(error => console.error('Error deleting student:', error));
    } else {
      // User canceled the deletion
      console.log('Deletion canceled');
    }
  }
  

  // delete Students



  // Function to populate a specific table based on course type
function populateTable(courseType, tableBodyId) {
  // Make a request to your server to fetch student details based on courseType
  fetch(`http://localhost:3000/students/courseType${courseType}`)
      .then(response => response.json())
      .then(data => {
          const tableBody = document.getElementById(tableBodyId);
          tableBody.innerHTML = ''; // Clear existing rows

          if (typeof data === 'object') {
              data.forEach(student => {
                  const row = tableBody.insertRow();
                  // Adjust the cell indexes based on the structure of your student data
                  // For example, assuming your student object has properties like StudentId, StudentFName, etc.
                  const cell1 = row.insertCell(0);
                  const cell2 = row.insertCell(1);
                  const cell3 = row.insertCell(2);
                  const cell4 = row.insertCell(3);
                  const cell5 = row.insertCell(4);
                  const cell6 = row.insertCell(5);
                  const cell7 = row.insertCell(6);
                  const cell8 = row.insertCell(7);

                  // Populate cells with student data
                  cell1.textContent = student.StudentId;
                  cell2.textContent = student.StudentFName;
                  cell3.textContent = student.StudentLName;
                  cell4.textContent = student.StudentEmail;
                  cell5.textContent = student.StudentCity;
                  cell6.textContent = student.StudentGurading;
                  cell7.textContent = student.SubjectArry;
                  cell8.textContent = student.ProgramSelect;
              });
          } else {
              console.error('Unexpected data format:', data);
              alert('Unexpected data format from the server.');
          }
      })
      .catch(error => {
          console.error('Error fetching student details:', error);
          alert('Error fetching student details from the server.');
      });
}

// Call the function for each course type

function dashBoard(){
populateTable('foundation', 'studentsTableBodyFoundations');
populateTable('hnd', 'studentsTableBodyHnd');
populateTable('degree', 'studentsTableBodyDeegree');
populateTable('msc', 'studentsTableBodyMSC');
}

