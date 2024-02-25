import './Result.css'

export default function Result(){
    return(
        <div className="bigDiv">
            <h3>Your Result</h3>
            <div className="result">
                <p className="score">76</p>
                <p className="percent">of 100</p>
            </div>
            <h1>Great</h1>
            <p className="message">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}