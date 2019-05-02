//console.log("load");

//Q.1 js 폴더와 폴더 내부에 script.js 파일 생성하고 index.html 에 script.js 외부 파일을 로드합니다.
//script.js 에 아래 보기 문구의 경고창을 출력합니다.
//* 경고창 문구.
//Hello, world!
alert("Hello, World!")

//Q.2 아래 보기의 배열(Array) 객체 값을 할당하는 변수를 생성합니다.
//'Doctor Strange' 문자열 값을 (1)배열 객체의 마지막 부분에 추가합니다.
//(1)배열 객체의 뒤에서 두번째 요소 값을 'Captain Marvel' 문자열 값으로 변경합니다.
//(1)배열 객체의 첫번째 요소를 삭제합니다.
//(1)배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.

array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
var hero = array;
//hero.push("Doctor Strange");
console.log(hero);
//hero.splice(length - 1, 0, "Captain Marvel");
console.log(hero);
//hero.shift();
console.log(hero);
//hero.reverse();
console.log(hero);

//Q.3 아래의 요건에 따라 코드를 작성합니다.

//입력된 전달인자가 숫자(Number) 타입인 경우 true, 문자(String) 타입인 경우 false 를 반환하는 함수를 작성합니다.
//결과 변수1을 생성하여 (1)함수의 전달인자로 숫자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
//결과 변수2를 생성하여 (1)함수의 전달인자로 문자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.

//* 함수 반환 결과.
//func(5) : true
//func('text') : false

function func (a)
{
    if(typeof a == typeof 1) 
    {
        console.log("func("+a+") : " + true);
    }
    else if(typeof a == typeof "string")
    {
        console.log("func("+"'"+a+"'"+") : "+false);
    }
   
}
func(2);
func("string")

//Q.4 아래의 요건에 따라 코드를 작성합니다.

//하나의 객체(Object) 타입 매개변수를 입력받는 함수를 작성합니다.
//입력된 전달인자 객체 내의 모든 요소 값을 문자열 연산하고 얻은 결과 값을 (1)함수에서 반환합니다.
//단, 문자열 연산 시 각 요소 값의 사이에는 띄어쓰기(' ')를 추가합니다.
//아래 보기의 객체 값을 할당하는 변수를 생성하고 (1)함수의 전달인자로 사용합니다. myName 색인 요소 값의 이름은 본인이름으로 변경합니다.
//결과 변수를 생성하여 (1)함수를 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
//* 객체 값.
//object = {
//   greeting : '안녕하세요',
//    myName : '김용원(본인이름으로 변경)입니다.',
//   today : '오늘은',
//    month : 5,
//    separate : '/',
//    day : 2,
//    is : '입니다.',
//    luck : '행운을 빕니다.'
//}

//* 함수 반환 결과.
//func(object) : 안녕하세요 김용원입니다. 오늘은 5 / 2 입니다. 행운을 빕니다.

var object = {
       greeting : '안녕하세요',
        myName : '지동환 입니다.',
        today : '오늘은',
        month : 5,
        separate : '/',
        day : 2,
        is : '입니다.',
        luck : '행운을 빕니다.'
}

console.log(object);




//Q.5아래의 요건에 따라 코드를 작성합니다.

//html 문서의 title을 '학번_이름' 으로 변경합니다.
//이름은 한글로 작성합니다.

document.title = "21661124_지동환";

//Q.6 아래의 요건에 따라 코드를 작성합니다.

//button#btn-student-number 클릭할 경우, 자신의 학번이 span#student-number 의 내부에 입력될 수 있도록 함수를 작성합니다.
//button#btn-student-name 클릭할 경우, 자신의 이름이 span#student-name 의 내부에 입력될 수 있도록 함수를 작성합니다.
//(1), (2) 각 클릭 리스너 호출 시 요소에 내용 입력이 완료된 후 아래 보기 문구의 경고창을 출력합니다.
//* 리스너 호출 경고창 문구.
//(1) : 학번이 입력되었습니다.
//(2) : 이름이 입력되었습니다.

var student_number = document.querySelector("button#btn-student-number");
student_number.addEventListener("click", onClickBtnCheckId);
function onClickBtnCheckId(event) {
    event.preventDefault();
    alert("학번이 입력되었습니다..")
    var span_number = document.getElementById("student-number");
    span_number.innerText =  21661124;    
}

var student_name = document.querySelector("button#btn-student-name");
student_name.addEventListener("click", onClickBtnCheckId_name);
function onClickBtnCheckId_name(event) {
    event.preventDefault();
    alert("이름이 입력되었습니다.")
    var span_name = document.getElementById("student-name");
    span_name.innerText =  "지동환";    
}

//Q.7아래의 요건에 따라 코드를 작성합니다.

//button#btn-odd 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
//사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래 보기와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.

//* 문자열 결과.
//(1)의 숫자가 10일 경우 : 1, 3, 5, 7, 9.
//(1)의 숫자가 5일 경우 : 1, 3, 5.

var odd = document.querySelector("button#btn-odd");
odd.addEventListener("click", onClickBtnCheckId_odd);
function onClickBtnCheckId_odd(event) {
    event.preventDefault();
    var number = prompt("숫자를 입력해 주세요.");
    if(number !== null)
    {   var i = 0;
        for(i = 0; i <=number; i++)
        {
            if(i%2 == 1)
            {
                //console.log(i);
                var odd_result = document.getElementById("odd-result");
                var $newItem = document.createElement("span");
                $newItem.innerText = i;
                //console.log($newItem);
                odd_result.appendChild($newItem);   
            }
        }
    }
}

//Q.8아래의 요건에 따라 코드를 작성합니다.

//button#btn-add-item 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
//사용자가 입력한 수만큼 새로운 li 요소를 생성하고 ul#list 의 자식 요소로 추가합니다.
//(2)에 생성되는 li 요소에는 'item' 이라는 클래스 이름를 추가하고 각 요소마다 항목의 번호를 내부 문자열로 입력합니다.
//(2)에 생성되는 li 요소들이 ul#list 의 자식 요소들로 추가될 때 ul#list 의 이전 내용은 모두 삭제되고나서 추가합니다.
//* li 요소 항목의 번호는 1부터 시작합니다. 0으로 시작하지 않습니다.
//(1)의 숫자가 2일 경우 : <li>1</li><li>2</li>
//(1)의 숫자가 5일 경우 : <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>

/*var add_item = document.querySelector("button#btn-add-item");
add_item.addEventListener("click", onClickBtnCheckId_item);
function onClickBtnCheckId_item(event) {
    event.preventDefault();
    var item_ = prompt("숫자를 입력해주세요.")
    var item_result = document.getElementById("list");
    //var $newItem = document.createElement("li");
    var $listItem =  document.getElementsByClassName("item");

    var $newItem = $listItem.cloneNode();
    
    $newItem.innerText = item_;
    //console.log($newItem);
    item_result.appendChild($newItem);       
}*/

var add_item = document.querySelector("button#btn-add-item");
add_item.addEventListener("click", onClickBtnCheckId_item);
function onClickBtnCheckId_item(event) {
    event.preventDefault();
    var item_ = prompt("숫자를 입력해주세요.")
    var item_result = document.getElementById("list");
    var $newItem = document.createElement("li");
    $newItem.innerText = item_;
    //console.log($newItem);
    item_result.appendChild($newItem);       
}

//아래의 요건에 따라 코드를 작성합니다.

//button#btn-color-1 를 클릭할 경우, 'box' 라는 클래스 이름을 가진 모든 div 요소의 배경색 스타일을 'red', 글자색 스타일을 'white' 로 변경합니다.
//button#btn-color-2 를 클릭한 경우, 'box' 라는 클래스 이름을 가진 div 요소 중 3번째 요소의 배경색 스타일을 'blue', 글자색 스타일을 'black' 으로 변경합니다.