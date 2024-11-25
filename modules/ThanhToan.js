

export function formThanhToan(){
    var btn_confirm = document.querySelector(".order_confirm");
    btn_confirm.addEventListener("click",()=>{
        check_final();
    });

    const comboBox = document.getElementById("hinh_thuc_van_chuyen");
    comboBox.addEventListener("change",()=>{
        const selectedValue = comboBox.value;
        var elementPhiVanChuyen = document.getElementById("phi_van_chuyen");
        console.log(elementPhiVanChuyen);
        
        if(selectedValue === 1){
            elementPhiVanChuyen.innerText = "20000 VND";
        }

        if(selectedValue === 2){
            elementPhiVanChuyen.innerText = "50000 VND";
        }

        if(selectedValue === 3){
            elementPhiVanChuyen.innerText = "80000 VND";
        }
    });
}

function check_final(){
    var checkInput = document.querySelector(".input-text");
    var element_error = document.querySelector(".error");
    if (!checkInput.value.trim()){
        if(element_error){
            element_error.style.display = "block";
            element_error.innerText = "* Bắt buộc";
        }
    }else{
        element_error.style.display = "none";
    }

}