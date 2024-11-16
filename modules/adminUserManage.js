// import {}

export function adminUserManage(){
    
    document.querySelector(".actions .modify").addEventListener('click', () =>{
        document.querySelector(".adminUserBoard .pop-ups").style.display = 'flex';
        document.querySelector(".adminUserBoard .pop-ups .modify").style.display = 'flex';
    })

    document.querySelector(".adminUserBoard .btn-close").addEventListener('click', () =>{
        document.querySelector(".adminUserBoard .pop-ups .modify").style.display = 'none';
        document.querySelector(".adminUserBoard .pop-ups").style.display = 'none';
    })

    document.querySelector(".actions .remove").addEventListener('click', () =>{
        document.querySelector(".adminUserBoard .pop-ups").style.display = 'flex';
        document.querySelector(".adminUserBoard .pop-ups .remove").style.display = 'block';
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
}