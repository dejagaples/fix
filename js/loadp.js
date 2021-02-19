function sabar(){
    new duDialog ('Maaf', 'Kamu tidak bisa keluar sebelum menyelesaikan evaluasi');
}

//countdown
var tenMinutes = 60 * 90;
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
            var no1=0;
            var no2=0;
            var no3=0;
            var no4=0;
            var no5=0;
            var no6=0;
            var no7=0;
            var no8=0;
            var no9=0;
            var no10=0;
            var no11=0;
            var no12=0;
            var no13=0;
            var no14=0;
            var no15=0;
            var d = new Date();
            var n = d.getHours() + ":" + d.getMinutes();
            var m = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
            
    //soal 1-10
    if(form.pilihan.value=='D. 3 dan 4'){
        nilai=nilai+6;
        no1=6;
    }
    if (form2.pilihan2.value=='C. mengatur CPU'){
        nilai=nilai+6;
        no2=6;
    }

    if (form3.pilihan3.value=='B. 1 dan 3'){
        nilai=nilai+6;
        no3=6;
    }

    if (form4.pilihan4.value=='C. 1, 3, dan 4'){
        nilai=nilai+6;
        no4=6;
    }

    if (form5.pilihan5.value=='B. 2, 3, dan 4'){
        nilai=nilai+6;
        no5=6;
    }

    if (form6.pilihan6.value=='C. 1, 2,dan 5'){
        nilai=nilai+6;
        no6=6;
    }

    if (form7.pilihan7.value=='D. 2, 3, dan 5'){
        nilai=nilai+6;
        no7=6;
    }

    if (form8.pilihan8.value=='C. memasang Optical Disc Drive'){
        nilai=nilai+6;
        no8=6;
    }
    
    if (form9.pilihan9.value=='E. 1, 4, dan 5'){
        nilai=nilai+6;
        no9=6;
    }

    if (form10.pilihan10.value=='C. 2 - 3 - 1'){
        nilai=nilai+6;
        no10=6;
    }
            
            //soal 11
            if (($('#div2').find('#drag1').length == 1) && ($('#div1').find('#drag2').length == 1) && ($('#div3').find('#drag3').length == 1))
            {
                nilai=nilai+6;
                no1=no1+6;
            }

            //soal 12
            var x = document.getElementById("mySelect");
            var x2 = document.getElementById("mySelect2");
            var x3 = document.getElementById("mySelect3");
            var x4 = document.getElementById("mySelect4");
            var x5 = document.getElementById("mySelect5");
            var x6 = document.getElementById("mySelect6");
            var x7 = document.getElementById("mySelect7");
            var x8 = document.getElementById("mySelect8");
            var x9 = document.getElementById("mySelect9");
            var x10 = document.getElementById("mySelect10");
            var x11 = document.getElementById("mySelect11");
            var x12 = document.getElementById("mySelect12");
            var i = x.selectedIndex;
            var i2 = x2.selectedIndex;
            var i3 = x3.selectedIndex;
            var i4 = x4.selectedIndex;
            var i5 = x5.selectedIndex;
            var i6 = x6.selectedIndex;
            var i7 = x7.selectedIndex;
            var i8 = x8.selectedIndex;
            var i9 = x9.selectedIndex;
            var i10 = x10.selectedIndex;
            var i11 = x11.selectedIndex;
            var i12 = x12.selectedIndex;
            if (x.options[i].text=="Lepas Case"){
                nilai=nilai+1;
                no2=no2+1;
            } 
            if (x2.options[i2].text=="Pasang Power Supply"){
                nilai=nilai+1;
                no2=no2+1;
            }
            if (x3.options[i3].text=="Pasang CPU"){
                nilai=nilai+1;
                no2=no2+1;
            }
            if (x4.options[i4].text=="Pasang Heatsink Fan"){
                nilai=nilai+1;
                no2=no2+1;
            }
            if (x5.options[i5].text=="Pasang RAM"){
                nilai=nilai+1;
                no2=no2+1;
            }
            if (x6.options[i6].text=="Pasang Motherboard"){
                nilai=nilai+1;
                no2=no2+1;
            }
            if (x7.options[i7].text=="Pasang VGA Card"){
                nilai=nilai+1;
                no2=no2+1;
            }
            if (x8.options[i8].text=="Pasang Harddisk Drive"){
                nilai=nilai+1;
                no2=no2+1;
            }
            if (x9.options[i9].text=="Pasang ODD"){
                nilai=nilai+1;
                no2=no2+1;
            }
            if (x10.options[i10].text=="Pasang Kabel Internal"){
                nilai=nilai+1;
                no2=no2+1;
            }
            if (x11.options[i11].text=="Pasang Case"){
                nilai=nilai+1;
                no2=no2+1;
            }
            if (x12.options[i12].text=="Pasang Kabel Eksternal"){
                nilai=nilai+1;
                no2=no2+1;
            }
            

            //soal 13
            if (($('#div4').find('#drag6').length == 1) && ($('#div5').find('#drag4').length == 1) && ($('#div6').find('#drag5').length == 1))
            {
                nilai=nilai+6;
                no3=no3+6;
            }

            //soal 14
            if(document.getElementById("powerledplus").selectedIndex == "3"){
                nilai=nilai+1.25;
                no4=no4+1.25;
            }
            if(document.getElementById("powerledmin").selectedIndex == "7"){
                nilai=nilai+1.25;
                no4=no4+1.25;
                
            }
            if(document.getElementById("powerswplus").selectedIndex == "5"){
                nilai=nilai+1.25;
                no4=no4+1.25;
            }
            if(document.getElementById("powerswmin").selectedIndex == "8"){
                nilai=nilai+1.25;
                no4=no4+1.25;
            }
            
            if(document.getElementById("hddledplus").selectedIndex == "6"){
                nilai=nilai+1.25;
                no4=no4+1.25;
            }
            if(document.getElementById("hddledmin").selectedIndex == "2"){
                nilai=nilai+1.25;
                no4=no4+1.25;
            }
            
            if(document.getElementById("resetswmin").selectedIndex == "4"){
                nilai=nilai+1.25;
                no4=no4+1.25;
            }
            if(document.getElementById("resetswplus").selectedIndex == "1"){
                nilai=nilai+1.25;
                no4=no4+1.25;
            }

            //soal 15
            if (($('#div7').find('#drag9').length == 1) && ($('#div8').find('#drag7').length == 1) && ($('#div7').find('#drag9').length == 1))
            {
                nilai=nilai+6;
                no5=no5+6;
            }

            //to storage
            var f = nilai.toFixed(2);
            localStorage.setItem("nilai", f);
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
            localStorage.setItem("no11", no11);
            localStorage.setItem("no12", no12);
            localStorage.setItem("no13", no13);
            localStorage.setItem("no14", no14);
            localStorage.setItem("no15", no15);
            localStorage.setItem("waktu", n);
            localStorage.setItem("tanggal", m);

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
            no_11 = localStorage.getItem("no11");
            no_12 = localStorage.getItem("no12");
            no_13 = localStorage.getItem("no13");
            no_14 = localStorage.getItem("no14");
            no_15 = localStorage.getItem("no15");
            
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
                    no11: no_11,
                    no12: no_12,
                    no13: no_13,
                    no14: no_14,
                    no15: no_15,
                    waktu: waktu_,
                    tanggal: tanggal_

                }

                nama_2 = localStorage.getItem("nama2");
                nama_3 = localStorage.getItem("nama3");
                nama_4 = localStorage.getItem("nama4");
                
                

                var database = firebase.database();
                database.ref("latihan").push(data);
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
                    no11: no_11,
                    no12: no_12,
                    no13: no_13,
                    no14: no_14,
                    no15: no_15,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }
                    database.ref("latihan").push(data2);	
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
                    no11: no_11,
                    no12: no_12,
                    no13: no_13,
                    no14: no_14,
                    no15: no_15,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }	
                    database.ref("latihan").push(data3);
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
                    no11: no_11,
                    no12: no_12,
                    no13: no_13,
                    no14: no_14,
                    no15: no_15,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }	
                    database.ref("latihan").push(data4);
                }


                setInterval(function(){ location.href="updf.html"; }, 2000);
        }
    }, 1000);
}


function cek(){
    var nilai=0;
    var no1=0;
    var no2=0;
    var no3=0;
    var no4=0;
    var no5=0;
    var no6=0;
    var no7=0;
    var no8=0;
    var no9=0;
    var no10=0;
    var no11=0;
    var no12=0;
    var no13=0;
    var no14=0;
    var no15=0;
    var d = new Date();
    var n = d.getHours() + ":" + d.getMinutes();
    var m = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
    //soal 1-10
    if(form.pilihan.value=='D. 3 dan 4'){
        nilai=nilai+6;
        no1=6;
    }
    if (form2.pilihan2.value=='C. mengatur CPU'){
        nilai=nilai+6;
        no2=6;
    }

    if (form3.pilihan3.value=='B. 1 dan 3'){
        nilai=nilai+6;
        no3=6;
    }

    if (form4.pilihan4.value=='C. 1, 3, dan 4'){
        nilai=nilai+6;
        no4=6;
    }

    if (form5.pilihan5.value=='B. 2, 3, dan 4'){
        nilai=nilai+6;
        no5=6;
    }

    if (form6.pilihan6.value=='C. 1, 2,dan 5'){
        nilai=nilai+6;
        no6=6;
    }

    if (form7.pilihan7.value=='D. 2, 3, dan 5'){
        nilai=nilai+6;
        no7=6;
    }

    if (form8.pilihan8.value=='C. memasang Optical Disc Drive'){
        nilai=nilai+6;
        no8=6;
    }
    
    if (form9.pilihan9.value=='E. 1, 4, dan 5'){
        nilai=nilai+6;
        no9=6;
    }

    if (form10.pilihan10.value=='C. 2 - 3 - 1'){
        nilai=nilai+6;
        no10=6;
    }
            
            //soal 11
            if (($('#div2').find('#drag1').length == 1) && ($('#div1').find('#drag2').length == 1) && ($('#div3').find('#drag3').length == 1))
            {
                nilai=nilai+6;
                no11=no11+6;
            }

            //soal 12
            var x = document.getElementById("mySelect");
            var x2 = document.getElementById("mySelect2");
            var x3 = document.getElementById("mySelect3");
            var x4 = document.getElementById("mySelect4");
            var x5 = document.getElementById("mySelect5");
            var x6 = document.getElementById("mySelect6");
            var x7 = document.getElementById("mySelect7");
            var x8 = document.getElementById("mySelect8");
            var x9 = document.getElementById("mySelect9");
            var x10 = document.getElementById("mySelect10");
            var x11 = document.getElementById("mySelect11");
            var x12 = document.getElementById("mySelect12");
            var i = x.selectedIndex;
            var i2 = x2.selectedIndex;
            var i3 = x3.selectedIndex;
            var i4 = x4.selectedIndex;
            var i5 = x5.selectedIndex;
            var i6 = x6.selectedIndex;
            var i7 = x7.selectedIndex;
            var i8 = x8.selectedIndex;
            var i9 = x9.selectedIndex;
            var i10 = x10.selectedIndex;
            var i11 = x11.selectedIndex;
            var i12 = x12.selectedIndex;
            if (x.options[i].text=="Lepas Case"){
                nilai=nilai+1;
                no12=no12+1;
            } 
            if (x2.options[i2].text=="Pasang Power Supply"){
                nilai=nilai+1;
                no12=no12+1;
            }
            if (x3.options[i3].text=="Pasang CPU"){
                nilai=nilai+1;
                no12=no12+1;
            }
            if (x4.options[i4].text=="Pasang Heatsink Fan"){
                nilai=nilai+1;
                no12=no12+1;
            }
            if (x5.options[i5].text=="Pasang RAM"){
                nilai=nilai+1;
                no12=no12+1;
            }
            if (x6.options[i6].text=="Pasang Motherboard"){
                nilai=nilai+1;
                no12=no12+1;
            }
            if (x7.options[i7].text=="Pasang VGA Card"){
                nilai=nilai+1;
                no12=no12+1;
            }
            if (x8.options[i8].text=="Pasang Harddisk Drive"){
                nilai=nilai+1;
                no12=no12+1;
            }
            if (x9.options[i9].text=="Pasang ODD"){
                nilai=nilai+1;
                no12=no12+1;
            }
            if (x10.options[i10].text=="Pasang Kabel Internal"){
                nilai=nilai+1;
                no12=no12+1;
            }
            if (x11.options[i11].text=="Pasang Case"){
                nilai=nilai+1;
                no12=no12+1;
            }
            if (x12.options[i12].text=="Pasang Kabel Eksternal"){
                nilai=nilai+1;
                no12=no12+1;
            }
            

            //soal 13
            if (($('#div4').find('#drag6').length == 1) && ($('#div5').find('#drag4').length == 1) && ($('#div6').find('#drag5').length == 1))
            {
                nilai=nilai+6;
                no13=no13+6;
            }

            //soal 14
            if(document.getElementById("powerledplus").selectedIndex == "3"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("powerledmin").selectedIndex == "7"){
                nilai=nilai+1.25;
                no14=no14+1.25;
                
            }
            if(document.getElementById("powerswplus").selectedIndex == "5"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("powerswmin").selectedIndex == "8"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            
            if(document.getElementById("hddledplus").selectedIndex == "6"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("hddledmin").selectedIndex == "2"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            
            if(document.getElementById("resetswmin").selectedIndex == "4"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("resetswplus").selectedIndex == "1"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }

            //soal 15
            if (($('#div7').find('#drag9').length == 1) && ($('#div8').find('#drag7').length == 1) && ($('#div7').find('#drag9').length == 1))
            {
                nilai=nilai+6;
                no15=no15+6;
            }

    //to storage
    var f = nilai.toFixed(2);
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
    localStorage.setItem("no11", no11);
    localStorage.setItem("no12", no12);
    localStorage.setItem("no13", no13);
    localStorage.setItem("no14", no14);
    localStorage.setItem("no15", no15);
    localStorage.setItem("waktu", n);
    localStorage.setItem("tanggal", m);
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
            no_11 = localStorage.getItem("no11");
            no_12 = localStorage.getItem("no12");
            no_13 = localStorage.getItem("no13");
            no_14 = localStorage.getItem("no14");
            no_15 = localStorage.getItem("no15");
            
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
                    no11: no_11,
                    no12: no_12,
                    no13: no_13,
                    no14: no_14,
                    no15: no_15,
                    waktu: waktu_,
                    tanggal: tanggal_

                }

                nama_2 = localStorage.getItem("nama2");
                nama_3 = localStorage.getItem("nama3");
                nama_4 = localStorage.getItem("nama4");
                
                

                var database = firebase.database();
                database.ref("latihan").push(data);
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
                    no11: no_11,
                    no12: no_12,
                    no13: no_13,
                    no14: no_14,
                    no15: no_15,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }
                    database.ref("latihan").push(data2);	
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
                    no11: no_11,
                    no12: no_12,
                    no13: no_13,
                    no14: no_14,
                    no15: no_15,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }	
                    database.ref("latihan").push(data3);
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
                    no11: no_11,
                    no12: no_12,
                    no13: no_13,
                    no14: no_14,
                    no15: no_15,
                    waktu: waktu_,
                    tanggal: tanggal_
                    }	
                    database.ref("latihan").push(data4);
                }


                setInterval(function(){ location.href="updf.html"; }, 2000);
    });
    

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
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
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
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;

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
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
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
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
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
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
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
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
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
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
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
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
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
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
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
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
}

function nav11(){
document.getElementById("soal1").hidden=true;
document.getElementById("soal2").hidden=true;
document.getElementById("soal3").hidden=true;
document.getElementById("soal4").hidden=true;
document.getElementById("soal5").hidden=true;
document.getElementById("soal6").hidden=true;
document.getElementById("soal7").hidden=true;
document.getElementById("soal8").hidden=true;
document.getElementById("soal9").hidden=true;
document.getElementById("soal10").hidden=true;
document.getElementById("soal11").hidden=false;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
}

function nav12(){
document.getElementById("soal1").hidden=true;
document.getElementById("soal2").hidden=true;
document.getElementById("soal3").hidden=true;
document.getElementById("soal4").hidden=true;
document.getElementById("soal5").hidden=true;
document.getElementById("soal6").hidden=true;
document.getElementById("soal7").hidden=true;
document.getElementById("soal8").hidden=true;
document.getElementById("soal9").hidden=true;
document.getElementById("soal10").hidden=true;
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=false;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
}

function nav13(){
document.getElementById("soal1").hidden=true;
document.getElementById("soal2").hidden=true;
document.getElementById("soal3").hidden=true;
document.getElementById("soal4").hidden=true;
document.getElementById("soal5").hidden=true;
document.getElementById("soal6").hidden=true;
document.getElementById("soal7").hidden=true;
document.getElementById("soal8").hidden=true;
document.getElementById("soal9").hidden=true;
document.getElementById("soal10").hidden=true;
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=false;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
}

function nav13(){
document.getElementById("soal1").hidden=true;
document.getElementById("soal2").hidden=true;
document.getElementById("soal3").hidden=true;
document.getElementById("soal4").hidden=true;
document.getElementById("soal5").hidden=true;
document.getElementById("soal6").hidden=true;
document.getElementById("soal7").hidden=true;
document.getElementById("soal8").hidden=true;
document.getElementById("soal9").hidden=true;
document.getElementById("soal10").hidden=true;
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=false;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=true;
}

function nav14(){
document.getElementById("soal1").hidden=true;
document.getElementById("soal2").hidden=true;
document.getElementById("soal3").hidden=true;
document.getElementById("soal4").hidden=true;
document.getElementById("soal5").hidden=true;
document.getElementById("soal6").hidden=true;
document.getElementById("soal7").hidden=true;
document.getElementById("soal8").hidden=true;
document.getElementById("soal9").hidden=true;
document.getElementById("soal10").hidden=true;
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=false;
document.getElementById("soal15").hidden=true;
}

function nav15(){
document.getElementById("soal1").hidden=true;
document.getElementById("soal2").hidden=true;
document.getElementById("soal3").hidden=true;
document.getElementById("soal4").hidden=true;
document.getElementById("soal5").hidden=true;
document.getElementById("soal6").hidden=true;
document.getElementById("soal7").hidden=true;
document.getElementById("soal8").hidden=true;
document.getElementById("soal9").hidden=true;
document.getElementById("soal10").hidden=true;
document.getElementById("soal11").hidden=true;
document.getElementById("soal12").hidden=true;
document.getElementById("soal13").hidden=true;
document.getElementById("soal14").hidden=true;
document.getElementById("soal15").hidden=false;
}


function responsif(x) {
if (x.matches) { // If media query matches
    document.getElementById("utama").style.paddingLeft= "10px";
    document.getElementById("utama").style.paddingRight= "10px";
    document.getElementById("navi").hidden=true;
    document.getElementById("s1").width= "350";
    document.getElementById("oke").style.width= "200px";
    document.getElementById("s2").width= "200";
    document.getElementById("oke2").style.width= "200px";
    document.getElementById("s3").width= "350";
    document.getElementById("oke3").style.width= "200px";
    document.getElementById("s4").width= "350";
    document.getElementById("oke4").style.width= "200px";
    document.getElementById("s5").width= "350";
    document.getElementById("oke5").style.width= "200px";
    document.getElementById("s6").width= "300";
    document.getElementById("oke6").style.width= "200px";
    document.getElementById("s7").width= "300";
    document.getElementById("oke7").style.width= "200px";
    document.getElementById("s8").width= "330";
    document.getElementById("oke8").style.width= "200px";
    document.getElementById("s9").width= "300";
    document.getElementById("oke9").style.width= "200px";
    document.getElementById("s10").width= "300";
    document.getElementById("oke10").style.width= "200px";

    
    document.getElementById("drag1").style.width= "100px";
    document.getElementById("drag1").style.height= "100px";
    document.getElementById("drag2").style.width= "100px";
    document.getElementById("drag2").style.height= "100px";
    document.getElementById("drag3").style.width= "100px";
    document.getElementById("drag3").style.height= "100px";
    document.getElementById("drag4").style.width= "100px";
    document.getElementById("drag4").style.height= "100px";
    document.getElementById("drag5").style.width= "100px";
    document.getElementById("drag5").style.height= "100px";
    document.getElementById("drag6").style.width= "100px";
    document.getElementById("drag6").style.height= "100px";
    document.getElementById("drag7").style.width= "100px";
    document.getElementById("drag7").style.height= "100px";
    document.getElementById("drag8").style.width= "65px";
    document.getElementById("drag8").style.height= "65px";
    document.getElementById("drag9").style.width= "60px";
    document.getElementById("drag9").style.height= "60px";
    
    
} else {
    document.getElementById("utama").style.paddingLeft= "50px";
    document.getElementById("utama").style.paddingRight= "50px";
    document.getElementById("s1").width= "500";
    document.getElementById("oke").style.width= "";
    document.getElementById("s2").width= "200";
    document.getElementById("oke2").style.width= "";
    document.getElementById("s3").width= "500";
    document.getElementById("oke3").style.width= "";    
    document.getElementById("s4").width= "500";
    document.getElementById("oke4").style.width= "";    
    document.getElementById("s5").width= "500";
    document.getElementById("oke5").style.width= "";    
    document.getElementById("s6").width= "400";
    document.getElementById("oke6").style.width= "";    
    document.getElementById("s7").width= "400";
    document.getElementById("oke7").style.width= "";    
    document.getElementById("s8").width= "500";
    document.getElementById("oke8").style.width= "";
    document.getElementById("s9").width= "400";
    document.getElementById("oke9").style.width= "";
    document.getElementById("s10").width= "400";
    document.getElementById("oke10").style.width= "";


    document.getElementById("drag1").style.width= "200px";
    document.getElementById("drag1").style.height= "200px";
    document.getElementById("drag2").style.width= "200px";
    document.getElementById("drag2").style.height= "200px";
    document.getElementById("drag3").style.width= "200px";
    document.getElementById("drag3").style.height= "200px";
    document.getElementById("drag4").style.width= "200px";
    document.getElementById("drag4").style.height= "200px";
    document.getElementById("drag5").style.width= "200px";
    document.getElementById("drag5").style.height= "200px";
    document.getElementById("drag6").style.width= "200px";
    document.getElementById("drag6").style.height= "200px";
    document.getElementById("drag7").style.width= "200px";
    document.getElementById("drag7").style.height= "200px";
    document.getElementById("drag8").style.width= "165px";
    document.getElementById("drag8").style.height= "165px";
    document.getElementById("drag9").style.width= "160px";
    document.getElementById("drag9").style.height= "160px";
    
    
    }
}

var x = window.matchMedia("(max-width: 1000px)");
responsif(x); // Call listener function at run time
x.addListener(responsif); // Attach listener function on state changes



