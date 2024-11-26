import { users } from "./informationalObjects.js";
import { setLocalStorage } from "./informationalObjects.js";
import { adminUserBoardDisplay } from "./adminUserBoard.js";

export function adminUserManage(){

    let userED = null;

    function updateUser(){
        if(userED != null){
            let userN = document.querySelector('.adminUserBoard .pop-ups .modify #modify_name').value;
            let userP = document.querySelector('.adminUserBoard .pop-ups .modify #modify_pwd').value;
            let userR = document.querySelector('.adminUserBoard .pop-ups .modify #modify_role').value;

            for(let i = 0; i < users.length; i++){
                if(userED === users[i].email){
                    users[i].userName = userN;
                    users[i].password = userP;
                    users[i].roles = userR;
                    break;
                }
            }
            alert('Cập nhật người dùng thành công');
            document.querySelector(".adminUserBoard .pop-ups .modify").style.display = 'none';
            document.querySelector(".adminUserBoard .pop-ups").style.display = 'none';
            document.querySelector('.adminUserPage .top-section .adminUserSearch .search-box input').value = '';
            adminUserBoardDisplay();
            reattachEventListenerAdminUserBoard();
        }
    }

    function reattachEventListenerAdminUserBoard(){
        document.querySelectorAll(".adminUserBoard .actions .modify").forEach((button) => {
            button.addEventListener('click', (event) =>{
                document.querySelector(".adminUserBoard .pop-ups").style.display = 'flex';
                document.querySelector(".adminUserBoard .pop-ups .modify").style.display = 'flex';
                userED = event.target.closest(".user").querySelector(".info .email").textContent;
                for(let i = 0; i < users.length; i++){
                    if(userED === users[i].email){
                        document.querySelector('.adminUserBoard .pop-ups .modify #modify_name').value = users[i].userName;
                        document.querySelector('.adminUserBoard .pop-ups .modify #modify_pwd').value = users[i].password;
                        document.querySelector('.adminUserBoard .pop-ups .modify #modify_role').value = users[i].roles;
                        break;
                    }
                }
            })
        })
    
        if(document.querySelector('.adminUserBoard .pop-ups .modify .form-container')){
            document.querySelector('.adminUserBoard .pop-ups .modify .form-container').addEventListener('submit', (event) =>{
                event.preventDefault();
                updateUser();
             })
        }

        if(document.querySelector(".adminUserBoard .btn-close")){
            document.querySelector(".adminUserBoard .btn-close").addEventListener('click', () =>{
                document.querySelector(".adminUserBoard .pop-ups .modify").style.display = 'none';
                document.querySelector(".adminUserBoard .pop-ups").style.display = 'none';
            })
        }

        document.querySelectorAll(".adminUserBoard .actions .remove").forEach((button) => {
            button.addEventListener('click', (event) =>{
                document.querySelector(".adminUserBoard .pop-ups").style.display = 'flex';
                document.querySelector(".adminUserBoard .pop-ups .remove").style.display = 'block';
                userED = event.target.closest(".user").querySelector(".info .email").textContent;
            })
        
        })

        if(document.querySelector('.adminUserBoard .pop-ups .remove .cfm_btn')){
            document.querySelector('.adminUserBoard .pop-ups .remove .cfm_btn').addEventListener('click', () =>{
                if(userED != null){
                    for(let i = 0; i < users.length; i++){
                        if(userED === users[i].email){
                            users.splice(i, 1);
                            break;
                        }
                    }
                    alert('Xóa người dùng thành công');
                    document.querySelector(".adminUserBoard .pop-ups .remove").style.display = 'none';
                    document.querySelector(".adminUserBoard .pop-ups").style.display = 'none';
                    document.querySelector('.adminUserPage .top-section .adminUserSearch .search-box input').value = '';
                    adminUserBoardDisplay();
                    reattachEventListenerAdminUserBoard();
                }
            })
        }

        if(document.querySelector(".adminUserBoard .deny_btn")){
            document.querySelector(".adminUserBoard .deny_btn").addEventListener('click', () => {
                document.querySelector(".adminUserBoard .pop-ups .remove").style.display = 'none';
                document.querySelector(".adminUserBoard .pop-ups").style.display = 'none';
            })
        }
    }
    function checkEmail(userE){
        for(let i = 0; i < users.length; i++){
          if(userE === users[i].email){
            return false;
          }
        }
        return true;
      }

    function adminAddUser(){
        let userE = document.querySelector('.adminUserPage .top-section .add-user #added_email').value;
        let userN = document.querySelector('.adminUserPage .top-section .add-user #added_name').value;
        let userP = document.querySelector('.adminUserPage .top-section .add-user #added_pwd').value;
        let userR = document.querySelector('.adminUserPage .top-section .add-user #added_role').value;
        if(!checkEmail(userE)){
            alert('Tài khoản gmail đã tồn tại!');
            return 0;
        }
        const user = {
            avt: null,
            email: userE,
            userName: userN,
            password: userP,
            address: null,
            roles: userR,
            cart:[]
        }
        //setLocalStorage('user', user);
        users.push(user);
        alert('Thêm Người Dùng Thành Công');
        document.querySelector('.adminUserPage .top-section .add-user #added_email').value ='';
        document.querySelector('.adminUserPage .top-section .add-user #added_name').value ='';
        document.querySelector('.adminUserPage .top-section .add-user #added_pwd').value = '';
        document.querySelector('.adminUserPage .top-section .pop-ups').style.display = 'none';
        document.querySelector('.adminUserPage .top-section .adminUserSearch .search-box input').value = '';
        adminUserBoardDisplay();
        reattachEventListenerAdminUserBoard();
    }
    
    reattachEventListenerAdminUserBoard();

    document.querySelector('.adminUserPage .top-section .addUser_btn').addEventListener('click', () =>{
        document.querySelector('.adminUserPage .top-section .pop-ups').style.display = 'flex';
    })

    document.querySelector('.adminUserPage .top-section .pop-ups .add-user .btn-close').addEventListener('click', () =>{
        document.querySelector('.adminUserPage .top-section .pop-ups .add-user #added_email').value ='';
        document.querySelector('.adminUserPage .top-section .pop-ups .add-user #added_name').value ='';
        document.querySelector('.adminUserPage .top-section .pop-ups .add-user #added_pwd').value ='';
        document.querySelector('.adminUserPage .top-section .pop-ups').style.display = 'none';
    })

    document.querySelector('.adminUserPage .top-section .add-user .form-container').addEventListener('submit', (event) =>{
        event.preventDefault();
        adminAddUser();
    })

    document.querySelector('.adminUserPage .top-section .adminUserSearch .search-box input').addEventListener('input', (event) =>{
        let userArr = [];
        let searchInput = document.querySelector('.adminUserPage .top-section .adminUserSearch .search-box input').value;
        if(searchInput == ''){
            adminUserBoardDisplay();
            reattachEventListenerAdminUserBoard();
            return 0;
        }

        for(let i = 0; i < users.length; i++){
            if(users[i].userName.toLocaleLowerCase().includes(searchInput.toLowerCase())
            || users[i].email.toLocaleLowerCase().includes(searchInput.toLowerCase())){
                userArr.push(users[i]);
            }
        }
        adminUserBoardDisplay(userArr);
        reattachEventListenerAdminUserBoard();

    })
}