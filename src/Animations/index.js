export const hidden = {
    opacity: 0
}

export const visible = {
    y: 0,
    opacity: 1,
    position: "absolute",
    transition: {
        delay: 0.2
    }
}

export const exit = {
    y: -window.innerHeight + window.innerHeight/10,
    opacity: 0,
}

export const duration = 0.4