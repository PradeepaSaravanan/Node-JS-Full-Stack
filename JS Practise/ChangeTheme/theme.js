function changeTheme(){
    let styleSheet= document.getElementById('pageStyle');
    console.log("stylesheet", styleSheet);
    let lightTheme='light.css';

    let darkTheme='dark.css';

    let currentTheme= styleSheet.getAttribute('href');
    console.log("CT",currentTheme);
    if(currentTheme==lightTheme){
        styleSheet.setAttribute('href',darkTheme);

    }
    else{
        styleSheet.setAttribute('href',lightTheme);  
    }
}