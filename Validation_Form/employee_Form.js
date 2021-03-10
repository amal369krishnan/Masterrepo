var arr = [];

function data() {
    let phone = document.getElementById('phone').value;
    let zip = document.getElementById('zip').value;
    if (phone.length == 10 && !isNaN(phone) && (phone.charAt(0) == 9 || phone.charAt(0) == 8 || phone.charAt(0) == 7 || phone.charAt(0) == 6)) {
        if (zip.length == 6 && !isNaN(zip)) {



            const objects = {
                fname: document.getElementById('fname').value,
                lname: document.getElementById('lname').value,
                empid: document.getElementById('eid').value,
                street: document.getElementById('staddress').value,
                city: document.getElementById('city').value,
                zip: zip,
                phone: phone,
                email: document.getElementById('email').value,
                dob: document.getElementById('dob').value
            };
            arr.push({ objects });
            localStorage.setItem("local_objects", JSON.stringify(arr));
            show();
        } else {
            document.getElementById('zip').value = "";
            onsubmit = false;
        }

    } else {
        document.getElementById('phone').value = "";
        onsubmit = false;
    }

}

function getItems() {
    let result = localStorage.getItem("local_objects");
    if (result != null) {
        arr = JSON.parse(localStorage.getItem("local_objects"));
    }

}

function show() {
    getItems();
    //let result = JSON.parse(localStorage.getItem("local_objects"));
    var table = document.getElementById("tables");
    var x = table.rows.length;
    while (--x) {
        table.deleteRow(x);
    }

    /*------------Table Insertion-----------*/
    for (let i = 0; i < arr.length; i++) {

        var newtableRow = table.insertRow(1);
        c0 = newtableRow.insertCell(0);
        c1 = newtableRow.insertCell(1);
        c2 = newtableRow.insertCell(2);
        c3 = newtableRow.insertCell(3);
        c4 = newtableRow.insertCell(4);
        c5 = newtableRow.insertCell(5);
        c6 = newtableRow.insertCell(6);
        c7 = newtableRow.insertCell(7);
        c8 = newtableRow.insertCell(8);

        c0.innerHTML = arr[i].objects.fname;
        c1.innerHTML = arr[i].objects.lname;
        c2.innerHTML = arr[i].objects.empid;
        c3.innerHTML = arr[i].objects.street;
        c4.innerHTML = arr[i].objects.city;
        c5.innerHTML = arr[i].objects.zip;
        c6.innerHTML = arr[i].objects.phone;
        c7.innerHTML = arr[i].objects.email;
        c8.innerHTML = arr[i].objects.dob;
    }
}