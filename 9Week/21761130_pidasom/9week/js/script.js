// # 직무수행능력평가1

// 직무수행능력평가1 시험


// 1) '학번_이름' 폴더를 생성하고 '#examination' 폴더의 파일을 복사하여풀이 후 시간내 제출합니다.<br/>
// > '학번_이름' 반드시 영문소문자로 띄어쓰기 없이 표기합니다.
// 2) 시험은 10문항이며 총점 28점입니다.
// > 과제 7점(과제1-7W) + 중간평가 28점 = 35점
// 3) 제출은 시험시간 내 1번만 허용됩니다.
// > 시험시간 이후 제출, 중복 제출한 파일은 인정하지 않습니다.

// ## 평가 문제

/*
### 문제 1.

아래의 요건에 따라 코드를 작성합니다.

1) js 폴더와 폴더 내부에 script.js 파일 생성하고 index.html 에 script.js 외부 파일을 로드합니다.
2) script.js 에 아래 보기 문구의 경고창을 출력합니다.

~~~~
* 경고창 문구.
Hello, world!
~~~~

> 유효 위치 확인합니다.<br/>배점 : 1점
*/
alert("Hello, world!");

/*
### 문제 2.

아래의 요건에 따라 코드를 작성합니다.

1) 아래 보기의 배열(Array) 객체 값을 할당하는 변수를 생성합니다.
2) 'Doctor Strange' 문자열 값을 (1)배열 객체의 마지막 부분에 추가합니다.
3) (1)배열 객체의 뒤에서 두번째 요소 값을 'Captain Marvel' 문자열 값으로 변경합니다.
4) (1)배열 객체의 첫번째 요소를 삭제합니다.
5) (1)배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.

~~~~
* 배열 객체 값.
array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
~~~~

> 배점 : 2점
*/
var _heros = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
_heros.push('Doctor Strange');
// console.log(_heros, _heros.length);
_heros.splice(4, 1, 'Captain Marvel');
// console.log(_heros, _heros.length);
_heros.shift();
// console.log(_heros, _heros.length);
_heros.reverse();
console.log(_heros, _heros.length);

/*
### 문제 3.

아래의 요건에 따라 코드를 작성합니다.

1) 입력된 전달인자가 숫자(Number) 타입인 경우 true, 문자(String) 타입인 경우 false 를 반환하는 함수를 작성합니다.
2) 결과 변수1을 생성하여 (1)함수의 전달인자로 숫자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
3) 결과 변수2를 생성하여 (1)함수의 전달인자로 문자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.

~~~~
* 함수 반환 결과.
func(5) : true
func('text') : false
~~~~

> 배점 : 3점
*/
/* 교수님 죄송해요 ^,^ ....
var 
function _number(){
    if(Number===true){
        console.log(Number);
    }
    else{
        // console.log(String);
    }
};
*/


/*
### 문제 4.

아래의 요건에 따라 코드를 작성합니다.

1) 하나의 객체(Object) 타입 매개변수를 입력받는 함수를 작성합니다.
2) 입력된 전달인자 객체 내의 모든 요소 값을 문자열 연산하고 얻은 결과 값을 (1)함수에서 반환합니다.
3) 단, 문자열 연산 시 각 요소 값의 사이에는 띄어쓰기(' ')를 추가합니다.
4) 아래 보기의 객체 값을 할당하는 변수를 생성하고 (1)함수의 전달인자로 사용합니다. myName 색인 요소 값의 이름은 본인이름으로 변경합니다.
5) 결과 변수를 생성하여 (1)함수를 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.

~~~~
* 객체 값.
object = {
    greeting : '안녕하세요',
    myName : '김용원(본인이름으로 변경)입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
}
* 함수 반환 결과.
func(object) : 안녕하세요 김용원입니다. 오늘은 5 / 2 입니다. 행운을 빕니다.
~~~~

> 간혹 브라우저마다 전달인자의 객체 색인 순서가 변경될 수 있으나 같은 형식만 갖추면 됩니다.<br/>배점 : 3점
*/

/*
### 문제 5.

아래의 요건에 따라 코드를 작성합니다.

1) html 문서의 title을 '학번_이름' 으로 변경합니다.
> 이름은 한글로 작성합니다.<br/>배점 : 1점
*/
document.title = "21761130_피다솜";

/*
### 문제 6.
아래의 요건에 따라 코드를 작성합니다.
1) button#btn-student-number 클릭할 경우, 자신의 학번이 span#student-number 의 내부에 입력될 수 있도록 함수를 작성합니다.
2) button#btn-student-name 클릭할 경우, 자신의 이름이 span#student-name 의 내부에 입력될 수 있도록 함수를 작성합니다.
3) (1), (2) 각 클릭 리스너 호출 시 요소에 내용 입력이 완료된 후 아래 보기 문구의 경고창을 출력합니다.
~~~~
* 리스너 호출 경고창 문구.
(1) : 학번이 입력되었습니다.
(2) : 이름이 입력되었습니다.
~~~~
   
> 배점 : 3점
*/
var $btnStuNum = document.querySelector("button#btn-student-number");
$btnStuNum.addEventListener("click", onClickbtnStuNum);
function onClickbtnStuNum(event){
    event.preventDefault();
    alert("학번이 입력되었습니다.");
    var number = 21761130;
    if(number !==  null && number !== ""){
        document.getElementById("btn-student-number").innerHTML="21761130";
        // var $newItem = document.createElement("#btn-student-number");
        // $newItem.innerText = number;
    }

}
var $btn_stu_name = document.querySelector("button#btn-student-name");
$btn_stu_name.addEventListener("click", onClickbtn_stu_name);
function onClickbtn_stu_name(event){
    event.preventDefault();
    alert("이름이 입력되었습니다.");
    var name = "피다솜";
    if(name!==  null && name !== ""){
        document.getElementById("btn-student-name").innerHTML="피다솜";
    }
}

/*
### 문제 7.
아래의 요건에 따라 코드를 작성합니다.
1) button#btn-odd 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
2) 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래 보기와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.
~~~~
* 문자열 결과.
(1)의 숫자가 10일 경우 : 1, 3, 5, 7, 9.
(1)의 숫자가 5일 경우 : 1, 3, 5.
~~~~
> 배점 : 3점
*/

var $btn_odd = document.querySelector("button#btn-odd");
$btn_odd.addEventListener("click", onClickbtn_odd);
function onClickbtn_odd(event){
    event.preventDefault();
    var odd = prompt("'숫자를 입력해주세요.'");
    var num = Number(odd);
    odd%=2
    if(odd==0){

    }
}

    

/*
### 문제 8.
아래의 요건에 따라 코드를 작성합니다.
1) button#btn-add-item 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
2) 사용자가 입력한 수만큼 새로운 li 요소를 생성하고 ul#list 의 자식 요소로 추가합니다.
3) (2)에 생성되는 li 요소에는 'item' 이라는 클래스 이름를 추가하고 각 요소마다 항목의 번호를 내부 문자열로 입력합니다.
4) (2)에 생성되는 li 요소들이 ul#list 의 자식 요소들로 추가될 때 ul#list 의 이전 내용은 모두 삭제되고나서 추가합니다.
~~~~
* li 요소 항목의 번호는 1부터 시작합니다. 0으로 시작하지 않습니다.
(1)의 숫자가 2일 경우 : <li>1</li><li>2</li>
(1)의 숫자가 5일 경우 : <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>
~~~~
> 배점 : 4점 (부분배점 - 1 : 1점, 2 : 2점, 3-4 : 1점)
*/

var $btnAddItem = document.querySelector("button#btn-add-item");
$btnAddItem.addEventListener("click", onClickBtnAddItem);
function onClickBtnAddItem(event){
    event.preventDefault();
    var number = prompt("'숫자를 입력해주세요.'");
    var $listitem1 = $ulList.appendChild($listItem2);
    // for(var i = 0; i <= number.length; i++){
        
}



/*
### 문제 9.
아래의 요건에 따라 코드를 작성합니다.
1) button#btn-color-1 를 클릭할 경우, 'box' 라는 클래스 이름을 가진 모든 div 요소의 배경색 스타일을 'red', 글자색 스타일을 'white' 로 변경합니다.
3) button#btn-color-2 를 클릭한 경우, 'box' 라는 클래스 이름을 가진 div 요소 중 3번째 요소의 배경색 스타일을 'blue', 글자색 스타일을 'black' 으로 변경합니다.
> 배점 : 4점 (부분배점 - 1 : 2점, 2 : 2점)
*/


var $btn1 = document.getElementById("button#btn-color-1");
$btn1.addEventListener("click", onClickBtn1);
var _cuid1 = 0;
function onClickBtn1(event){
    event.preventDefault();
    var $reBox = document.getElementById("box");
    if(Btn1 === true){
        $reBox.style.backgroundColor = "red";
        $reBox.style.Color = "white";
    }
    
};
var $btn2 = document.getElementById("button#btn-color-2");
$btn2.addEventListener("click", onClickBtn1);
var _cuid1 = 0;
function onClickBtn1(event){
    event.preventDefault();
    var $reBox = document.getElementById("box");
    if(Btn2 === true){
        $reBox.style.backgroundColor = "blue";
        $reBox.style.Color = "black";
    }
    
};



/*
### 문제 10.
아래의 요건에 따라 코드를 작성하고 예시와 같은 결과값이 출력되도록 함수를 작성합니다.
1) button#btn-star 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
2) 사용자가 입력한 수에 따라 아래 보기와 같이 문자열 연산하여 결과를 pre#star-result 의 내부에 입력될 수 있도록 작성합니다.
~~~~
* 문자열 결과.
(1)의 숫자가 5일 경우
★☆☆☆☆
★★☆☆☆
★★★☆☆
★★★★☆
★★★★★
(1)의 숫자가 3일 경우
★☆☆
★★☆
★★★
~~~~
   
> 줄바꿈은 \<br\> 혹은 \\n 을 활용할 수 있습니다.<br/>배점 : 4점
## 시험일시
시험시간은 4시간 입니다.
시작 - 5월 2일 (목) 09:00 / 종료 - 5월 2일 (목) 13:00
*/