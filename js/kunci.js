const materi1 = document.querySelector("#materi1")
const materi2 = document.querySelector("#materi2")
const materi3 = document.querySelector("#materi3")

let getPage = (idName, localName) => {
    const getLocal = localStorage.getItem(localName)
    if (getLocal != null) {
        idName.classList.remove("disabled")
        idName.classList.add("list-group-item-success")
    }
}

getPage(materi1, "materi1")
getPage(materi2, "materi2")
getPage(materi3, "materi3")
