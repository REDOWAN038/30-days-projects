let noteElement = document.querySelector(".create-note")
let createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")

createBtn.addEventListener('click', () => {
 let inputBox = document.createElement("p")
 let img = document.createElement("img")
 inputBox.className = "input-box"
 inputBox.setAttribute("contenteditable", "true")
 img.src = "./images/delete.png"
 noteElement.appendChild(inputBox).appendChild(img)
})

noteElement.addEventListener('click', (e) => {
 if (e.target.tagName === "IMG") {
  e.target.parentElement.remove()
 }
})