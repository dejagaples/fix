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
	
	
}

function r7(){
	if((document.getElementById("7a").checked == true)||(document.getElementById("7g").checked == true)||(document.getElementById("7a").checked == true)||(document.getElementById("7b").checked == true)||(document.getElementById("7c").checked == true)||(document.getElementById("7d").checked == true)||(document.getElementById("7e").checked == true)||(document.getElementById("7f").checked == true)){
		document.getElementById("k7").style.backgroundColor="blue";
		document.getElementById("k7").style.color="white";
	}
	else{
		document.getElementById("k7").style.backgroundColor="";
		document.getElementById("k7").style.color="";
	}
}

function r8(){
	if ((document.getElementById("8c").checked == true)||(document.getElementById("8e").checked == true)||(document.getElementById("8a").checked == true)||(document.getElementById("8b").checked == true)||(document.getElementById("8d").checked == true)){
		document.getElementById("k8").style.backgroundColor="blue";
		document.getElementById("k8").style.color="white";
	}
	else{
		document.getElementById("k8").style.backgroundColor="";
		document.getElementById("k8").style.color="";
	}
}

function r9(){
	if ((document.getElementById("9c").checked == true)||(document.getElementById("9d").checked == true)||(document.getElementById("9h").checked == true)||(document.getElementById("9a").checked == true)||(document.getElementById("9b").checked == true)||(document.getElementById("9e").checked == true)||(document.getElementById("9f").checked == true)||(document.getElementById("9g").checked == true)){
		document.getElementById("k9").style.backgroundColor="blue";
		document.getElementById("k9").style.color="white";
	}
	else{
		document.getElementById("k9").style.backgroundColor="";
		document.getElementById("k9").style.color="";
	}
}

function r10(){
	if ((document.getElementById("10a").checked == true)||(document.getElementById("10b").checked == true)||(document.getElementById("10c").checked == true)||(document.getElementById("10d").checked == true)||(document.getElementById("10e").checked == true)||(document.getElementById("10f").checked == true)||(document.getElementById("10g").checked == true)||(document.getElementById("10h").checked == true)){
		document.getElementById("k10").style.backgroundColor="blue";
		document.getElementById("k10").style.color="white";
	}
	else{
		document.getElementById("k10").style.backgroundColor="";
		document.getElementById("k10").style.color="";
	}
}



function sabar1(){
			new duDialog ('Maaf', 'Saat kuis tidak boleh mencontek !');
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
						var n = d.getHours() + ":" + d.getMinutes();
            			var m = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
            
						if(form.pilihan.value=='D. 3 dan 4'){
							nilai=nilai+10;
							no1="B";
						}
						if (form2.pilihan2.value=='B. HDD LED'){
							nilai=nilai+10;
							no2="B";
						}

						if (form3.pilihan3.value=='B. Master Standalone'){
							nilai=nilai+10;
							no3="B";
						}

						if (form4.pilihan4.value=='C. Putih'){
							nilai=nilai+10;
							no4="B";
						}

						if (form5.pilihan5.value=='C. Jika ada kabel merah, berarti merah negatif (-).'){
							nilai=nilai+10;
							no5="B";
						}

                        if (form6.pilihan6.value=='C. Mengatur CPU'){
							nilai=nilai+10;
							no6="B";
						}

                        if ((document.getElementById("7f").checked == true)&&(document.getElementById("7g").checked == true)&&(document.getElementById("7a").checked == false)&&(document.getElementById("7b").checked == false)&&(document.getElementById("7c").checked == false)&&(document.getElementById("7d").checked == false)&&(document.getElementById("7e").checked == false)){
                            nilai=nilai+10;
							no7="B";
				        }

                        if ((document.getElementById("8c").checked == true)&&(document.getElementById("8e").checked == true)&&(document.getElementById("8a").checked == false)&&(document.getElementById("8b").checked == false)&&(document.getElementById("8d").checked == false)){
                            nilai=nilai+10;
							no8="B";
				        }

                        if ((document.getElementById("9c").checked == true)&&(document.getElementById("9d").checked == true)&&(document.getElementById("9h").checked == true)&&(document.getElementById("9a").checked == false)&&(document.getElementById("9b").checked == false)&&(document.getElementById("9e").checked == false)&&(document.getElementById("9f").checked == false)&&(document.getElementById("9g").checked == false)){
                            nilai=nilai+10;
							no9="B";
				        }
						
                        if ((document.getElementById("10a").checked == true)&&(document.getElementById("10b").checked == false)&&(document.getElementById("10c").checked == false)&&(document.getElementById("10d").checked == false)&&(document.getElementById("10e").checked == false)&&(document.getElementById("10f").checked == false)&&(document.getElementById("10g").checked == true)&&(document.getElementById("10h").checked == false)){
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
							waktu: waktu_,
							tanggal: tanggal_,
							mulai: mulai_

						}
						

						var database = firebase.database();
						database.ref("kuis_1").push(data);
						location.href="updf1.html";

					}
    			}, 1000);
			}

		
		//ambil jawaban
		function p1a(){
			form.pilihan.value= "A. "+ document.getElementById("a").innerHTML;
			rubah();
        }  
        function p1b(){
			form.pilihan.value= "B. "+ document.getElementById("b").innerHTML;
			rubah();
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
						var n = d.getHours() + ":" + d.getMinutes();
            			var m = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
            
						if(form.pilihan.value=='D. 3 dan 4'){
							nilai=nilai+10;
							no1="B";
						}
						if (form2.pilihan2.value=='B. HDD LED'){
							nilai=nilai+10;
							no2="B";
						}

						if (form3.pilihan3.value=='B. Master Standalone'){
							nilai=nilai+10;
							no3="B";
						}

						if (form4.pilihan4.value=='C. Putih'){
							nilai=nilai+10;
							no4="B";
						}

						if (form5.pilihan5.value=='C. Jika ada kabel merah, berarti merah negatif (-).'){
							nilai=nilai+10;
							no5="B";
						}

                        if (form6.pilihan6.value=='C. Mengatur CPU'){
							nilai=nilai+10;
							no6="B";
						}

                        if ((document.getElementById("7f").checked == true)&&(document.getElementById("7g").checked == true)&&(document.getElementById("7a").checked == false)&&(document.getElementById("7b").checked == false)&&(document.getElementById("7c").checked == false)&&(document.getElementById("7d").checked == false)&&(document.getElementById("7e").checked == false)){
                            nilai=nilai+10;
							no7="B";
				        }

                        if ((document.getElementById("8c").checked == true)&&(document.getElementById("8e").checked == true)&&(document.getElementById("8a").checked == false)&&(document.getElementById("8b").checked == false)&&(document.getElementById("8d").checked == false)){
                            nilai=nilai+10;
							no8="B";
				        }

                        if ((document.getElementById("9c").checked == true)&&(document.getElementById("9d").checked == true)&&(document.getElementById("9h").checked == true)&&(document.getElementById("9a").checked == false)&&(document.getElementById("9b").checked == false)&&(document.getElementById("9e").checked == false)&&(document.getElementById("9f").checked == false)&&(document.getElementById("9g").checked == false)){
                            nilai=nilai+10;
							no9="B";
				        }
						
                        if ((document.getElementById("10a").checked == true)&&(document.getElementById("10b").checked == false)&&(document.getElementById("10c").checked == false)&&(document.getElementById("10d").checked == false)&&(document.getElementById("10e").checked == false)&&(document.getElementById("10f").checked == false)&&(document.getElementById("10g").checked == true)&&(document.getElementById("10h").checked == false)){
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
							waktu: waktu_,
							tanggal: tanggal_,
							mulai: mulai_

						}

						var database = firebase.database();
						database.ref("kuis_1").push(data);
						location.href="updf1.html";

						
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
				document.getElementById("no").innerHTML=`<b>10</b>`;
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
                document.getElementById("s3").width= "300";
                document.getElementById("oke3").style.width= "200px";
                document.getElementById("s4").width= "300";
                document.getElementById("oke4").style.width= "200px";
                document.getElementById("oke5").style.width= "200px";
                document.getElementById("s6").width= "150";
                document.getElementById("oke6").style.width= "200px";
                document.getElementById("s8").width= "100";
                document.getElementById("s9").width= "250";
				document.getElementById("s10").width= "300";
				document.getElementById("s10").width= "300";

			} else {
				document.getElementById("utama").style.paddingLeft= "50px";
				document.getElementById("utama").style.paddingRight= "50px";
	            document.getElementById("s1").style.width= "";
                document.getElementById("oke").style.width= "";
                document.getElementById("navi").hidden=false;
                document.getElementById("s2").style.width= "300px";
                document.getElementById("oke2").style.width= "";
                document.getElementById("s3").width= "300";
                document.getElementById("oke3").style.width= "";
                document.getElementById("s4").width= "300";
                document.getElementById("oke4").style.width= "";
                document.getElementById("oke5").style.width= "";
                document.getElementById("s6").width= "200";
                document.getElementById("oke6").style.width= "";
                document.getElementById("s8").width= "150";
                document.getElementById("s9").width= "300";
                document.getElementById("s10").width= "300";
				}
			}

			var x = window.matchMedia("(max-width: 700px)");
			responsif(x); // Call listener function at run time
			x.addListener(responsif); // Attach listener function on state changes

			let ambil = localStorage.getItem("nama1");
			document.getElementById("namee").innerHTML=ambil;