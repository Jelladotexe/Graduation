import {transitionPage} from './transition.js';

document.addEventListener('DOMContentLoaded', ()=> {
    const enterButton = document.getElementById("enterButton");

    enterButton.addEventListener('click', async()=>{
        const nameInput  = document.getElementById("nameInput").value.trim();
        const codeInput  = document.getElementById("codeInput").value.trim();
        let targetUrl = null;
    
        if(nameInput === "test" && codeInput === "test"){
            targetUrl = '/friends/test.html';
        }
        else if(nameInput === "เลิกสู้ชีวิตไปสู้กับชีวะแทน" && codeInput === "สกึ๊ม"){
            targetUrl = '/friends/bio.html';
        }
        else if(nameInput === "ผองเพื่อนออกทะเล" && codeInput === "431"){
            targetUrl = '/friends/sea.html';
        }
        else if(nameInput === "ไว้พบกันใหม่" && codeInput === "6301"){
            targetUrl = '/friends/classmate.html';
        }
        else{
            alert("ใส่ดีๆคั้บน้อง");
            return;
        }

        await transitionPage(3000, targetUrl);
    })
});

