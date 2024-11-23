let loginform = document.getElementById("loginform") 

loginform.addEventListener("submit", function (e)    {
        e.preventDefault();


        let Myfullname = document.getElementById("fullname")

        if (Myfullname.value == "") {
            alert("input your fullname");
        }

        else {
            alert("this form has successfully submitted");
            console.log(
                `This form has a fullname of ${Myfullname.value}`
            );

            Myfullname.value = "";
        }

    });


