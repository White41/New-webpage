let x = ['kamal@gmail.com','12345'];

function valid(){
    if( document.getElementById('inpt1').value == x[0]){
        console.log(x[0] +document.getElementById('inpt1').value);
        window.location.replace("homepage.html");
    }
}
