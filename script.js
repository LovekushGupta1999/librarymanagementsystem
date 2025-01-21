// ................................signup apply...............................

function signup(){
    let data=
        {
            email: document.getElementById("input1").value,
            pass: document.getElementById("input2").value,
            cpass: document.getElementById("input3").value
           
        }
    
    if(data.pass!=data.cpass){
        seterror("alertpass","*password not match")
        return false;
    }
    else{
    localStorage.setItem("signup", JSON.stringify(data))
    }
}


let signup_data=JSON.parse(localStorage.getItem("signup"));


// ...........................User login.apply...........................


function userlogin(){
    let loginEmail=document.getElementById("email").value;
    let loginPass=document.getElementById("password").value;

    if(signup_data.email!=loginEmail || signup_data.pass!=loginPass){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">User Not Found?</a>'
          });
        return false;
    }
}

// ...........................admin login.apply...........................


function adminlogin(){
    let admin_data={
        email: "lovekush@123",
        pass: "12345"
    }

    let loginEmail=document.getElementById("email").value;
    let loginPass=document.getElementById("password").value;

    if(admin_data.email!=loginEmail || admin_data.pass!=loginPass){
        // Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Something went wrong!",
        //     footer: '<a href="#">User Not Found?</a>'
        //   });
        return false;
    }
}



// ..............................validation error print function......................

function seterror(id , err){
    let err_message=document.getElementById(id);
    err_message.innerHTML=err;

}
//.................................alert Message........................................

function adminwindow(){
    Swal.fire({
        title: 'ADMIN LOGIN',
        html: `
    <section id="signup_sec">
    <div id="btn"></div>
    <div class="continer">
        
        <form action="admindashboard.html" onsubmit=" return adminlogin()">
            <div class="from-group">
                <input type="email" id="input1" required>
              <label for="input1">Email :</label>
              <i class="fa-regular fa-envelope"></i>
            </div>
            <p id="alertmes"></p>
              

              <div class="from-group">
                <input type="password"  id="input2" required>
                <label for="input2">password :</label>
                <i class="fa-solid fa-lock"></i>

              </div>
            <p id="alertpass"></p>

              <!-- <div class="from-group">
                <input type="text"id="input3" required>
                <label for="input3">Confirm password :</label>
                <i class="fa-solid fa-lock"></i>

              </div>
            <p id="alertmes"></p> -->

             <p>
                <input type="checkbox"> Remeber me <a href="#">Forgot Password</a>
            </p>
              <input id="btn" type="submit" value="signup">

               <p>Don't have a Account ? <a href="#">Register</a></p> 
        </form>
    
    </div>
  </section>
        `,
        // icon: 'info',
        confirmButtonText: 'Close'
    });
};



function Userwindow(){
    Swal.fire({
        title: 'USER LOGIN',
        html: `
    <section id="signup_sec">
    <div id="btn"></div>
    <div class="continer">
        
        <form action="loginaccount.html" onsubmit=" return userlogin()">
            <div class="from-group">
                <input type="email" id="input1" required>
              <label for="input1">Email :</label>
              <i class="fa-regular fa-envelope"></i>
            </div>
            <p id="alertmes"></p>
              

              <div class="from-group">
                <input type="password"  id="input2" required>
                <label for="input2">password :</label>
                <i class="fa-solid fa-lock"></i>

              </div>
            <p id="alertpass"></p>

              <!-- <div class="from-group">
                <input type="text"id="input3" required>
                <label for="input3">Confirm password :</label>
                <i class="fa-solid fa-lock"></i>

              </div>
            <p id="alertmes"></p> -->

             <p>
                <input type="checkbox"> Remeber me <a href="#">Forgot Password</a>
            </p>
              <input id="btn" type="submit" value="signup">

               <p>Don't have a Account ? <a href="#">Register</a></p> 
        </form>
    
    </div>
  </section>
        `,
        // icon: 'info',
        confirmButtonText: 'Close'
    });
};

function Registerwindow(){
    Swal.fire({
        title: 'REGISTER',
        html: `
    <section id="signup_sec">
    <div id="btn"></div>
    <div class="continer">
        
        <form action="loginaccount.html" onsubmit=" return signup()">
            <div class="from-group">
                <input type="email" id="input1" required>
              <label for="input1">Email :</label>
              <i class="fa-regular fa-envelope"></i>
            </div>
            <p id="alertmes"></p>
              

              <div class="from-group">
                <input type="password"  id="input2" required>
                <label for="input2">password :</label>
                <i class="fa-solid fa-lock"></i>

              </div>
            <p id="alertpass"></p>

               <div class="from-group">
                <input type="text"id="input3" required>
                <label for="input3">Confirm password :</label>
                <i class="fa-solid fa-lock"></i>

              </div>
            <p id="alertmes"></p> 

          <!--   <p>
                <input type="checkbox"> Remeber me <a href="#">Forgot Password</a>
            </p> --!>
            <p></p>
              <input id="btn" type="submit" value="signup">

              <!-- <p>Don't have a Account ? <a href="#">Register</a></p> -->
        </form>
    
    </div>
  </section>
        `,
        // icon: 'info',
        confirmButtonText: 'Close'
    });
};