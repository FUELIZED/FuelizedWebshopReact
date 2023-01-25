import { useState } from "react"

const back = () => {
    const e = document.getElementById("navbartop")
    const topPos = e.offsetTop
    const overflow = document.getElementById('overflow')
    console.log(overflow.scrollTop)
    document.getElementById('overflow').scrollTop = {topPos, behavior: 'smooth'}
}

export const BackToTop = () => {
    return (
        <button className={`h-16 bg-zinc-700 aspect-square absolute bottom-8 right-8 rounded-2xl`} onClick={back}>Back</button>
    )
}
