//EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[6]);
// document.all[6].textContent = 'Hello';
// console.log(document.all[6]);
// console.log(document.forms[6]);
// console.log(document.images);


//Get Element By ID
console.log(document.getElementById('header-title'));
var Headertitle=document.getElementById('header-title');
Headertitle.textContent='Heading towards success';

//Difference between innertext and textcontent is that with text content it shows everything but with inner text it shows other than styled content
console.log(Headertitle.innerText);
console.log(Headertitle.textContent);
Headertitle.innerHTML= '<h3> Hello </h3>'

//border of title 
Headertitle.style.borderBottom='solid 4px #000'

