function blind(){
    document.getElementById('mesej').innerText = 'SILA NYATAKAN NAMA BABY';
}

function func(){
    alert("baby tengah datang");
}

function sahkan() {
    let sahkan = confirm('Adakah syg pasti?');
    if (sahkan) {
        return true;
    } else {
        alert('Arahan simpan dibatalkan');
        return false;
    }
}

function tar(p1, p2) {
    return p1 * p2;
  }
  document.getElementById("demo").innerHTML = myFunction(4, 3);
