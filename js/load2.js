function sabar1(){
    new duDialog ('Maaf', 'Saat kuis tidak boleh mencontek !');
}

//countdown
var tenMinutes = 60 * 50;
display = document.querySelector('#stopwatch');
function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + " : " + seconds;
            if (--timer == 0) {
                var nilai=0;
                var no1="S";
                var no2="S";
                var no3="S";
                var no4="S";
                var no5="S";
                var no6="S";
                var no7="S";
                var no8="S";
                var no9="S";
                var no10="S";
                var d = new Date();
                var n = d.getHours() + " " + d.getMinutes();
                var m = d.getDate() + " " + (d.getMonth()+1) + " " + d.getFullYear();
    
                if(form.pilihan.value=='D. melindungi hardware lainnya dan memproses perintah'){
                    nilai=nilai+10;
                    no1="B";
                }
                if (form2.pilihan2.value=='E. 1 adalah RAM, merupakan penyimpanan sementara, bersifat volatile'){
                    nilai=nilai+10;
                    no2="B";
                }

                if (form3.pilihan3.value=='D. keyboard, mouse, scanner'){
                    nilai=nilai+10;
                    no3="B";
                }

                if (form4.pilihan4.value=='C. 1, 2,dan 5'){
                    nilai=nilai+10;
                    no4="B";
                }

                if (form5.pilihan5.value=='E. 1 dan 3'){
                    nilai=nilai+10;
                    no5="B";
                }

                if (form6.pilihan6.value=='A. Software – Sound Card – Kabel Front Audio – Speaker'){
                    nilai=nilai+10;
                    no6="B";
                }

                if (form7.pilihan7.value=='B. 1 dan 4'){
                    nilai=nilai+10;
                    no7="B";
                }

                if (form8.pilihan8.value=='C. mengubah arus DC menjadi AC'){
                    nilai=nilai+10;
                    no8="B";
                }
                
                if (form9.pilihan9.value=='D. 2, 3, dan 5'){
                    nilai=nilai+10;
                    no9="B";
                }

                if (form10.pilihan10.value=='B. GPU'){
                    nilai=nilai+10;
                    no10="B";
                }

                //to storage
                var f = nilai.toFixed(0);
                localStorage.setItem("nilai", f);
                localStorage.setItem("no1", no1);
                localStorage.setItem("no2", no2);
                localStorage.setItem("no3", no3);
                localStorage.setItem("no4", no4);
                localStorage.setItem("no5", no5);
                localStorage.setItem("no6", no6);
                localStorage.setItem("no7", no7);
                localStorage.setItem("no8", no8);
                localStorage.setItem("no9", no9);
                localStorage.setItem("no10", no10);
                localStorage.setItem("waktu", n);
                localStorage.setItem("tanggal", m);
                
                //push to firebase
                nama_1 = localStorage.getItem("nama1");
                kelas = localStorage.getItem("kelas");
                no_1 = localStorage.getItem("no1");
                no_2 = localStorage.getItem("no2");
                no_3 = localStorage.getItem("no3");
                no_4 = localStorage.getItem("no4");
                no_5 = localStorage.getItem("no5");
                no_6 = localStorage.getItem("no6");
                no_7 = localStorage.getItem("no7");
                no_8 = localStorage.getItem("no8");
                no_9 = localStorage.getItem("no9");
                no_10 = localStorage.getItem("no10");
                waktu_ = localStorage.getItem("waktu");
                tanggal_ = localStorage.getItem("tanggal");
                
                var data = {
                    nama: nama_1,
                    kelas: kelas,
                    nilai: f,
                    no1: no_1,
                    no2: no_2,
                    no3: no_3,
                    no4: no_4,
                    no5: no_5,
                    no6: no_6,
                    no7: no_7,
                    no8: no_8,
                    no9: no_9,
                    no10: no_10,
                    waktu: waktu_,
                    tanggal: tanggal_

                }

                nama_2 = localStorage.getItem("nama2");
                nama_3 = localStorage.getItem("nama3");
                nama_4 = localStorage.getItem("nama4");
                
                

                var database = firebase.database();
                database.ref("kuis_2").push(data);
                if(nama_2 != "") {
                    var data2 = {
                    nama: nama_2,
                    kelas: kelas,
                    nilai: f,
                    no1: no_1,
                    no2: no_2,
                    no3: no_3,
                    no4: no_4,
                    no5: no_5,
                    no6: no_6,
                    no7: no_7,
                    no8: no_8,
                    no9: no_9,
                    no10: no_10,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }
                    database.ref("kuis_2").push(data2);	
                }
                if(nama_3 != "") {
                    var data3 = {
                    nama: nama_3,
                    kelas: kelas,
                    nilai: f,
                    no1: no_1,
                    no2: no_2,
                    no3: no_3,
                    no4: no_4,
                    no5: no_5,
                    no6: no_6,
                    no7: no_7,
                    no8: no_8,
                    no9: no_9,
                    no10: no_10,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }	
                    database.ref("kuis_2").push(data3);
                }
                if(nama_4 != "") {
                    var data4 = {
                    nama: nama_4,
                    kelas: kelas,
                    nilai: f,
                    no1: no_1,
                    no2: no_2,
                    no3: no_3,
                    no4: no_4,
                    no5: no_5,
                    no6: no_6,
                    no7: no_7,
                    no8: no_8,
                    no9: no_9,
                    no10: no_10,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }	
                    database.ref("kuis_2").push(data4);
                }
                setInterval(function(){ location.href="updf2.html"; }, 2000);
            }
        }, 1000);
    }


//ambil jawaban
function p1a(){
    form.pilihan.value= "A. "+ document.getElementById("a").innerHTML;
}  
function p1b(){
    form.pilihan.value= "B. "+ document.getElementById("b").innerHTML;
}
function p1c(){
    form.pilihan.value= "C. "+ document.getElementById("c").innerHTML;
}
function p1d(){
    form.pilihan.value= "D. "+ document.getElementById("d").innerHTML;
}
function p1e(){
    form.pilihan.value= "E. "+ document.getElementById("e").innerHTML;
}
function p2a(){
    form2.pilihan2.value= "A. "+ document.getElementById("2a").innerHTML;
}  
function p2b(){
    form2.pilihan2.value= "B. "+ document.getElementById("2b").innerHTML;
}
function p2c(){
    form2.pilihan2.value= "C. "+ document.getElementById("2c").innerHTML;
}
function p2d(){
    form2.pilihan2.value= "D. "+ document.getElementById("2d").innerHTML;
}
function p2e(){
    form2.pilihan2.value= "E. "+ document.getElementById("2e").innerHTML;
}
function p3a(){
    form3.pilihan3.value= "A. "+ document.getElementById("3a").innerHTML;
}  
function p3b(){
    form3.pilihan3.value= "B. "+ document.getElementById("3b").innerHTML;
}
function p3c(){
    form3.pilihan3.value= "C. "+ document.getElementById("3c").innerHTML;
}
function p3d(){
    form3.pilihan3.value= "D. "+ document.getElementById("3d").innerHTML;
}
function p3e(){
    form3.pilihan3.value= "E. "+ document.getElementById("3e").innerHTML;
}    
function p4a(){
    form4.pilihan4.value= "A. "+ document.getElementById("4a").innerHTML;
}  
function p4b(){
    form4.pilihan4.value= "B. "+ document.getElementById("4b").innerHTML;
}
function p4c(){
    form4.pilihan4.value= "C. "+ document.getElementById("4c").innerHTML;
}
function p4d(){
    form4.pilihan4.value= "D. "+ document.getElementById("4d").innerHTML;
}
function p4e(){
    form4.pilihan4.value= "E. "+ document.getElementById("4e").innerHTML;
}
function p5a(){
    form5.pilihan5.value= "A. "+ document.getElementById("5a").innerHTML;
}  
function p5b(){
    form5.pilihan5.value= "B. "+ document.getElementById("5b").innerHTML;
}
function p5c(){
    form5.pilihan5.value= "C. "+ document.getElementById("5c").innerHTML;
}
function p5d(){
    form5.pilihan5.value= "D. "+ document.getElementById("5d").innerHTML;
}
function p5e(){
    form5.pilihan5.value= "E. "+ document.getElementById("5e").innerHTML;
}
function p6a(){
    form6.pilihan6.value= "A. "+ document.getElementById("6a").innerHTML;
}  
function p6b(){
    form6.pilihan6.value= "B. "+ document.getElementById("6b").innerHTML;
}
function p6c(){
    form6.pilihan6.value= "C. "+ document.getElementById("6c").innerHTML;
}
function p6d(){
    form6.pilihan6.value= "D. "+ document.getElementById("6d").innerHTML;
}
function p6e(){
    form6.pilihan6.value= "E. "+ document.getElementById("6e").innerHTML;
}
function p7a(){
    form7.pilihan7.value= "A. "+ document.getElementById("7a").innerHTML;
}  
function p7b(){
    form7.pilihan7.value= "B. "+ document.getElementById("7b").innerHTML;
}
function p7c(){
    form7.pilihan7.value= "C. "+ document.getElementById("7c").innerHTML;
}
function p7d(){
    form7.pilihan7.value= "D. "+ document.getElementById("7d").innerHTML;
}
function p7e(){
    form7.pilihan7.value= "E. "+ document.getElementById("7e").innerHTML;
}
function p8a(){
    form8.pilihan8.value= "A. "+ document.getElementById("8a").innerHTML;
}  
function p8b(){
    form8.pilihan8.value= "B. "+ document.getElementById("8b").innerHTML;
}
function p8c(){
    form8.pilihan8.value= "C. "+ document.getElementById("8c").innerHTML;
}
function p8d(){
    form8.pilihan8.value= "D. "+ document.getElementById("8d").innerHTML;
}
function p8e(){
    form8.pilihan8.value= "E. "+ document.getElementById("8e").innerHTML;
}
function p9a(){
    form9.pilihan9.value= "A. "+ document.getElementById("9a").innerHTML;
}  
function p9b(){
    form9.pilihan9.value= "B. "+ document.getElementById("9b").innerHTML;
}
function p9c(){
    form9.pilihan9.value= "C. "+ document.getElementById("9c").innerHTML;
}
function p9d(){
    form9.pilihan9.value= "D. "+ document.getElementById("9d").innerHTML;
}
function p9e(){
    form9.pilihan9.value= "E. "+ document.getElementById("9e").innerHTML;
}
function p10a(){
    form10.pilihan10.value= "A. "+ document.getElementById("10a").innerHTML;
}  
function p10b(){
    form10.pilihan10.value= "B. "+ document.getElementById("10b").innerHTML;
}
function p10c(){
    form10.pilihan10.value= "C. "+ document.getElementById("10c").innerHTML;
}
function p10d(){
    form10.pilihan10.value= "D. "+ document.getElementById("10d").innerHTML;
}
function p10e(){
    form10.pilihan10.value= "E. "+ document.getElementById("10e").innerHTML;
}

//Cek jawaban
function cek(){
                var nilai=0;
                var no1="S";
                var no2="S";
                var no3="S";
                var no4="S";
                var no5="S";
                var no6="S";
                var no7="S";
                var no8="S";
                var no9="S";
                var no10="S";
                var d = new Date();
                var n = d.getHours() + " " + d.getMinutes();
                var m = d.getDate() + " " + (d.getMonth()+1) + " " + d.getFullYear();
    
                if(form.pilihan.value=='D. melindungi hardware lainnya dan memproses perintah'){
                    nilai=nilai+10;
                    no1="B";
                }
                if (form2.pilihan2.value=='E. 1 adalah RAM, merupakan penyimpanan sementara, bersifat volatile'){
                    nilai=nilai+10;
                    no2="B";
                }

                if (form3.pilihan3.value=='D. keyboard, mouse, scanner'){
                    nilai=nilai+10;
                    no3="B";
                }

                if (form4.pilihan4.value=='C. 1, 2,dan 5'){
                    nilai=nilai+10;
                    no4="B";
                }

                if (form5.pilihan5.value=='E. 1 dan 3'){
                    nilai=nilai+10;
                    no5="B";
                }

                if (form6.pilihan6.value=='A. Software – Sound Card – Kabel Front Audio – Speaker'){
                    nilai=nilai+10;
                    no6="B";
                }

                if (form7.pilihan7.value=='B. 1 dan 4'){
                    nilai=nilai+10;
                    no7="B";
                }

                if (form8.pilihan8.value=='C. mengubah arus DC menjadi AC'){
                    nilai=nilai+10;
                    no8="B";
                }
                
                if (form9.pilihan9.value=='D. 2, 3, dan 5'){
                    nilai=nilai+10;
                    no9="B";
                }

                if (form10.pilihan10.value=='B. GPU'){
                    nilai=nilai+10;
                    no10="B";
                }

                //to storage
                var f = nilai.toFixed(0);
                localStorage.setItem("nilai", f);
                localStorage.setItem("no1", no1);
                localStorage.setItem("no2", no2);
                localStorage.setItem("no3", no3);
                localStorage.setItem("no4", no4);
                localStorage.setItem("no5", no5);
                localStorage.setItem("no6", no6);
                localStorage.setItem("no7", no7);
                localStorage.setItem("no8", no8);
                localStorage.setItem("no9", no9);
                localStorage.setItem("no10", no10);
                localStorage.setItem("waktu", n);
                localStorage.setItem("tanggal", m);
                
                //confirm and move
    swal({
        title: "Apakah kamu yakin?",
        text: "Jika kamu sudah menjawab semua soal klik OK",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#4CAF50',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
        }).then(function() {
                //push to firebase
                nama_1 = localStorage.getItem("nama1");
                kelas = localStorage.getItem("kelas");
                no_1 = localStorage.getItem("no1");
                no_2 = localStorage.getItem("no2");
                no_3 = localStorage.getItem("no3");
                no_4 = localStorage.getItem("no4");
                no_5 = localStorage.getItem("no5");
                no_6 = localStorage.getItem("no6");
                no_7 = localStorage.getItem("no7");
                no_8 = localStorage.getItem("no8");
                no_9 = localStorage.getItem("no9");
                no_10 = localStorage.getItem("no10");
                waktu_ = localStorage.getItem("waktu");
                tanggal_ = localStorage.getItem("tanggal");
                
                var data = {
                    nama: nama_1,
                    kelas: kelas,
                    nilai: f,
                    no1: no_1,
                    no2: no_2,
                    no3: no_3,
                    no4: no_4,
                    no5: no_5,
                    no6: no_6,
                    no7: no_7,
                    no8: no_8,
                    no9: no_9,
                    no10: no_10,
                    waktu: waktu_,
                    tanggal: tanggal_

                }

                nama_2 = localStorage.getItem("nama2");
                nama_3 = localStorage.getItem("nama3");
                nama_4 = localStorage.getItem("nama4");
                
                

                var database = firebase.database();
                database.ref("kuis_2").push(data);
                if(nama_2 != "") {
                    var data2 = {
                    nama: nama_2,
                    kelas: kelas,
                    nilai: f,
                    no1: no_1,
                    no2: no_2,
                    no3: no_3,
                    no4: no_4,
                    no5: no_5,
                    no6: no_6,
                    no7: no_7,
                    no8: no_8,
                    no9: no_9,
                    no10: no_10,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }
                    database.ref("kuis_2").push(data2);	
                }
                if(nama_3 != "") {
                    var data3 = {
                    nama: nama_3,
                    kelas: kelas,
                    nilai: f,
                    no1: no_1,
                    no2: no_2,
                    no3: no_3,
                    no4: no_4,
                    no5: no_5,
                    no6: no_6,
                    no7: no_7,
                    no8: no_8,
                    no9: no_9,
                    no10: no_10,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }	
                    database.ref("kuis_2").push(data3);
                }
                if(nama_4 != "") {
                    var data4 = {
                    nama: nama_4,
                    kelas: kelas,
                    nilai: f,
                    no1: no_1,
                    no2: no_2,
                    no3: no_3,
                    no4: no_4,
                    no5: no_5,
                    no6: no_6,
                    no7: no_7,
                    no8: no_8,
                    no9: no_9,
                    no10: no_10,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }	
                    database.ref("kuis_2").push(data4);
                }
                setInterval(function(){ location.href="updf2.html"; }, 2000);
        });
        
}



function nav1(){
        document.getElementById("soal1").hidden=false;
        document.getElementById("soal2").hidden=true;
        document.getElementById("soal3").hidden=true;
        document.getElementById("soal4").hidden=true;
        document.getElementById("soal5").hidden=true;
        document.getElementById("soal6").hidden=true;
        document.getElementById("soal7").hidden=true;
        document.getElementById("soal8").hidden=true;
        document.getElementById("soal9").hidden=true;
        document.getElementById("soal10").hidden=true;
    }

    function nav2(){
        document.getElementById("soal1").hidden=true;
        document.getElementById("soal2").hidden=false;
        document.getElementById("soal3").hidden=true;
        document.getElementById("soal4").hidden=true;
        document.getElementById("soal5").hidden=true;
        document.getElementById("soal6").hidden=true;
        document.getElementById("soal7").hidden=true;
        document.getElementById("soal8").hidden=true;
        document.getElementById("soal9").hidden=true;
        document.getElementById("soal10").hidden=true;
    }

    function nav3(){
        document.getElementById("soal1").hidden=true;
        document.getElementById("soal2").hidden=true;
        document.getElementById("soal3").hidden=false;
        document.getElementById("soal4").hidden=true;
        document.getElementById("soal5").hidden=true;
        document.getElementById("soal6").hidden=true;
        document.getElementById("soal7").hidden=true;
        document.getElementById("soal8").hidden=true;
        document.getElementById("soal9").hidden=true;
        document.getElementById("soal10").hidden=true;
    }

    function nav4(){
        document.getElementById("soal1").hidden=true;
        document.getElementById("soal2").hidden=true;
        document.getElementById("soal3").hidden=true;
        document.getElementById("soal4").hidden=false;
        document.getElementById("soal5").hidden=true;
        document.getElementById("soal6").hidden=true;
        document.getElementById("soal7").hidden=true;
        document.getElementById("soal8").hidden=true;
        document.getElementById("soal9").hidden=true;
        document.getElementById("soal10").hidden=true;
    }

    function nav5(){
        document.getElementById("soal1").hidden=true;
        document.getElementById("soal2").hidden=true;
        document.getElementById("soal3").hidden=true;
        document.getElementById("soal4").hidden=true;
        document.getElementById("soal5").hidden=false;
        document.getElementById("soal6").hidden=true;
        document.getElementById("soal7").hidden=true;
        document.getElementById("soal8").hidden=true;
        document.getElementById("soal9").hidden=true;
        document.getElementById("soal10").hidden=true;
    }

    function nav6(){
        document.getElementById("soal1").hidden=true;
        document.getElementById("soal2").hidden=true;
        document.getElementById("soal3").hidden=true;
        document.getElementById("soal4").hidden=true;
        document.getElementById("soal5").hidden=true;
        document.getElementById("soal6").hidden=false;
        document.getElementById("soal7").hidden=true;
        document.getElementById("soal8").hidden=true;
        document.getElementById("soal9").hidden=true;
        document.getElementById("soal10").hidden=true;
    }

    function nav7(){
        document.getElementById("soal1").hidden=true;
        document.getElementById("soal2").hidden=true;
        document.getElementById("soal3").hidden=true;
        document.getElementById("soal4").hidden=true;
        document.getElementById("soal5").hidden=true;
        document.getElementById("soal6").hidden=true;
        document.getElementById("soal7").hidden=false;
        document.getElementById("soal8").hidden=true;
        document.getElementById("soal9").hidden=true;
        document.getElementById("soal10").hidden=true;
    }

    function nav8(){
        document.getElementById("soal1").hidden=true;
        document.getElementById("soal2").hidden=true;
        document.getElementById("soal3").hidden=true;
        document.getElementById("soal4").hidden=true;
        document.getElementById("soal5").hidden=true;
        document.getElementById("soal6").hidden=true;
        document.getElementById("soal7").hidden=true;
        document.getElementById("soal8").hidden=false;
        document.getElementById("soal9").hidden=true;
        document.getElementById("soal10").hidden=true;
    }

    function nav9(){
        document.getElementById("soal1").hidden=true;
        document.getElementById("soal2").hidden=true;
        document.getElementById("soal3").hidden=true;
        document.getElementById("soal4").hidden=true;
        document.getElementById("soal5").hidden=true;
        document.getElementById("soal6").hidden=true;
        document.getElementById("soal7").hidden=true;
        document.getElementById("soal8").hidden=true;
        document.getElementById("soal9").hidden=false;
        document.getElementById("soal10").hidden=true;
    }
    function nav10(){
        document.getElementById("soal1").hidden=true;
        document.getElementById("soal2").hidden=true;
        document.getElementById("soal3").hidden=true;
        document.getElementById("soal4").hidden=true;
        document.getElementById("soal5").hidden=true;
        document.getElementById("soal6").hidden=true;
        document.getElementById("soal7").hidden=true;
        document.getElementById("soal8").hidden=true;
        document.getElementById("soal9").hidden=true;
        document.getElementById("soal10").hidden=false;
    }

    
    function responsif(x) {
    if (x.matches) { // If media query matches
        document.getElementById("utama").style.paddingLeft= "5px";
        document.getElementById("utama").style.paddingRight= "5px";
        document.getElementById("s1").width= "300";
        document.getElementById("oke").style.width= "200px";
        document.getElementById("navi").hidden=true;
        document.getElementById("s2").width= "300";
        document.getElementById("oke2").style.width= "200px";
        document.getElementById("oke3").style.width= "200px";
        document.getElementById("s4").width= "350";
        document.getElementById("oke4").style.width= "200px";
        document.getElementById("s5").width= "300";
        document.getElementById("oke5").style.width= "200px";
        document.getElementById("s7").width= "350";
        document.getElementById("oke7").style.width= "200px";
        document.getElementById("oke6").style.width= "200px";
        document.getElementById("oke8").style.width= "200px";
        document.getElementById("oke9").style.width= "200px";
        document.getElementById("oke10").style.width= "200px";
        document.getElementById("s9").width= "300";
        document.getElementById("s10").width= "300";

    } else {
        document.getElementById("utama").style.paddingLeft= "50px";
        document.getElementById("utama").style.paddingRight= "50px";
        document.getElementById("s1").style.width= "";
        document.getElementById("oke").style.width= "";
        document.getElementById("navi").hidden=false;
        document.getElementById("s2").style.width= "300px";
        document.getElementById("oke2").style.width= "";
        document.getElementById("s5").width= "500";
        document.getElementById("oke3").style.width= "";
        document.getElementById("s4").width= "350";
        document.getElementById("oke4").style.width= "";
        document.getElementById("oke5").style.width= "";
        document.getElementById("s7").width= "400";
        document.getElementById("oke6").style.width= "";
        document.getElementById("oke7").style.width= "";
        document.getElementById("oke8").style.width= "";
        document.getElementById("oke9").style.width= "";
        document.getElementById("oke10").style.width= "";
        document.getElementById("s9").width= "350";
        document.getElementById("s10").width= "300";
        }
    }

    var x = window.matchMedia("(max-width: 700px)");
    responsif(x); // Call listener function at run time
    x.addListener(responsif); // Attach listener function on state changes