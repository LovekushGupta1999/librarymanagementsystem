//-----------------------------Register admin  function------------------------------------------------
function addAdminWindow(){
  let adminid=document.getElementById("adminId").innerText

  if(adminid!=""){
  Swal.fire({
      title: 'REGISTER ADMIN',
      html: `
  <section id="signup_sec">
  <div id="btn"></div>
  <div class="continer">
      
      <form action="#" onsubmit=" return InsertAdmindata()">
      <div class="from-group">
              <input type="text" id="input" required>
            <label for="input">Name :</label>
            <i class="fa-regular fa-envelope"></i>
          </div>
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
}
}

//-------------------------------------------set data in database--------------------------------
async function InsertAdmindata(){
  let admindata=
        {
            adname: document.getElementById("input").value,
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

//.................................admin login function........................................

function adminwindow(){
  Swal.fire({
      title: 'ADMIN LOGIN',
      html: `
  <section id="signup_sec">
  <div id="btn"></div>
  <div class="continer">
      
      <form  onsubmit="return Adminlogin()
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


// ...........................admin login.apply...........................................


async function Adminlogin(){

  
  let loginEmail=document.getElementById("input1").value;
  let loginPass=document.getElementById("input2").value;


  let res= await fetch ("http://localhost:3000/admin")
  let data= await res.json();
  data.map((admin)=>{


    if(admin.email==loginEmail && admin.pass==loginPass){
      Swal.fire({
        title: "Submitted",
        text: "You clicked the button!",
        icon: "success",
        confirmButtonText: "ok"
       
      });
      let adminId=document.querySelector("#adminId");
      adminId.innerHTML= `Admin : ${admin.email}`; 
      log=true
      display();
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







// ..............................validation error print function......................

function seterror(id , err){
    let err_message=document.getElementById(id);
    err_message.innerHTML=err;

}

//------------------------------------library data insert window----------------------------------------
function addbookwindow(){
  let adminid=document.getElementById("adminId").innerText

  if(adminid!=""){

  Swal.fire({
    title: 'INSERT BOOK DATA  ',
    html:` <div id="editform">
   
<form action="#" onsubmit="return insertlibraryData()">
    <label for="bookn">Book Name</label>
    <input type="text"  id="bookn"><br>

    <label for="author">Author</label>
    <input type="text" id="author"><br>

     <label for="category">Category</label>
    <input type="text"   id="category"><br>

    <label for="date1">Publication Year</label>
    <input type="number"  id="date1"><br>

    <label for="bnumber">Number of Books</label>
    <input type="number"  id="bnumber"><br>

    <input id="updatebtn" type="submit"    value="Update" >
</form>
</div>
    `,
    // icon: 'info',
    // confirmButtonText: 'Close'
});
  }
}
// ------------------------------------ library data inserted-------------------------------------------

async function insertlibraryData() {
  // e.preventDefault();
  let libraryData={
     BookName:document.getElementById("bookn").value,
     Author:document.getElementById("author").value,
     Category:document.getElementById("category").value,
     PublicationYear :document.getElementById("date1").value,
     NumberofBooks:document.getElementById("bnumber").value
    //  bookName:document.getElementById("").value,
  };

  fetch("http://localhost:3000/libraryData",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body: JSON.stringify(libraryData)

  }).then(r=>alert("update book")
    
   
  );
  
  // preventDefault();
  return false;

  
}
//------------------------------------issue book  window----------------------------------------
function issuebookwindow(){
  let adminid=document.getElementById("adminId").innerText

  if(log!=false){
    document.getElementById("updatesection").classList.toggle('updatesection')
  // Swal.fire({
    // title: 'INSERT BOOK DATA  ',
    document.getElementById("updatesection").innerHTML=` <div id="editform">
   <div class="form-container">

    <label for="bookn">Book Name</label>
    <input type="text"  id="bookn"><br>

    <label for="author">Author</label>
    <input type="text" id="author"><br>

     <label for="category">Category</label>
    <input type="text"   id="category"><br>

    <label for="date1">Publication Year</label>
    <input type="number"  id="date1"><br>

    <label for="stuid">Student Email</label>
    <input type="email"  id="stuid"><br>

    <button id="updatebtn" onclick="issuebookData()">Issued</button>
</div>
</div>
    `
    // ,
    // icon: 'info',
    // confirmButtonText: 'Close'
// });
  }
}

// ------------------------------------ issue book data inserted-------------------------------------------

async function issuebookData() {
  let libraryData={
     BookName:document.getElementById("bookn").value,
     Author:document.getElementById("author").value,
     Category:document.getElementById("category").value,
     PublicationYear :document.getElementById("date1").value,
     studentid:document.getElementById("stuid").value
    //  bookName:document.getElementById("").value,
  };

  fetch("http://localhost:3000/issuebook",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body: JSON.stringify(libraryData)

  }).then(r=>Swal.fire({
    title: "Submitted",
    text: "You clicked the button!",
    icon: "success",
    confirmButtonText: "ok"
   
  }));
 
  return true;

  
}

//--------------------------------------------show books details-------------------------------------

async function displayBook(){


  if(log!=false){
  Swal.fire({
    title: 'books data ',
    width:'80%',
    html: `<div id="table_data">
    <table style="border= 2px solid black">
    <thead> 
    <th>Book Name</th>
    <th>Author</th>
    <th>Category</th>
    <th>Publication</th>
    <th>Number of Books</th>
    <th>Operation</th>
    </thead>

    <tbody id="showdata">  </tbody>
    </table>
    </div>
    `,
    // icon: 'info',
    confirmButtonText: 'Close'
});


  
  let a= await fetch("http://localhost:3000/libraryData");
  let b= await a.json();
  let database= b.map((data)=>
`

<tr>

<td>${data.BookName}</td>
<td>${data.Author}</td>
<td>${data.Category}</td>
<td>${data.PublicationYear}</td>
<td>${data.NumberofBooks}</td>
<td><button onclick="delete_data('${data.id}')"><i class="fa-solid fa-trash"></i></button>
<button onclick="edit('${data.id}')"><i class="fa-solid fa-user-pen"></i></button></td>

</tr>
</table>`).join(" ")
document.getElementById("showdata").innerHTML=database;

  }

}
// ........................Deletion data function..................................


function delete_data(id){
  fetch(`http://localhost:3000/libraryData/${id}`,{
      method: "DELETE"
  }).then(r=>Swal.fire({
    title: "DELETED",
    text: "You clicked the button!",
    icon: "success",
    confirmButtonText: "ok"
   
  }));
}

function delete_issuedata(id){
  fetch(`http://localhost:3000/issuebook/${id}`,{
      method: "DELETE"
  }).then(r=>Swal.fire({
    title: "DELETED",
    text: "You clicked the button!",
    icon: "success",
    confirmButtonText: "ok"
   
  }));
}
function delete_userdata(id){
  fetch(`http://localhost:3000/user/${id}`,{
      method: "DELETE"
  }).then(r=>Swal.fire({
    title: "DELETED",
    text: "You clicked the button!",
    icon: "success",
    confirmButtonText: "ok"
   
  }));
}
function delete_admindata(id){
  fetch(`http://localhost:3000/user/${id}`,{
      method: "DELETE"
  }).then(r=>Swal.fire({
    title: "DELETED",
    text: "You clicked the button!",
    icon: "success",
    confirmButtonText: "ok"
   
  }));
}
//--------------------------------------------show issued books details-------------------------------------

async function displayissuedBook(){

  if(log!=false){
  Swal.fire({
    title: 'Issued books data ',
    width:'80%',
    html: `<div id="table_data">
    <table style="border= 2px solid black">
    <thead> 
    <th>Book Name</th>
    <th>Author</th>
    <th>Category</th>
    <th>Publication</th>
    <th>Number of Books</th>
    <th>Operation</th>
    </thead>

    <tbody id="showdata">  </tbody>
    </table>
    </div>
    `,
    // icon: 'info',
    confirmButtonText: 'Close'
});


  
  let a= await fetch("http://localhost:3000/issuebook");
  let b= await a.json();
  let database= b.map((data)=>
  
`

<tr>

<td>${data.BookName}</td>
<td>${data.Author}</td>
<td>${data.Category}</td>
<td>${data.PublicationYear}</td>
<td>${data.studentid}</td>
<td><button onclick="delete_issuedata('${data.id}')"><i class="fa-solid fa-trash"></i></button>
<button onclick="edit('${data.id}')"><i class="fa-solid fa-user-pen"></i></button></td>

</tr>
</table>`).join(" ")
document.getElementById("showdata").innerHTML=database;


  }

}


//------------------------------------display Author details-------------------------
async function displayAuthor(){

  if(log!=false){
  Swal.fire({
    title: 'Authors data ',
    width:'80%',
    html: `<div id="table_data">
    <table style="border= 2px solid black">
    <thead> 
    <th>Author</th>
    <th>Category</th>
    <th>Publish Books Name</th>
    <th>Publication</th>
    <th>Operation</th>
    </thead>

    <tbody id="showdata">  </tbody>
    </table>
    </div>
    `,
    // icon: 'info',
    confirmButtonText: 'Close'
});


  
  let a= await fetch("http://localhost:3000/libraryData");
  let b= await a.json();
  let database= b.map((data)=>
`

<tr>

<td>${data.Author}</td>
<td>${data.Category}</td>
<td>${data.BookName}</td>
<td>${data.PublicationYear}</td>

<td><button onclick="delete_data('${data.id}')"><i class="fa-solid fa-trash"></i></button>
<button onclick="edit('${data.id}')"><i class="fa-solid fa-user-pen"></i></button></td>

</tr>
</table>`).join(" ")
document.getElementById("showdata").innerHTML=database;


  }
}

//------------------------------------display categories of books-------------------------------
async function displaycategory(){
    if(log!=false){
  Swal.fire({
    title: 'Books Categories ',
    width:'80%',
    html: `<div id="table_data">
    <table style="border= 2px solid black">
    <thead> 
    <th>Category</th>
    </thead>

    <tbody id="showdata">
    <tr> <td>Mathematics</td></tr>
 <tr> <td>Science</td></tr>
 <tr> <td>English</td></tr>
 <tr> <td>Sanskrit</td></tr>
 <tr> <td>Hindi</td></tr>
  <tr><td>General Science</td></tr>
  <tr><td>Computer Science</td> </tr> </tbody>
    </table>
    </div>
    `,
    // icon: 'info',
    confirmButtonText: 'Close'
});


  
  let a= await fetch("http://localhost:3000/libraryData");
  let b= await a.json();
  let database= b.map((data)=> {    
    if(data.Category.toLowerCase()!="mathematics" && "science" && "english" && "sanskrit" && "general science" && "computer science" && "hindi"){

`

<tr>
 
  <td>${data.Category}</td>
  
<td><button onclick="delete_data('${data.id}')"><i class="fa-solid fa-trash"></i></button>
<button onclick="edit('${data.id}')"><i class="fa-solid fa-user-pen"></i></button></td>

</tr>`}}).join(" ")
document.getElementById("showdata").innerHTML +=database;

    }
  }


//-------------------------------------display user data in table------------------------------------

async function displayuser(){
  if(log!=false){
  Swal.fire({
    title: 'Users data ',
    width:'80%',
    html: `<div id="table_data">
    <table style="border= 2px solid black">
    <thead> 
    <th>User Name</th>
    <th>Contact</th>
    <th>Email</th>
    <th>Password</th>
    <th>Operation</th>
    </thead>

    <tbody id="showdata">  </tbody>
    </table>
    </div>
    `,
    // icon: 'info',
    confirmButtonText: 'Close'
});


  
  let a= await fetch("http://localhost:3000/user");
  let b= await a.json();
  let database= b.map((data)=>
`

<tr>

<td>${data.Uname}</td>
<td>${data.contactno}</td>
<td>${data.email}</td>
<td>${data.cpass}</td>
<td><button onclick="delete_userdata('${data.id}')"><i class="fa-solid fa-trash"></i></button>
<button onclick="edit('${data.id}')"><i class="fa-solid fa-user-pen"></i></button></td>

</tr>
</table>`).join(" ")
document.getElementById("showdata").innerHTML=database;

  }

}

//-----------------------------------------display admin data-------------------------
async function displayadmin(){

  if(log!=false){
  Swal.fire({
    title: 'Admin data ',
    width:'80%',
    html: `<div id="table_data">
    <table style="border= 2px solid black">
    <thead> 
    <th>Admin Id</th>
    
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Operation</th>
    </thead>

    <tbody id="showdata">  </tbody>
    </table>
    </div>
    `,
    // icon: 'info',
    confirmButtonText: 'Close'
});


  
  let a= await fetch("http://localhost:3000/admin");
  let b= await a.json();
  let database= b.map((data)=>
`

<tr>

<td>${data.id}</td>
<td>${data.adname}</td>
<td>${data.email}</td>
<td>${data.cpass}</td>
<td><button onclick="delete_admindata('${data.id}')"><i class="fa-solid fa-trash"></i></button>
<button onclick="edit('${data.id}')"><i class="fa-solid fa-user-pen"></i></button></td>

</tr>
</table>`).join(" ")
document.getElementById("showdata").innerHTML=database;

  }

}


//----------------------------------------display details---------------------------------------
async function display(){
  

 let book=0
 let author=0
 let Category=7
let a= await fetch("http://localhost:3000/libraryData");
let b= await a.json();
b.map((data)=>{
  if(data.NumberofBooks!=""){
  book+=parseInt(data.NumberofBooks)
  }
  if(data.Author!=""){
    author=author+1;
  }
  if(data.Category.toLowerCase()!="mathematics" && "computer science" && "science" && "english" && "sanskrit" && "gs" && "hindi" && "it"){
    Category=Category+1;
  }
 
  

}
)


let noofuser=0
let c= await fetch("http://localhost:3000/user");
let d= await c.json();
d.map((data)=>{
 noofuser=noofuser+1;
}
)

let issuebook=0
let e= await fetch("http://localhost:3000/issuebook");
let f= await e.json();
f.map((data)=>{
  issuebook=issuebook+1
})
document.getElementById("nouser").innerHTML=noofuser
document.getElementById("nobook").innerHTML=book
document.getElementById("noauthor").innerHTML=author
document.getElementById("nocategory").innerHTML=Category
document.getElementById("noissuebook").innerHTML=issuebook;
document.getElementById("issuebook").innerHTML=issuebook;

}



//-----------------------------users function-----------------------------------------------
// -----------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

//---------------------------------------user data insertion function---------------------
async function Insertuserdata(){
  let admindata=
        {
            Uname: document.getElementById("username").value,
            contactno: document.getElementById("monumber").value,
            email: document.getElementById("input1").value,
            cpass: document.getElementById("input3").value
            // date: new Date().getDate()
        }
         
        let pass=document.getElementById("input2").value
    
    if(pass!=admindata.cpass){
        seterror("alertpass","*password not match")
        return false;
    }
    
    
  fetch("http://localhost:3000/user",{
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
  
  // ...........................User login.apply...........................

var log=false
async function userlogin(){
  let loginEmail=document.querySelector("#input1").value;
  let loginPass=document.getElementById("input2").value;

  let res= await fetch ("http://localhost:3000/user")
  let data= await res.json();
   data.map((user)=>{
 
    if(user.email==loginEmail && user.cpass==loginPass){
       Swal.fire({
         title: "Submitted",
         text: "You clicked the button!",
         icon: "success",
         confirmButtonText: "ok"
        
       });
       let adminId=document.querySelector("#userId");
       adminId.innerHTML= ` <i class="fa-solid fa-user-check"></i>${user.email}` 
       log=true;
       displayuserinterfacedata()
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

//--------------------------------user login window------------------------------

function Userwindow(){
  Swal.fire({
      title: 'USER LOGIN',
      html: `
  <section id="signup_sec">
  <div id="btn"></div>
  <div class="continer">
      
      <form action="#" onsubmit=" return userlogin()">
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

function UserRegisterwindow(){
   Swal.fire({
      title: 'REGISTER NEW USER',
      html: `
  <section id="signup_sec">
  <div id="btn"></div>
  <div class="continer" id="poiyt">
      
      <form action="#" onsubmit=" return Insertuserdata()">
       <div class="from-group">
              <input type="text"  id="username" required>
              <label for="username">Name :</label>
              <i class="fa-solid fa-lock"></i>
              </div>

             <div class="from-group">
              <input type="number"  id="monumber" required>
              <label for="monumber">Contact No :</label>
             <i class="fa-solid fa-phone"></i>
              </div>

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


//----------------------------------user Account update-------------------------------------

async function displayuserdata(){
  let email=document.getElementById("userId").innerText
  
  if(log!=false){
  let a= await fetch(`http://localhost:3000/user`);
  let b= await a.json();
  b.map((data)=>{
         if(data.email==email)
        {
        Swal.fire({
          title: 'USER PROFILE',
          html:` <div id="editform">
         <div class="form-container">

         <label for="usid">Id :</label>
          <input type="text" value='${data.id}' id="usid" readonly><br>
      
          <label for="usnam">Name :</label>
          <input type="text" value='${data.Uname}' id="usnam"><br>
      
          <label for="mono">Contact NO :</label>
          <input type="text"  value='${data.contactno}' id="mono"><br>
      
           <label for="email">Email :</label>
          <input type="text"   value='${data.email}' id="email"><br>
      
          <label for="cpass">Password :</label>
          <input type="text" value='${data.cpass}' id="cpass"><br>
      
       <button id="updatebtn" onclick="updateuserData(${data.id})">Update</button>
      </div>
      </div>
          `,
          // icon: 'info',
          confirmButtonText: 'Close'
      });
}})
  }
}



//-------------------------update user data----------------------------------
function updateuserData(id){ 
  
  let update_data={
      id: document.querySelector("#usid").value,
      Uname: document.querySelector("#usnam").value,
      contactno: document.querySelector("#mono").value,
      email:document.getElementById("email").value,
      cpass:document.getElementById("cpass").value
  }

  // console.info(update_data)

  fetch(`http://localhost:3000/user/${id}`,{
      method:"PUT",
      headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify(update_data)
  }).then(r=>alert("updated.........!!"))


}

//-----------------------------display user interface details-----------
async function displayuserissuedbook(){
  let email=document.getElementById("userId").innerText
  
  Swal.fire({
    title: 'Issued books data ',
      width:'80%',
      html: `<div id="table_data">
      <table style="border= 2px solid black">
      <thead> 
      <th>Book Name</th>
      <th>Author</th>
      <th>Category</th>
      <th>Publication</th>
      <th>Number of Books</th>
      <th>Operation</th>
      </thead>
  
      <tbody id="showdata">  </tbody>
      </table>
      </div>
      `,
      // icon: 'info',
      confirmButtonText: 'Close'
  });
  
  let issuebook=0
  
  let database=""
    let a= await fetch("http://localhost:3000/issuebook");
    let b= await a.json();
     b.map((data)=>{
     
      console.log(data.studentid)
      
      if(data.studentid==email)
        {
          issuebook=issuebook+1
          database+= `
  
  <tr>
  
  <td>${data.BookName}</td>
  <td>${data.Author}</td>
  <td>${data.Category}</td>
  <td>${data.PublicationYear}</td>
  <td>${data.studentid}</td>
  <td><button onclick="delete_data('${data.id}')"><i class="fa-solid fa-trash"></i></button>
  <button onclick="edit('${data.id}')"><i class="fa-solid fa-user-pen"></i></button></td>
  
  </tr>
  </table>`}})
  document.getElementById("showdata").innerHTML=database;
  
  
}



// let e= await fetch("http://localhost:3000/issuebook");
// let f= await e.json();
// f.map((data)=>{
  //   issuebook=issuebook+1
  // })
  async function displayuserinterfacedata(){
    let email=document.getElementById("userId").innerText
    let issuebook=0
  
      let a= await fetch("http://localhost:3000/issuebook");
      let b= await a.json();
       b.map((data)=>{
       if(data.studentid==email)
    {
      issuebook=issuebook+1}})
    
    document.getElementById("isbook").innerText=issuebook;
document.getElementById("nomag").innerHTML="4"
document.getElementById("noauthor").innerHTML="5"
document.getElementById("nocate").innerHTML="10"
}


