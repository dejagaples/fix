var rootRef = firebase.database().ref().child("latihan");

rootRef.on("child_added", snap => {
    var nama = snap.child("nama").val();
    var kelas = snap.child("kelas").val();
    var tanggal = snap.child("tanggal").val();
    var waktu = snap.child("waktu").val();
    var no1 = snap.child("no1").val();
    var no2 = snap.child("no2").val();
    var no3 = snap.child("no3").val();
    var no4 = snap.child("no4").val();
    var no5 = snap.child("no5").val();
    var no6 = snap.child("no6").val();
    var no7 = snap.child("no7").val();
    var no8 = snap.child("no8").val();
    var no9 = snap.child("no9").val();
    var no10 = snap.child("no10").val();
    var no11 = snap.child("no11").val();
    var no12 = snap.child("no12").val();
    var no13 = snap.child("no13").val();
    var no14 = snap.child("no14").val();
    var no15 = snap.child("no15").val();
    var nilai = snap.child("nilai").val();

    $("#table_body").append("<tr><td>"+ nama+"</td><td>"+kelas+"</td><td>"+tanggal+"</td><td>"+waktu+"</td><td>"+no1+"</td><td>"+no2+"</td><td>"+no3+"</td><td>"+no4+"</td><td>"+no5+"</td><td>"+no6+"</td><td>"+no7+"</td><td>"+no8+"</td><td>"+no9+"</td><td>"+no10+"</td><td>"+no11+"</td><td>"+no12+"</td><td>"+no13+"</td><td>"+no14+"</td><td>"+no15+"</td><td>"+nilai+"</td></tr>");
});