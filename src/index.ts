function mousemove(e: MouseEvent) {
    document.body.innerHTML = `${e.pageX}, ${e.pageY}`
}

window.addEventListener("mousemove", mousemove)