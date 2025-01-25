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

// ................................signup apply...............................

function addAdmin(){
    let data=
        {
            email: document.getElementById("input1").value,
            pass: document.getElementById("input2").value,
            cpass: document.getElementById("input3").value
        //    date: new Date().getDate()
        }
    
    if(data.pass!=data.cpass){
        seterror("alertpass","*password not match")
        return false;
    }
    else{
    localStorage.setItem("newadmin", JSON.stringify(data))
    Swal.fire({
        title: "Submitted",
        text: "You clicked the button!",
        icon: "success",
        confirmButtonText: "ok"
       
      });
   return true
    }
}


let newadmin_data=JSON.parse(localStorage.getItem("newadmin"));



// ...........................User login.apply...........................


function userlogin(){
    let loginEmail=document.getElementById("input1").value;
    let loginPass=document.getElementById("input2").value;

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




 



// ....................................function for display active admin......................................

// let adminkey=JSON.parse(localStorage.getItem("adminkey"));
// function adminIddisplay(id){
//     let adminId=document.querySelector("#adminId");
//     adminId.innerText=`Admin : ${id}`;
// }



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
        
        <form  onsubmit=" return fetchAdmindata()
">
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
              <input id="btn" type="submit" value="LOGIN">

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
              <input id="btn" type="submit" value="LOGIN">

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


function addAdminWindow(){
    Swal.fire({
        title: 'REGISTER ADMIN',
        html: `
    <section id="signup_sec">
    <div id="btn"></div>
    <div class="continer">
        
        <form action="#" onsubmit=" return InsertAdmindata()">
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
//-------------------------------------------set data in database--------------------------------
async function InsertAdmindata(){
  let admindata=
        {
            email: document.getElementById("input1").value,
            pass: document.getElementById("input2").value,
            cpass: document.getElementById("input3").value
        //    date: new Date().getDate()
        }
    
    if(admindata.pass!=admindata.cpass){
        seterror("alertpass","*password not match")
        return false;
    }
    
    
  fetch("http://localhost:3000/admin",{
    method: "POST",
    headers:{'content-type':'admindata/json'},
    body: JSON.stringify(admindata)

  }).then(r=>Swal.fire({
     title: "Submitted",
     text: "You clicked the button!",
     icon: "success",
     confirmButtonText: "ok"
    
   }));
   return true;
}

// ...........................admin login.apply...........................................


async function fetchAdmindata(){
  let res= await fetch ("http://localhost:3000/admin")
 let data= await res.json();
  data.map((admin)=>{


    let loginEmail=document.getElementById("input1").value;
    let loginPass=document.getElementById("input2").value;

    if(admin.email==loginEmail && admin.pass==loginPass){
      Swal.fire({
        title: "Submitted",
        text: "You clicked the button!",
        icon: "success",
        confirmButtonText: "ok"
       
      });
      let adminId=document.querySelector("#adminId");
      adminId.innerText= "Admin : "+admin.email; 
      return true;
    }
  }
)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">User Not Found?</a>'
          });
        return false;
    
        }
