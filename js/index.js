//picSet
// let picWidth = 900;

//document.getElementById("pic0").style.left = (1440*0) + "px";
//document.getElementById("pic1").style.left = (1440*1) + "px";
//document.getElementById("pic2").style.left = (1440*2) + "px"; //숫자 + 문자 연결연산자 "2880px"

//문자 + 숫자 ---> + 연결연산자

// for(var i=0; i<3; i++){
//     document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
// }

// document.getElementById("prev_btn").onclick = function(){
//     if(moveNum>0){
//         moveNum--;
//     }
//     for(var i = 0; i<3; i++){
//         document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)+"px");
//     }
   
// }

// let moveNum = 0;
// document.getElementById("next_btn").onclick = function(){
//     if(moveNum < 2){
//         moveNum++;

//     }
//     for(var i=0; i<3; i++){
//         document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
//     }
// }
   

//for 반복문 for(초기값; 조건식; 증감식){}
// for(var i=0; i<10; i++){
//     console.log(i);
// }
// console.log("종료후:" + i);

// 초기 변수 선언
let picWidth = 900;
let moveNum = 0;

//이미지 위치 셋팅
for(var i=0; i<3; i++){
    document.getElementById("pic" + i).style.left = (picWidth * i) +"px";
}
document.getElementById("temp").innerText = moveNum;
document.getElementById("text0").classList.add("active");

// 목록 아이콘 셋셋팅
let dotList = document.createElement("ul");
dotList.setAttribute("id","dotList");
document.getElementById("ImgSet").appendChild(dotList);
for(var i=0; i<3; i++){
    var li = document.createElement("li");
    li.setAttribute("id","li"+i);
    li.innerText = i;
    document.getElementById("dotList").appendChild(li);
    document.getElementById("li" + i).onclick = function(){
        console.log("ok");
        console.log(this.id);
        console.log(this.id.substr(2,3));

        document.getElementById("text" + moveNum).classList.remove("active");
        document.getElementById("text" + moveNum).classList.add("activeOut");
        moveNum = Number(this.id.substr(2,3));
        document.getElementById("text" + moveNum).classList.remove("activeOut");
        document.getElementById("text" + moveNum).classList.add("active");
        moveFunction();
    }
}
document.getElementById("li" + moveNum).classList.toggle("active");


// 이미지 움직임 함수 선언
var moveFunction = function(){
    for(var i=0; i<3; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum))+"px";
    }
    document.getElementById("temp").innerText = moveNum;
    for(var i=0; i<3; i++){
        document.getElementById("li" + i).classList.remove("active");
    }
    document.getElementById("li" + moveNum).classList.toggle("active");
    if(moveNum == 0){
        prev_btn.classList.add("disabled");
    }else{
        prev_btn.classList.remove("disabled");
    }
    if(moveNum ==2){
        next_btn.classList.add("disabled");
    } else{
        next_btn.classList.remove("disabled");
    }
    document.getElementById("text" + moveNum).classList.remove("activeOut");
    document.getElementById("text" + moveNum).classList.add("active");
}

// 좌우 버튼 세팅
let prev_btn = document.createElement("button");
let next_btn = document.createElement("button");
prev_btn.setAttribute("id", "prev_btn");
next_btn.setAttribute("id", "next_btn");
prev_btn.innerText="prev_btn";
next_btn.innerText="next_btn";
document.getElementById("ImgSet").appendChild(prev_btn);
document.getElementById("ImgSet").appendChild(next_btn);
prev_btn.classList.toggle("disabled");

document.getElementById("prev_btn").onclick = function(){
    document.getElementById("text" + moveNum).classList.remove("active");
    document.getElementById("text" + moveNum).classList.add("activeOut");
    if(moveNum > 0){
        moveNum--;
    }
    moveFunction();
}

document.getElementById("next_btn").onclick = function(){
    document.getElementById("text" + moveNum).classList.remove("active");
    document.getElementById("text" + moveNum).classList.add("activeOut");
    if(moveNum < 2){
        moveNum++;
    }
   moveFunction();
}




// next_btn

// document.getElementById("pic0").style.left = (picWidth *-1) + "px";
// document.getElementById("pic1").style.left = (picWidth * 0) + "px";
// document.getElementById("pic2").style.left = (picWidth * 1) + "px";




