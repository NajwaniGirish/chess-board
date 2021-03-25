console.log('hello');
color1a = '#EEEED2';
color1b = '#769656';
color2a = '#C6A771';
color2b = '#7E5834';
color3a = '#7A8189';
color3c = '#56606B';

const container = document.querySelector('.container');
const row = document.querySelectorAll('.row');
const theme1 = document.querySelector('.theme-1');
const theme2 = document.querySelector('.theme-2');
const theme3 = document.querySelector('.theme-3');
const black = document.querySelectorAll('.black');
const white = document.querySelectorAll('.white');

theme1.addEventListener('click', () => {
	for (i = 0; i < black.length; i++) {
		black[i].style.backgroundColor = color1a;
	}
	for (j = 0; j < white.length; j++) {
		white[j].style.backgroundColor = color1b;
	}
	for (j = 0; j < row.length; j++) {
		row[j].style.backgroundColor = color1b;
	}
});
theme2.addEventListener('click', () => {
	for (i = 0; i < black.length; i++) {
		black[i].style.backgroundColor = color2a;
	}
	for (j = 0; j < white.length; j++) {
		white[j].style.backgroundColor = color2b;
	}
	for (j = 0; j < row.length; j++) {
		row[j].style.backgroundColor = color2b;
	}
});
theme3.addEventListener('click', () => {
	for (i = 0; i < black.length; i++) {
		black[i].style.backgroundColor = color3a;
	}
	for (j = 0; j < white.length; j++) {
		white[j].style.backgroundColor = color3b;
	}
	for (j = 0; j < row.length; j++) {
		row[j].style.backgroundColor = color3b;
	}
});
