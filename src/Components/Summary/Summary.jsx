import Note from "../Note/Note";
import reaction from '../../Assets/reaction.svg';
import memory from '../../Assets/memory.svg';
import verbal from  '../../Assets/verbal.svg';
import visual from '../../Assets/visual.svg';
import Button from "../Button/Button";
import './Summary.css'

export default function Summary(){
    return(
        <div>
        <h1 className="Title">Sumary</h1>
        <div className="scores">
        <Note
        icon={reaction}
        alt={"Reaction"}
        text={"Reaction"}
        value={"80"}
        bgColor='rgb(231 62 15 / 8%)'
        txtColor='#ff3100'
        />
        <Note
        icon={memory}
        alt={'Memory'}
        text={'Memory'}
        value={'92'}
        bgColor='rgb(255 162 0 / 13%)'
        txtColor='#ffbf00'
        />
        <Note
        icon={verbal}
        alt={'Verbal'}
        text={'Verbal'}
        value={'61'}
        bgColor='rgb(17 231 51 / 17%)'
        txtColor='#1dd97b'
        />
        <Note
        icon={visual}
        alt={'Visual'}
        text={'Visual'}
        value={'72'}
        bgColor='rgb(45 186 237 / 11%)'
        txtColor='#282885'
        />
        </div>
        <Button/>
        </div>

    )
}