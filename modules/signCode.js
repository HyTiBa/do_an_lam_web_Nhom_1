import { users } from "./informationalObjects.js";
import { setLocalStorage } from "./informationalObjects.js";
let loginedUser = null

export function signCode(){
document.querySelector(".login-btn").addEventListener("click",() => {
    document.querySelector(".popup-box").style.display = "flex";
  })
  
  document.querySelector(".login-txt").addEventListener("click",() => {
    document.querySelector(".signup-form").style.display = "none";
    document.querySelector(".login-form").style.display = "flex";
  })
  
  document.querySelector(".signup-txt").addEventListener("click",() => {
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".signup-form").style.display = "flex";
  })
  
  document.querySelector(".close-form").addEventListener("click",() => {
    document.querySelector(".signup-form").style.display = "none";
    document.querySelector(".login-form").style.display = "flex";
    document.querySelector(".popup-box").style.display = "none"
  })
  
  function checkPwd(P1, P2){
    if(P1 !== P2){
      return false;
    }
    return true;
  }
  function checkEmail(userE){
    for(let i = 0; i < users.length; i++){
      if(userE === users[i].email){
        return false;
      }
    }
    return true;
  }
  

  function addUser(event){
    event.preventDefault();
    let userE = document.getElementsByName('email')[0].value;
    let userN = document.getElementsByName('fname')[0].value;
    let userP1 = document.getElementsByName('password')[0].value;
    let userP2 = document.getElementsByName('confirm_password')[0].value;
    if(!checkEmail(userE)){
      alert('Tài khoản gmail đã tồn tại');
      document.getElementsByName('email')[0].value = '';
      return 0;
    }
    if(checkPwd(userP1, userP2)){
      const user = {
        email: userE,
        userName: userN,
        password: userP1,
        roles: 'Khach hang',
        cart:[]
      };
      alert("Đăng ký tài khoản thành công");
      users.push(user);
      setLocalStorage('users', users);
      document.querySelector(".signup-form").style.display = "none";
      document.querySelector(".login-form").style.display = "flex";
      document.querySelector(".popup-box").style.display = "none"
    }
    else{
      alert('Mat khau nhap lai khong trung khop');
      document.getElementsByName('password')[0].value ="";
      document.getElementsByName('confirm_password')[0].value = "";
    }
  }
  
  function loginAcc(event){
    event.preventDefault();

    let userE = document.querySelector('.login-form #signin_email').value;
    let userP = document.querySelector('.login-form #signin_pws').value;

    for(let i = 0; i < users.length; i++){
      if(userE === users[i].email && userP === users[i].password){
        alert('Đăng nhập thành công');
        loginedUser = users.find(user => user.email == userE);
        document.querySelector(".popup-box").style.display = "none"
        document.querySelector('.login-btn').style.display = 'none';
        document.querySelector('.profile-icon').style.display = 'block';
        document.querySelector('.navbar .sub-menu-wrap .user-info p').textContent = users[i].userName;
        return;
      }
    }
    alert('Tài khoản hoặc mật khẩu không đúng');
    document.querySelector('.login-form #signin_email').value = '';
    document.querySelector('.login-form #signin_pws').value = '';
  }

  function logOut(){
    document.querySelector('.sub-menu-wrap').style.display = 'none';
    document.querySelector('.profile-icon').style.display = 'none';
    document.querySelector('.login-btn').style.display = 'block';
  }
  
  document.getElementById('signup_form').addEventListener('submit', addUser);
  document.getElementById('signin_form').addEventListener('submit', loginAcc);
  document.getElementById('logout-btn').addEventListener('click',logOut);

  document.querySelector('.profile-icon').addEventListener('click', ()=>{
    if(document.querySelector('.sub-menu-wrap').style.display === 'block'){
      document.querySelector('.sub-menu-wrap').style.display = 'none';
    } else{
      document.querySelector('.sub-menu-wrap').style.display = 'block';
    }
  })

  document.addEventListener('click', function(event){
    if(!document.querySelector('.sub-menu-wrap').contains(event.target) && event.target !== document.querySelector('.profile-icon')){
      document.querySelector('.sub-menu-wrap').style.display = 'none';
    }
  })

}