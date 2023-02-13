const allLinks =  document.querySelectorAll(".links a");


function scrollToSection(elements)
{

    elements.forEach(ele =>{
        ele.addEventListener("click",(e)=>
        {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView(
                {
                    behavior:'smooth'
                });


        });
    });

}
scrollToSection(allLinks);

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

