document.addEventListener('DOMContentLoaded', ()=> {
    const enterButton = document.getElementById("enterButton");

    enterButton.addEventListener('click', ()=>{
        const nameInput  = document.getElementById("nameInput").value.trim();
        const codeInput  = document.getElementById("codeInput").value.trim();
    
        if(nameInput === "test" && codeInput === "test"){
            window.location.href = '/friends/test.html';
        }
        else if(nameInput === "เลิกสู้ชีวิตไปสู้กับชีวะแทน" && codeInput === "สกึ๊ม"){
            window.location.href = '/friends/bio.html';
        }
        else if(nameInput === "ผองเพื่อนออกทะเล" && codeInput === "431"){
            window.location.href = '/friends/sea.html';
        }
        else if(nameInput === "เจอกันทั้งเทอม" && codeInput === "ฮันนี้"){
            window.location.href = '/friends/honey.html';
        }
        else if(nameInput === "ตี้อาวี" && codeInput === "ลูกพี่"){
            window.location.href = '/friends/rov.html';
        }
        else{
            alert("ใส่ดีๆคั้บน้อง");
        }
    })
});

