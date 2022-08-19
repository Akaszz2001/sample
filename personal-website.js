$(document).ready(function(){
  $(".card ").mouseenter(function () { 
   $(this).css({"background-color":"#28a745"})
  });
  $(".card ").mouseleave(function () { 
   $(this).css({"background-color":"white"})
  })

  // for fb icon
  $("#fb").mouseenter(function(){
    $(this).css({"color":"#4267B2"})
  })

  $("#fb").mouseleave(function(){
    $(this).css({"color":"white"})
  })

  //  for instagram icon
  $("#insta").mouseenter(function(){
    $(this).css({"color":"#bc2a8d"})
  })

  $("#insta").mouseleave(function(){
    $(this).css({"color":"white"})
  })

  // for linkedin icon
  $("#link").mouseenter(function(){
    $(this).css({"color":"#0072b1"})
  })

  $("#link").mouseleave(function(){
    $(this).css({"color":"white"})
  })
})


$(document).ready(function(){
  $(".form-group").validate({
    rules:{
      Uname:{
        minlength:5,
        maxlength:20,
        required:true,
      },
      email:{
        required:true,
        email:true,
        
      },
      mob:{
        required:true,
        minlength:10,
        maxlength:10,
      },
      msg:{
        required:true,
      },
    },
    messages:{
      Uname:{
        required:"Must required this field...",
        minlength:"Name must have 5 charcters",
        maxlength:"No of charcters not more than 20 charcters"
      },
      email:{
        required:"Must required this field...",
        email:"Enter a valid email address",
      },
      mob:{
        required:"Mobile number is required...",
      },
      msg:{
        required:"Fill this field..."
      }
    }
  })
     
})
