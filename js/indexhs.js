var rootRef = firebase.database().ref().child("pasang_hs");

rootRef.on("child_added", snap => {
    var kelompok = snap.child("kelompok").val();
    var anggota = snap.child("anggota").val();
    var tempat = snap.child("tempat").val();
    var link = snap.child("link").val();
    

$("#table_body").append(`
    <tr>
        <td>${kelompok}</td>
        <td>${anggota}</td>
        <td>${tempat}</td>
        <td>
            <center>
            <a href="${link}" target="_blank">
                <button class="button-pertanyaan">Lihat</button>
            </a>
            </center>
        </td>
    </tr>`);
});