import { users } from "./informationalObjects.js";
import { setLocalStorage } from "./informationalObjects.js";
export let loginedUser = null
import { adminUserBoardDisplay } from "./adminUserBoard.js";
import { adminUserManage } from "./adminUserManage.js";

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
    document.querySelector('.login-form #signin_email').value = '';
    document.querySelector('.login-form #signin_pws').value = '';
    document.getElementsByName('email')[0].value = '';
    document.getElementsByName('fname')[0].value = '';
    document.getElementsByName('password')[0].value = '';
    document.getElementsByName('confirm_password')[0].value = '';
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
        if(users[i].avt){
          document.querySelector('.navbar .sub-menu-wrap .sub-menu .user-info .user-mini-avt').src = users[i].avt;
        }
        return;
      }
    }
    alert('Tài khoản hoặc mật khẩu không đúng');
    document.querySelector('.login-form #signin_email').value = '';
    document.querySelector('.login-form #signin_pws').value = '';
  }

  function logOut(){
    document.querySelector('.navbar .sub-menu-wrap .sub-menu .user-info .user-mini-avt').src = 'images/user pic.jpg';
    document.querySelector('.sub-menu-wrap').style.display = 'none';
    document.querySelector('.profile-icon').style.display = 'none';
    document.querySelector('.login-btn').style.display = 'block';
    loginedUser = null
  }

  function updateUser(){
    for(let i = 0; i < users.length; i++){
      if(loginedUser.email === users[i].email){
        users[i].avt = document.querySelector('.pop-up-update .update-info .user-avt').src;
        users[i].userName = document.querySelector('.pop-up-update .update-info #updateName').value;
        users[i].address = document.querySelector('.pop-up-update .update-info #updateAddress').value;
        loginedUser = users[i];
        break;
      }
    }
    alert('Cập Nhật Thông Tin Thành Công!');
    document.querySelector('.navbar .sub-menu-wrap .user-info p').textContent = document.querySelector('.pop-up-update .update-info #updateName').value;
    document.querySelector('.navbar .sub-menu-wrap .sub-menu .user-info .user-mini-avt').src = users.find(user => user.email == loginedUser.email).avt;
    document.querySelector('.pop-up-update').style.display = 'none';
    console.log(users);
    adminUserBoardDisplay();
    adminUserManage();
  }

  function updatePassword(){
    let oP = document.querySelector('.pop-up-update .update-password #oldPwd').value;
    let nP = document.querySelector('.pop-up-update .update-password #newPwd').value;
    let rnP = document.querySelector('.pop-up-update .update-password #renewPwd').value;
    console.log(oP + '' + loginedUser.password);
    if(!checkPwd(oP, loginedUser.password)){
      alert('Mật khẩu cũ không chính xác');
      return;
    }
    if(checkPwd(oP, nP)){
      alert('Mật khẩu mới trùng với mật khẩu cũ');
      return;
    }
    if(!checkPwd(nP, rnP)){
      alert('Mật khẩu nhập lại không trùng khớp');
      return;
    }
    for(let i = 0; i < users.length; i++){
      if(loginedUser.email === users[i].email){
        users[i].password = nP;
        loginedUser = users[i];
        break;
      }
    }
    alert('Đổi mật khẩu thành công');
    document.querySelector('.pop-up-update .update-password').style.display = 'none';
    document.querySelector('.pop-up-update .update-info').style.display = 'block';
    document.querySelector('.pop-up-update').style.display = 'none';
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
  
  document.querySelector('.page .navbar .sub-menu-wrap .sub-menu #updateUserInfo-btn').addEventListener('click', ()=>{
    document.querySelector('.sub-menu-wrap').style.display = 'none';
    document.querySelector('.pop-up-update').style.display = 'flex';
    if(loginedUser.avt){
      document.querySelector('.pop-up-update .update-info .user-avt').src = loginedUser.avt;
    } else{
      document.querySelector('.pop-up-update .update-info .user-avt').src = 'images/user pic.jpg';
    }
    document.querySelector('.pop-up-update .update-info #updateName').value = (loginedUser ? loginedUser.userName : '');
    document.querySelector('.pop-up-update .update-info #updateAddress').value = (loginedUser ? loginedUser.address : '');
    document.querySelector('.pop-up-update .update-info #currentPwd').value = (loginedUser ? loginedUser.password : '');
  })

  document.querySelector('.pop-up-update .update-info .yn_btn .deny_btn').addEventListener('click', () =>{
    document.querySelector('.pop-up-update').style.display = 'none';
  })

  document.querySelector('.pop-up-update .update-info .form-container').addEventListener('submit', (event) =>{
    event.preventDefault();
    updateUser();
  })

  document.querySelector('.pop-up-update .update-info .user-avt').addEventListener('click', () => {
    let imgeUpload = document.querySelector('.pop-up-update .update-info #upload-avt');
    imgeUpload.click();
  })

  document.querySelector('.pop-up-update .update-info #upload-avt').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(file){
      if(file.type.startsWith('image/')){
        const reader = new FileReader();
        reader.onload = function(e){
          document.querySelector('.pop-up-update .update-info .user-avt').src = e.target.result;
        }
        reader.readAsDataURL(file);

      } else{
        alert('File ảnh không hợp lệ');
      }
    }
  })

  document.querySelector('.pop-up-update .update-info .change-password .changePwd-btn').addEventListener('click', () => {
    document.querySelector('.pop-up-update .update-info').style.display = 'none';
    document.querySelector('.pop-up-update .update-password').style.display = 'block';
    document.querySelector('.pop-up-update .update-password #oldPwd').value = '';
    document.querySelector('.pop-up-update .update-password #newPwd').value = '';
    document.querySelector('.pop-up-update .update-password #renewPwd').value = '';
  })

  document.querySelector('.pop-up-update .update-password .yn_btn .deny_btn').addEventListener('click', () => {
    document.querySelector('.pop-up-update .update-password').style.display = 'none';
    document.querySelector('.pop-up-update .update-info').style.display = 'block';
  })

  document.querySelector('.pop-up-update .update-password .form-container').addEventListener('submit', (event) => {
    event.preventDefault();
    updatePassword();
  })
}