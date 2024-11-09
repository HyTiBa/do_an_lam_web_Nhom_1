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
    document.querySelector(".signup-form").style.display = "flex";
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".popup-box").style.display = "none"
  })
  
  const userArr = [];
  const productArr = [];
  
  function checkPwd(P1, P2){
    if(P1 !== P2){
      return false;
    }
    return true;
  }
  function checkEmail(userE){
    return true;
  }
  
  function addUser(event){
    event.preventDefault();
    let userE = document.getElementsByName('email')[0].value;
    let userN = document.getElementsByName('fname')[0].value;
    let userP1 = document.getElementsByName('password')[0].value;
    let userP2 = document.getElementsByName('confirm_password')[0].value;
    if(!checkEmail){
      alert('Tai khoan Gmail da ton tai');
      return 0;
    }
    if(checkPwd(userP1, userP2)){
      const user = {
        email: userE,
        userName: userN,
        password: userP1,
        roll: 'Khach hang'
      };
      userArr.push(user);
    }
    else{
      alert('Mat khau nhap lai khong trung khop');
      document.getElementsByName('password')[0].value ="";
      document.getElementsByName('confirm_password')[0].value = "";
    }
  }
  
  function loginAcc(event){
    event.preventDefault();
  }
  
  document.getElementById('signup_form').addEventListener('submit', addUser);
  document.getElementById('signin_form').addEventListener('submit', loginAcc);
}