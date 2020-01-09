/*var test = prompt('Каково "официальное" название Javascript?', 'ананас')
if (test =='EcmaScript'){
	alert ('Верно!');
	} else {
    alert ('Не знаете? "EcmaScript"!');}*/
	
/*var test = prompt('введите число', 'ананас')
if (test > 0){
	alert ('1!');
	} else if (test < 0){
    alert ('-1!');}
	else{
    alert ('0!');}*/
/*var test = prompt('Кто пришёл?', 'ананас')

if (test == 'Админ'){
	   
	var pass = prompt('Пароль?', 'ананас')
	
	if (pass == 'Черный Властелин'){
	  alert ('Добро Пожаловать!');
	} else if (pass== null){
      alert ('Вход отменен');
	}else{
      alert ('Пароль неверен!');
	}
} else if (test== null){
      alert ('Вход отменен');
	  
} else{
	
      alert ('Я вас не знаю!');
}*/


var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

var message =(login == 'Вася')? 'Привет':
 (login == 'Директор') ? 'Здравствуйте':
 (login == '')? 'Нет логина' :
 '';

/*var age = prompt('возраст?', 18);

var message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );*/

@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 100;
  src: local('Raleway Thin'), local('Raleway-Thin'), url('../fonts/Raleway-Thin.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  src: local('Raleway ExtraLight'), local('Raleway-ExtraLight'), url('../fonts/Raleway-ExtraLight.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  src: local('Raleway Light'), local('Raleway-Light'), url('../fonts/Raleway-Light.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: local('Raleway'), local('Raleway-Regular'), url('../fonts/Raleway-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: local('Raleway Medium'), local('Raleway-Medium'), url('../fonts/Raleway-Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  src: local('Raleway SemiBold'), local('Raleway-SemiBold'), url('../fonts/Raleway-SemiBold.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: local('Raleway Bold'), local('Raleway-Bold'), url('../fonts/Raleway-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url('../fonts/Raleway-ExtraBold.ttf') format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 900;
  src: local('Raleway Black'), local('Raleway-Black'), url(../fonts/Raleway-Black.ttf) format('truetype');
}


