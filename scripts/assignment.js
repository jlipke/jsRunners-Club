$(function(){
     var isFutureEvents = true;
    $("dd").hide();
    
    $("dt").click(function(){

          if($(this).next().is(':hidden')){
               $("dd").slideUp();
               $(this).next().slideDown();
          }
          else {
               $(this).next().slideUp();
          }

    });


    $("#futureEvents").click(function(){
     if(isFutureEvents == false){
          
          // Set to Current Events
          document.getElementById("futureEvents").value = "Future Events";
          isFutureEvents = true;
          
          // Display Current Events
          $("#5k dl").html("<dt>Mini Sprint</dt><dd>10/30/20</br>Memorial Park</br>Appleton</dd><br /><dt>Iron Horse</dt><dd>11/06/20</br>Bay Beach Park</br>Green Bay</dd><br /><dt>Twilight Trail</dt><dd>11/13/20</br>River's Edge Park</br>Wrightstown</dd>");
          $("#half dl").html("<dt>Fox River Marathon</dt><dd>10/15/20</br>Pierce Park</br>Appleton</dd><br /> <dt>N.E.W. Half Marathon</dt> <dd>10/29/20</br>Bay Beach Park</br>Green Bay</dd><br /><dt>Winnebago Run</dt><dd>11/27/20</br>Menominee Park</br>Oshkosh</dd>");
          $("#full dl").html("<dt>Cheesehead Marathon</dt><dd>9/24/20</br>Pamperin Park</br>Green Bay</dd><br /> <dt>Chain O'Lakes Marathon</dt> <dd>10/29/20</br>Bay Beach Park</br>Green Bay</dd><br /><dt>Fox Cities Marathon</dt><dd>11/12/20</br>Menominee Park</br>Oshkosh</dd>");

          // Animation
          $("dd").hide();
          $("dt").click(function(){

               if($(this).next().is(':hidden')){
                    $("dd").slideUp();
                    $(this).next().slideDown();
               }
               else {
                    $(this).next().slideUp();
               }
     
         });

     }
     else{

          // Set to Future Events
          document.getElementById("futureEvents").value = "Current Events";
          isFutureEvents = false;
         
          // Display Future Events
          $("#5k dl").html("<dt>Snowball Sprint</dt><dd>1/14/21</br>Mosquito Hill</br>New London</dd></br><dt>Winter Warrior</dt><dd>2/06/21</br>Bay Beach</br>Green Bay</dd></br><dt>Big Chill Run</dt><dd>2/24/21</br>Mid Valley Golf Course</br>De Pere</dd>");
          $("#half dl").html("<dt>Frosty Indoor</dt><dd>Marathon</br>1/15/21</br>TryIt Ice Arena</br> Neenah</dd></br> <dt>Valentine Run</dt><dd>2/12/21</br>Green Isle Park</br> De Pere</dd></br><dt>Snowball Marathon</dt><dd>3/03/21</br>Menominee Park</br>Oshkosh</dd>");
          $("#full dl").html("<dt>Trailbreaker Marathon</dt><dd>4/02/21</br>Leach Amphitheatre</br>Oshkosh</dd></br><dt>Jailbreak Marathon</dt><dd></br>4/16/21</br>Menominee Park</br>Oshkosh</dd></br><dt>Cellcom Marathon</dt><dd></br>5/21/21</br>Lombardi Atrium</br>Green Bay</dd>");
          
          // Animation
          $("dd").hide();
          $("dt").click(function(){

               if($(this).next().is(':hidden')){
                    $("dd").slideUp();
                    $(this).next().slideDown();
               }
               else {
                    $(this).next().slideUp();
               }
     
         });
     }

    });

    

   

    
    
});