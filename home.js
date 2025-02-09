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
        else if(nameInput === "ไว้พบกันใหม่" && codeInput === "6301"){
            window.location.href = '/friends/classmate.html';
        }
        else{
            alert("ใส่ดีๆคั้บน้อง");
        }
    })
});

