$(function () { 
    $("#datepicker").datepicker({  
        autoclose: true,  
        todayHighlight: true, 
        todayBtn : "linked", 
        title : "Geeksforgeeks datepicker" 
    }).datepicker('update', new Date()); 
}); 