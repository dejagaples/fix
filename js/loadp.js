function rubah(){
	if (form.pilihan.value!=""){
		document.getElementById("k1").style.backgroundColor="blue";
		document.getElementById("k1").style.color="white";
	}
	if (form2.pilihan2.value!=""){
		document.getElementById("k2").style.backgroundColor="blue";
		document.getElementById("k2").style.color="white";
	}
	if (form3.pilihan3.value!=""){
		document.getElementById("k3").style.backgroundColor="blue";
		document.getElementById("k3").style.color="white";
	}
	if (form4.pilihan4.value!=""){
		document.getElementById("k4").style.backgroundColor="blue";
		document.getElementById("k4").style.color="white";
	}
	if (form5.pilihan5.value!=""){
		document.getElementById("k5").style.backgroundColor="blue";
		document.getElementById("k5").style.color="white";
	}
	if (form6.pilihan6.value!=""){
		document.getElementById("k6").style.backgroundColor="blue";
		document.getElementById("k6").style.color="white";
    }
    if (form7.pilihan7.value!=""){
		document.getElementById("k7").style.backgroundColor="blue";
		document.getElementById("k7").style.color="white";
    }
    if (form8.pilihan8.value!=""){
		document.getElementById("k8").style.backgroundColor="blue";
		document.getElementById("k8").style.color="white";
    }
    if (form9.pilihan9.value!=""){
		document.getElementById("k9").style.backgroundColor="blue";
		document.getElementById("k9").style.color="white";
    }
    if (form10.pilihan10.value!=""){
		document.getElementById("k10").style.backgroundColor="blue";
		document.getElementById("k10").style.color="white";
    }
    
   
    //k12
            q = document.getElementById("mySelect");
            x2 = document.getElementById("mySelect2");
            x3 = document.getElementById("mySelect3");
            x4 = document.getElementById("mySelect4");
            x5 = document.getElementById("mySelect5");
            x6 = document.getElementById("mySelect6");
            x7 = document.getElementById("mySelect7");
            x8 = document.getElementById("mySelect8");
            x9 = document.getElementById("mySelect9");
            x10 = document.getElementById("mySelect10");
            x11 = document.getElementById("mySelect11");
            x12 = document.getElementById("mySelect12");
            if( (q.selectedIndex != "0")&&(x2.selectedIndex != "0")&&(x3.selectedIndex != "0")&&(x4.selectedIndex != "0")&&(x5.selectedIndex != "0")&&(x6.selectedIndex != "0")&&(x7.selectedIndex != "0")&&(x8.selectedIndex != "0")&&(x9.selectedIndex != "0")&&(x10.selectedIndex != "0")&&(x11.selectedIndex != "0")&&(x12.selectedIndex != "0")){
                document.getElementById("k12").style.backgroundColor="blue";
                document.getElementById("k12").style.color="white";
            }
            else{
                document.getElementById("k12").style.backgroundColor="";
                document.getElementById("k12").style.color="";
            }
    //k14
            zq = document.getElementById("powerledplus");
            zx2 = document.getElementById("powerledmin");
            zx3 = document.getElementById("powerswplus");
            zx4 = document.getElementById("powerswmin");
            zx5 = document.getElementById("hddledplus");
            zx6 = document.getElementById("hddledmin");
            zx7 = document.getElementById("resetswmin");
            zx8 = document.getElementById("resetswplus");
            if( (zq.selectedIndex != "0")&&(zx2.selectedIndex != "0")&&(zx3.selectedIndex != "0")&&(zx4.selectedIndex != "0")&&(zx5.selectedIndex != "0")&&(zx6.selectedIndex != "0")&&(zx7.selectedIndex != "0")&&(zx8.selectedIndex != "0")){
                document.getElementById("k14").style.backgroundColor="blue";
                document.getElementById("k14").style.color="white";
            }
            else{
                document.getElementById("k14").style.backgroundColor="";
                document.getElementById("k14").style.color="";
            }


	
	
}

function sabar(){
    new duDialog ('Maaf', 'Kamu tidak bisa keluar sebelum menyelesaikan evaluasi');
}

//countdown
var tenMinutes = 60 * 30;
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
    if (form2.pilihan2.value=='C. Mengatur CPU'){
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

    if (form8.pilihan8.value=='C. Memasang Optical Disc Drive'){
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
            s11a1 = document.getElementById("mySelect11_a1");
            s11a2 = document.getElementById("mySelect11_a2");
            s11b1 = document.getElementById("mySelect11_b1");
            s11b2 = document.getElementById("mySelect11_b2");
            s11c1 = document.getElementById("mySelect11_c1");
            s11c2 = document.getElementById("mySelect11_c2");
            i11a1 = s11a1.selectedIndex;
            i11a2 = s11a2.selectedIndex;
            i11b1 = s11b1.selectedIndex;
            i11b2 = s11b2.selectedIndex;
            i11c1 = s11c1.selectedIndex;
            i11c2 = s11c2.selectedIndex;
            if (s11a1.options[i11a1].text=="RAM"){
                nilai=nilai+1;
                no11=no11+1;
            } 
            if (s11a2.options[i11a2].text=="Proses"){
                nilai=nilai+1;
                no11=no11+1;
            }
            if (s11b1.options[i11b1].text=="Mouse"){
                nilai=nilai+1;
                no11=no11+1;
            }
            if (s11b2.options[i11b2].text=="Input"){
                nilai=nilai+1;
                no11=no11+1;
            }
            if (s11c1.options[i11c1].text=="Speaker"){
                nilai=nilai+1;
                no11=no11+1;
            }
            if (s11c2.options[i11c2].text=="Output"){
                nilai=nilai+1;
                no11=no11+1;
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
            s13a1 = document.getElementById("mySelect13_a1");
            s13b1 = document.getElementById("mySelect13_b1");
            s13c1 = document.getElementById("mySelect13_c1");
            var i13a1 = s13a1.selectedIndex;
            var i13b1 = s13b1.selectedIndex;
            var i13c1 = s13c1.selectedIndex;
            if (s13a1.options[i13a1].text=="Mainboard"){
                nilai=nilai+2;
                no13=no13+2;
            } 
            if (s13b1.options[i13b1].text=="Prosesor"){
                nilai=nilai+2;
                no13=no13+2;
            }
            if (s13c1.options[i13c1].text=="Casing"){
                nilai=nilai+2;
                no13=no13+2;
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
            //hp
            if(document.getElementById("powerledplus2").selectedIndex == "5"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("powerledmin2").selectedIndex == "6"){
                nilai=nilai+1.25;
                no14=no14+1.25;
                
            }
            if(document.getElementById("powerswplus2").selectedIndex == "7"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("powerswmin2").selectedIndex == "8"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            
            if(document.getElementById("hddledplus2").selectedIndex == "3"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("hddledmin2").selectedIndex == "4"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            
            if(document.getElementById("resetswmin2").selectedIndex == "2"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("resetswplus2").selectedIndex == "1"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }

            //soal 15
            if (($('#div7').find('#drag9').length == 1) && ($('#div8').find('#drag7').length == 1) && ($('#div7').find('#drag9').length == 1))
            {
                nilai=nilai+6;
                no5=no5+6;
            }
            if (s15a1.options[i15a1].text=="Harddisk"){
                nilai=nilai+1;
                no15=no15+1;
            } 
            if (s15a2.options[i15a2].text=="Proses"){
                nilai=nilai+1;
                no15=no15+1;
            }
            if (s15b1.options[i15b1].text=="Printer"){
                nilai=nilai+1;
                no15=no15+1;
            }
            if (s15b2.options[i15b2].text=="Output"){
                nilai=nilai+1;
                no15=no15+1;
            }
            if (s15c1.options[i15c1].text=="Scanner"){
                nilai=nilai+1;
                no15=no15+1;
            }
            if (s15c2.options[i15c2].text=="Input"){
                nilai=nilai+1;
                no15=no15+1;
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
            mulai_= localStorage.getItem("mulai");

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
                    tanggal: tanggal_,
                    mulai: mulai_

                }

                

                var database = firebase.database();
                database.ref("latihan").push(data);
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
    if (form2.pilihan2.value=='C. Mengatur CPU'){
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

    if (form8.pilihan8.value=='C. Memasang Optical Disc Drive'){
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
            s11a1 = document.getElementById("mySelect11_a1");
            s11a2 = document.getElementById("mySelect11_a2");
            s11b1 = document.getElementById("mySelect11_b1");
            s11b2 = document.getElementById("mySelect11_b2");
            s11c1 = document.getElementById("mySelect11_c1");
            s11c2 = document.getElementById("mySelect11_c2");
            i11a1 = s11a1.selectedIndex;
            i11a2 = s11a2.selectedIndex;
            i11b1 = s11b1.selectedIndex;
            i11b2 = s11b2.selectedIndex;
            i11c1 = s11c1.selectedIndex;
            i11c2 = s11c2.selectedIndex;
            if (s11a1.options[i11a1].text=="RAM"){
                nilai=nilai+1;
                no11=no11+1;
            } 
            if (s11a2.options[i11a2].text=="Proses"){
                nilai=nilai+1;
                no11=no11+1;
            }
            if (s11b1.options[i11b1].text=="Mouse"){
                nilai=nilai+1;
                no11=no11+1;
            }
            if (s11b2.options[i11b2].text=="Input"){
                nilai=nilai+1;
                no11=no11+1;
            }
            if (s11c1.options[i11c1].text=="Speaker"){
                nilai=nilai+1;
                no11=no11+1;
            }
            if (s11c2.options[i11c2].text=="Output"){
                nilai=nilai+1;
                no11=no11+1;
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
            s13a1 = document.getElementById("mySelect13_a1");
            s13b1 = document.getElementById("mySelect13_b1");
            s13c1 = document.getElementById("mySelect13_c1");
            var i13a1 = s13a1.selectedIndex;
            var i13b1 = s13b1.selectedIndex;
            var i13c1 = s13c1.selectedIndex;
            if (s13a1.options[i13a1].text=="Mainboard"){
                nilai=nilai+2;
                no13=no13+2;
            } 
            if (s13b1.options[i13b1].text=="Prosesor"){
                nilai=nilai+2;
                no13=no13+2;
            }
            if (s13c1.options[i13c1].text=="Casing"){
                nilai=nilai+2;
                no13=no13+2;
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
            //hp
            if(document.getElementById("powerledplus2").selectedIndex == "5"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("powerledmin2").selectedIndex == "6"){
                nilai=nilai+1.25;
                no14=no14+1.25;
                
            }
            if(document.getElementById("powerswplus2").selectedIndex == "7"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("powerswmin2").selectedIndex == "8"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            
            if(document.getElementById("hddledplus2").selectedIndex == "3"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("hddledmin2").selectedIndex == "4"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            
            if(document.getElementById("resetswmin2").selectedIndex == "2"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            if(document.getElementById("resetswplus2").selectedIndex == "1"){
                nilai=nilai+1.25;
                no14=no14+1.25;
            }
            

            //soal 15
            if (($('#div7').find('#drag9').length == 1) && ($('#div8').find('#drag7').length == 1) && ($('#div7').find('#drag9').length == 1))
            {
                nilai=nilai+6;
                no15=no15+6;
            }
            s15a1 = document.getElementById("mySelect15_a1");
            s15a2 = document.getElementById("mySelect15_a2");
            s15b1 = document.getElementById("mySelect15_b1");
            s15b2 = document.getElementById("mySelect15_b2");
            s15c1 = document.getElementById("mySelect15_c1");
            s15c2 = document.getElementById("mySelect15_c2");
            i15a1 = s15a1.selectedIndex;
            i15a2 = s15a2.selectedIndex;
            i15b1 = s15b1.selectedIndex;
            i15b2 = s15b2.selectedIndex;
            i15c1 = s15c1.selectedIndex;
            i15c2 = s15c2.selectedIndex;
            if (s15a1.options[i15a1].text=="Harddisk"){
                nilai=nilai+1;
                no15=no15+1;
            } 
            if (s15a2.options[i15a2].text=="Proses"){
                nilai=nilai+1;
                no15=no15+1;
            }
            if (s15b1.options[i15b1].text=="Printer"){
                nilai=nilai+1;
                no15=no15+1;
            }
            if (s15b2.options[i15b2].text=="Output"){
                nilai=nilai+1;
                no15=no15+1;
            }
            if (s15c1.options[i15c1].text=="Scanner"){
                nilai=nilai+1;
                no15=no15+1;
            }
            if (s15c2.options[i15c2].text=="Input"){
                nilai=nilai+1;
                no15=no15+1;
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
            mulai_= localStorage.getItem("mulai");

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
                    tanggal: tanggal_,
                    mulai: mulai_

                }

                
                

                var database = firebase.database();
                database.ref("latihan").push(data);
                setInterval(function(){ location.href="updf.html"; }, 2000);
    });
    

}

//ambil jawaban
function p1a(){
form.pilihan.value= "A. "+ document.getElementById("a").innerHTML;rubah();rubah();
}  
function p1b(){
form.pilihan.value= "B. "+ document.getElementById("b").innerHTML;rubah();
}
function p1c(){
form.pilihan.value= "C. "+ document.getElementById("c").innerHTML;rubah();
}
function p1d(){
form.pilihan.value= "D. "+ document.getElementById("d").innerHTML;rubah();
}
function p1e(){
form.pilihan.value= "E. "+ document.getElementById("e").innerHTML;rubah();
}
function p2a(){
form2.pilihan2.value= "A. "+ document.getElementById("2a").innerHTML;rubah();
}  
function p2b(){
form2.pilihan2.value= "B. "+ document.getElementById("2b").innerHTML;rubah();
}
function p2c(){
form2.pilihan2.value= "C. "+ document.getElementById("2c").innerHTML;rubah();
}
function p2d(){
form2.pilihan2.value= "D. "+ document.getElementById("2d").innerHTML;rubah();
}
function p2e(){
form2.pilihan2.value= "E. "+ document.getElementById("2e").innerHTML;rubah();
}
function p3a(){
form3.pilihan3.value= "A. "+ document.getElementById("3a").innerHTML;rubah();
}  
function p3b(){
form3.pilihan3.value= "B. "+ document.getElementById("3b").innerHTML;rubah();
}
function p3c(){
form3.pilihan3.value= "C. "+ document.getElementById("3c").innerHTML;rubah();
}
function p3d(){
form3.pilihan3.value= "D. "+ document.getElementById("3d").innerHTML;rubah();
}
function p3e(){
form3.pilihan3.value= "E. "+ document.getElementById("3e").innerHTML;rubah();
}    
function p4a(){
form4.pilihan4.value= "A. "+ document.getElementById("4a").innerHTML;rubah();
}  
function p4b(){
form4.pilihan4.value= "B. "+ document.getElementById("4b").innerHTML;rubah();
}
function p4c(){
form4.pilihan4.value= "C. "+ document.getElementById("4c").innerHTML;rubah();
}
function p4d(){
form4.pilihan4.value= "D. "+ document.getElementById("4d").innerHTML;rubah();
}
function p4e(){
form4.pilihan4.value= "E. "+ document.getElementById("4e").innerHTML;rubah();
}
function p5a(){
form5.pilihan5.value= "A. "+ document.getElementById("5a").innerHTML;rubah();
}  
function p5b(){
form5.pilihan5.value= "B. "+ document.getElementById("5b").innerHTML;rubah();
}
function p5c(){
form5.pilihan5.value= "C. "+ document.getElementById("5c").innerHTML;rubah();
}
function p5d(){
form5.pilihan5.value= "D. "+ document.getElementById("5d").innerHTML;rubah();
}
function p5e(){
form5.pilihan5.value= "E. "+ document.getElementById("5e").innerHTML;rubah();
}
function p6a(){
form6.pilihan6.value= "A. "+ document.getElementById("6a").innerHTML;rubah();
}  
function p6b(){
form6.pilihan6.value= "B. "+ document.getElementById("6b").innerHTML;rubah();
}
function p6c(){
form6.pilihan6.value= "C. "+ document.getElementById("6c").innerHTML;rubah();
}
function p6d(){
form6.pilihan6.value= "D. "+ document.getElementById("6d").innerHTML;rubah();
}
function p6e(){
form6.pilihan6.value= "E. "+ document.getElementById("6e").innerHTML;rubah();
}
function p7a(){
form7.pilihan7.value= "A. "+ document.getElementById("7a").innerHTML;rubah();
}  
function p7b(){
form7.pilihan7.value= "B. "+ document.getElementById("7b").innerHTML;rubah();
}
function p7c(){
form7.pilihan7.value= "C. "+ document.getElementById("7c").innerHTML;rubah();
}
function p7d(){
form7.pilihan7.value= "D. "+ document.getElementById("7d").innerHTML;rubah();
}
function p7e(){
form7.pilihan7.value= "E. "+ document.getElementById("7e").innerHTML;rubah();
}
function p8a(){
form8.pilihan8.value= "A. "+ document.getElementById("8a").innerHTML;rubah();
}  
function p8b(){
form8.pilihan8.value= "B. "+ document.getElementById("8b").innerHTML;rubah();
}
function p8c(){
form8.pilihan8.value= "C. "+ document.getElementById("8c").innerHTML;rubah();
}
function p8d(){
form8.pilihan8.value= "D. "+ document.getElementById("8d").innerHTML;rubah();
}
function p8e(){
form8.pilihan8.value= "E. "+ document.getElementById("8e").innerHTML;rubah();
}
function p9a(){
form9.pilihan9.value= "A. "+ document.getElementById("9a").innerHTML;rubah();
}  
function p9b(){
form9.pilihan9.value= "B. "+ document.getElementById("9b").innerHTML;rubah();
}
function p9c(){
form9.pilihan9.value= "C. "+ document.getElementById("9c").innerHTML;rubah();
}
function p9d(){
form9.pilihan9.value= "D. "+ document.getElementById("9d").innerHTML;rubah();
}
function p9e(){
form9.pilihan9.value= "E. "+ document.getElementById("9e").innerHTML;rubah();
}
function p10a(){
form10.pilihan10.value= "A. "+ document.getElementById("10a").innerHTML;rubah();
}  
function p10b(){
form10.pilihan10.value= "B. "+ document.getElementById("10b").innerHTML;rubah();
}
function p10c(){
form10.pilihan10.value= "C. "+ document.getElementById("10c").innerHTML;rubah();
}
function p10d(){
form10.pilihan10.value= "D. "+ document.getElementById("10d").innerHTML;rubah();
}
function p10e(){
form10.pilihan10.value= "E. "+ document.getElementById("10e").innerHTML;rubah();
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
document.getElementById("no").innerHTML=`<b>1</b>`;
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
document.getElementById("no").innerHTML=`<b>2</b>`;

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
document.getElementById("no").innerHTML=`<b>3</b>`;
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
document.getElementById("no").innerHTML=`<b>4</b>`;
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
document.getElementById("no").innerHTML=`<b>5</b>`;
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
document.getElementById("no").innerHTML=`<b>6</b>`;
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
document.getElementById("no").innerHTML=`<b>7</b>`;
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
document.getElementById("no").innerHTML=`<b>8</b>`;
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
document.getElementById("no").innerHTML=`<b>9</b>`;
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
document.getElementById("no").innerHTML=`<b>10</b>`;
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
document.getElementById("no").innerHTML=`<b>11</b>`;
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
document.getElementById("no").innerHTML=`<b>12</b>`;
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
document.getElementById("no").innerHTML=`<b>13</b>`;
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
document.getElementById("no").innerHTML=`<b>14</b>`;
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
document.getElementById("no").innerHTML=`<b>15</b>`;
}


function responsif(r) {
if (r.matches) { // If media query matches
    document.getElementById("utama").style.paddingLeft= "10px";
    document.getElementById("utama").style.paddingRight= "10px";
    document.getElementById("navi").hidden=true;
    document.getElementById("kom").hidden=true;
    document.getElementById("kom2").hidden=true;
    document.getElementById("kom3").hidden=true;
    document.getElementById("kom14").hidden=true;
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
    document.getElementById("hpya").hidden=true;
    document.getElementById("hpya2").hidden=true;
    document.getElementById("hpya3").hidden=true;
    document.getElementById("hpya14").hidden=true;
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

var r = window.matchMedia("(max-width: 1000px)");
responsif(r); // Call listener function at run time
r.addListener(responsif); // Attach listener function on state changes

let ambil = localStorage.getItem("nama1");
	document.getElementById("namee").innerHTML=ambil;


