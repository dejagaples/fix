var rootRef = firebase.database().ref().child("kuis_1");

rootRef.on("child_added", snap => {
    var nama = snap.child("nama").val();
    var kelas = snap.child("kelas").val();
    var no1 = snap.child("no1").val();
    var no2 = snap.child("no2").val();
    var no3 = snap.child("no3").val();
    var no4 = snap.child("no4").val();
    var no5 = snap.child("no5").val();
    var nilai = snap.child("nilai").val();

$("#table_body").append("<tr><td>"+ nama+"</td><td>"+kelas+"</td><td>"+no1+"</td><td>"+no2+"</td><td>"+no3+"</td><td>"+no4+"</td><td>"+no5+"</td><td>"+nilai+"</td></tr>");
});