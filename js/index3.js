var rootRef = firebase.database().ref().child("kuis_3");

rootRef.on("child_added", snap => {
    var nama = snap.child("nama").val();
    var kelas = snap.child("kelas").val();
    var nilai = snap.child("nilai").val();

$("#table_body").append("<tr><td>"+ nama+"</td><td>"+kelas+"</td><td>"+nilai+"</td></tr>");
});