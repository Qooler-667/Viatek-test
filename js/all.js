document.getElementById("open-modal-btn")
    .addEventListener("click", function () {
        document.getElementById("my-modal")
            .classList.add("open")
    })

//  ЗАКРЫТЬ
document.getElementById("close-my-modal-btn")
    .addEventListener("click", function () {
        document.getElementById("my-modal")
            .classList.remove("open")
    })

// ЗАКРЫТИЕ ПРИ НАЖАТИИ НА Esc
window.addEventListener('keydown', (e) => { if (e.key === "Escape") { document.getElementById("my-modal").classList.remove("open") } })

// ЗАКРЫТИЕ ПРИ КЛИКЕ ВНЕ ОКНА
document.querySelector("#my-modal .modal__box").addEventListener('click', event => { event._isClickWithInModal = true; });

document.getElementById("my-modal").addEventListener('click', event => { if (event._isClickWithInModal) return; event.currentTarget.classList.remove('open'); });



document.getElementById("open-list-btn")
    .addEventListener("click", function () {
        document.getElementById("service")
            .classList.add("open")
    })

//  ЗАКРЫТЬ
document.getElementById("close-list-btn")
    .addEventListener("click", function () {
        document.getElementById("service")
            .classList.remove("open")
    })
