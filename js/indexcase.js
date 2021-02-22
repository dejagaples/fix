var rootRef = firebase.database().ref().child("pasang_cs");

rootRef.on("child_added", snap => {
    var kelompok = snap.child("kelompok").val();
    var anggota = snap.child("anggota").val();
    var tempat = snap.child("tempat").val();
    var link = snap.child("link").val();
    

$("#table_body").append("<tr><td>"+ kelompok+"</td><td>"+anggota+"</td><td>"+tempat+"</td><td>"+link+"</td></tr>");
});