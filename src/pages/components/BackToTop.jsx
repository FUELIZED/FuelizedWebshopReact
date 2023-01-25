import { AiOutlineArrowUp } from 'react-icons/ai'

const back = () => {
    const e = document.getElementById("navbartop")
    const topPos = e.offsetTop
    const overflow = document.getElementById('overflow')
    console.log(overflow.scrollTop)
    document.getElementById('overflow').scrollTop = {topPos, behavior: 'smooth'}
}

export const BackToTop = () => {
    return (
        <button className={`p-2 bg-zinc-700 aspect-square absolute bottom-8 right-8 rounded-2xl`} onClick={back}><AiOutlineArrowUp size={30}/></button>
    )
}
