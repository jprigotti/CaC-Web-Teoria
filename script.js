function table_search(){
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("input_search");
  filter = input.value.toUpperCase();
  table = document.getElementById("table_1");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


function copy_clipboard(){
    /* Get the text field */
    var copyText = document.getElementById("preformatted_test").textContent;
     /* Select the text field */
   console.log(copyText);
   navigator.clipboard.writeText(copyText);
   
 }
