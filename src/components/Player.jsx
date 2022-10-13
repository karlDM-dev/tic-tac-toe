export default function Player({player, piece}) {
    return (
        <div className='mt-5 font-semibold text-lg text-slate-800'>Turn for Player { player } &#60;{ piece }&#62;</div>
    )
}