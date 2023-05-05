$(document).ready(function () {
   
   
    let currentDay = moment().format('LLLL');
    let currentTime = (moment().hour());

    
    for (key = 0; key < localStorage.length; key++){
        timeID = localStorage.key(key);
        timeValue = localStorage.getItem(timeID);
        $("#"+timeID).val(timeValue);


    }

   
    $("#currentDay").append(currentDay);

    $("input").each(function () {
        var item = parseInt($(this).attr("time"));
  
        console.log(item)
        
        if (item < currentTime) {
            $(this).addClass("past");
        }


        if (item > currentTime) {
            $(this).addClass("present")
        }

        if (item === currentTime) {
            $(this).addClass("future")
        }
    });



    $("button").on("click", function () {
        
        inputID = $(this).attr("input-id");
        inputEl = $(document.getElementById(inputID))



        

        calendarEvent = inputEl.val();
        console.log($(this).val())
        console.log($(this).parent)
        localStorage.setItem(inputEl.attr("id"), calendarEvent);

    })


});

