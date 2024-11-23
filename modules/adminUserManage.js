import { users } from "./informationalObjects.js";
import { setLocalStorage } from "./informationalObjects.js";
import { adminUserBoardDisplay } from "./adminUserBoard.js";

export function adminUserManage(){


    function reattachEventListenerAdminUserBoard(){
        document.querySelectorAll(".actions .modify").forEach((button) => {
            button.addEventListener('click', () =>{
                document.querySelector(".adminUserBoard .pop-ups").style.display = 'flex';
                document.querySelector(".adminUserBoard .pop-ups .modify").style.display = 'flex';
            })
        })
    
        document.querySelector(".adminUserBoard .btn-close").addEventListener('click', () =>{
            document.querySelector(".adminUserBoard .pop-ups .modify").style.display = 'none';
            document.querySelector(".adminUserBoard .pop-ups").style.display = 'none';
        })
    
        document.querySelectorAll(".actions .remove").forEach((button) => {
            button.addEventListener('click', () =>{
                document.querySelector(".adminUserBoard .pop-ups").style.display = 'flex';
                document.querySelector(".adminUserBoard .pop-ups .remove").style.display = 'block';
            })
        
        })
        document.querySelector(".adminUserBoard .deny_btn").addEventListener('click', () => {
            document.querySelector(".adminUserBoard .pop-ups .remove").style.display = 'none';
            document.querySelector(".adminUserBoard .pop-ups").style.display = 'none';
        })
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
        let userE = document.querySelector('.top-section .add-user #added_email').value;
        let userN = document.querySelector('.top-section .add-user #added_name').value;
        let userP = document.querySelector('.top-section .add-user #added_pwd').value;
        let userR = document.querySelector('.top-section .add-user #added_role').value;
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
        document.querySelector('.top-section .add-user #added_email').value ='';
        document.querySelector('.top-section .add-user #added_name').value ='';
        document.querySelector('.top-section .add-user #added_pwd').value = '';
        document.querySelector('.top-section .pop-ups').style.display = 'none';
        adminUserBoardDisplay();
        reattachEventListenerAdminUserBoard();
    }
    
    document.querySelectorAll(".actions .modify").forEach((button) => {
        button.addEventListener('click', () =>{
            document.querySelector(".adminUserBoard .pop-ups").style.display = 'flex';
            document.querySelector(".adminUserBoard .pop-ups .modify").style.display = 'flex';
        })
    })

    document.querySelector(".adminUserBoard .btn-close").addEventListener('click', () =>{
        document.querySelector(".adminUserBoard .pop-ups .modify").style.display = 'none';
        document.querySelector(".adminUserBoard .pop-ups").style.display = 'none';
    })

    document.querySelectorAll(".actions .remove").forEach((button) => {
        button.addEventListener('click', () =>{
            document.querySelector(".adminUserBoard .pop-ups").style.display = 'flex';
            document.querySelector(".adminUserBoard .pop-ups .remove").style.display = 'block';
        })
    
    })
    document.querySelector(".adminUserBoard .deny_btn").addEventListener('click', () => {
        document.querySelector(".adminUserBoard .pop-ups .remove").style.display = 'none';
        document.querySelector(".adminUserBoard .pop-ups").style.display = 'none';
    })

    document.querySelector('.top-section .addUser_btn').addEventListener('click', () =>{
        document.querySelector('.top-section .pop-ups').style.display = 'flex';
    })

    document.querySelector('.top-section .pop-ups .add-user .btn-close').addEventListener('click', () =>{
        document.querySelector('.top-section .pop-ups').style.display = 'none';
    })

    document.querySelector('.top-section .add-user .form-container').addEventListener('submit', (event) =>{
        event.preventDefault();
        adminAddUser();
    })
}