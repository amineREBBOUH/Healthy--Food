function remove(th) {
    $(th).closest("tr").remove();
}

/*
   <ul class="ul2">
                <li>hhh<i class="fa fa-trash-o" aria-hidden="true" onclick="remove(this);"></i></li>
                <li>hhhh<i class="fa fa-trash-o" aria-hidden="true"></i></li>
                <li>uuyty<i class="fa fa-trash-o" aria-hidden="true"></i></li>

            </ul>
*/
//valider form
function valider() {
    // var x = document.getElementById("mySelect").value;
    var nam = document.getElementById('name').value;
    var pre = document.getElementById('pre').value;
    var age = document.getElementById('age').value;
    var pass = document.getElementById('pass').value;
    //valider nam
    var patternam = /^([a-z ]{3,15})$/i;
    var y = document.getElementById("pre1");
    var x = document.getElementById("nam1");
    // alert(patternam.test(nam));
    if (patternam.test(nam)) {
        document.getElementById('name').style.borderColor = "green";
        x.innerHTML = "correct";
        x.style.color = "green";
    } else {
        document.getElementById('name').style.borderColor = "red";
        x.innerHTML = "enter name witout number number min lenght is 3";
        x.style.color = "red";
    }
    //valider prenom
    if (patternam.test(pre)) {
        document.getElementById('pre').style.borderColor = "green";
        y.innerHTML = "correct";
        y.style.color = "green";
    } else {
        document.getElementById('pre').style.borderColor = "red";
        y.innerHTML = "enter prenom without number min lenght is 3";
        y.style.color = "red";
    }
    //valider password
    var patpass = /^([a-zA-Z0-9@]{8,})$/;
    var pass1 = document.getElementById('pass1');
    if (patpass.test(pass)) {
        document.getElementById('pass').style.borderColor = "green";
        pass1.innerHTML = "stronge";
        pass1.style.color = "green";
    } else {
        document.getElementById('pass').style.borderColor = "red";
        pass1.innerHTML = "weak";
        pass1.style.color = "red";
    }
    //valider age
    var age1 = document.getElementById('age1');

    if (age <= 100 && age >= 5) {
        document.getElementById('age').style.borderColor = "green";
        age1.innerHTML = "correct";
        age1.style.color = "green";
    } else {
        document.getElementById('pass').style.borderColor = "red";
        age1.innerHTML = "enter age between 1-100";
        age1.style.color = "red";
    }

}

//valider2
function valider2() {
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    var patternam = /^([a-z ]{3,15})$/i;
    var y = document.getElementById("user22");
    var x = document.getElementById("password22");
    if (patternam.test(user)) {
        document.getElementById('user').style.borderColor = "green";
        y.innerHTML = "correct";
        y.style.color = "green";
    } else {
        document.getElementById('user').style.borderColor = "red";
        y.innerHTML = "enter name witout number number min lenght is 3";
        y.style.color = "red";
    }
    var patpass = /^([a-zA-Z0-9@]{8,})$/;
    if (patpass.test(pass)) {
        document.getElementById('password').style.borderColor = "green";
        x.innerHTML = "stronge";
        x.style.color = "green";
    } else {
        document.getElementById('password').style.borderColor = "red";
        x.innerHTML = "weak";
        x.style.color = "red";
    }



}

function login() {
    var login = document.getElementById('login');
    var singup = document.getElementById('singup');
    login.style.display = 'flex';
    singup.style.display = 'none';

}

function singup() {
    var login = document.getElementById('login');
    var singup = document.getElementById('singup');
    login.style.display = 'none';
    singup.style.display = 'flex';

}



$(document).ready(function() {
    var div6 = $(".ff");
    var div3 = $("#pro");
    var div = $(".form");
    var slide = $("#slide");
    $("#se").click(function() {
        div6.toggle();
        div3.hide();
        div.hide();
        slide.hide();



    });
    $("#product11").click(function() {
        div3.toggle();
        div6.hide();
        div.hide();
        slide.hide();


    });
    $("#carte").click(function() {
        div.toggle();
        div6.hide();
        div3.hide();
        slide.hide();


    });
    //slid
    $("#aws").click(function() {
        slide.slideToggle("slow");
        div.hide();
        div6.hide();
        div3.hide();
    });



});
//swiper
var swiper = new Swiper(".products_slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableredOInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});
//add to carte
function add(thise) {
    $(document).ready(function() {
        var table = document.getElementById('table');
        name = $(thise).closest('.box').children('h2').text();
        // img = $(thise).closest('.box').find('img').attr('src');
        var path = $(thise).closest('.box').find('img').attr('src');
        price = $(thise).closest('.box').children('.price').text();
        //console.log(path);
        table.innerHTML += "<tr><td><img src='" + path + "' alt='' ></td>" + "<td>" + name + "</td>" + "<td>" + price + "</td>" + "<td><i class='fa fa-trash-o' aria-hidden='true' onclick='remove(this);'></i></td></tr>"


    });


}