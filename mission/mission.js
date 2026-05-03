let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = 'black';
        pageContent.style.color = 'white';
        logo.src = 'images/byui-logo-dark-theme.png';
    } else {
        document.body.style.backgroundColor = 'white';
        pageContent.style.color = 'black';
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp';
    }
}  

// Steps of Computational Thinking:
// 1. Break the problem into smaller parts
// 2. Look for repeated or similar steps
// 3. Make a list of steps

// 1. Break the problem into smaller parts:
// if dark theme:
// set body background color to black
// set text color to white (select, h1, p, li)
// set hr color to white
// set logo to dark version (src=images/byui-logo-dark-theme.png alt="byui_logo")

// if light theme:
// set body background color to white
// set text color to black (select, h1, p, li)
// set hr color to black
// set logo to light version (src=https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp alt="byui_logo")

// 2. Look for repeated or similar steps:
// set body background color to (color)
// set text color to (color) (select, h1, p, li)
// set hr color to (color)
// set logo to (version) (src=(url) alt="byui_logo")

// 3. Make a list of steps:
// if dark theme:
// set body background color to black
// set text color to white (select, h1, p, li)
// set hr color to white
// set logo to dark version (src=images/byui-logo-dark-theme.png alt="byui_logo")

// if light theme:
// set body background color to white
// set text color to black (select, h1, p, li)
// set hr color to black
// set logo to light version (src=https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp alt="byui_logo")