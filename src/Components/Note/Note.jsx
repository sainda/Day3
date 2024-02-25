import './Note.css'
export default function Note({icon,alt,value,text,bgColor,txtColor}){
    return(
        <div className="noteDiv" style={{backgroundColor:bgColor}}>
            <div className="note">
                <img src={icon} alt={alt} />
                <p style={{color:txtColor}} className='nameNote'>{text}</p>
            </div>
            <div className='note'>
            <p className="scoreNote">{value}</p>
            <p className="percentNote"> / 100</p>
            </div>
        </div>
    )
}
