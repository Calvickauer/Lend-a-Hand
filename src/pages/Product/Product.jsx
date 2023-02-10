import MyCalendar from '../../components/Calendar/Calendar'

export default function Product() {
    return (
        <>
        <h2>Kendall's Fender Guitar Amp</h2>
        <div className="photos">
        <img className="responsive" src="https://cdn.mos.cms.futurecdn.net/fzZXdEcRuX6cr5CZexmuwn.jpg"/>
        <img className="responsive" src="https://www.nstuffmusic.com/images/product/large/ae00-57701.jpg"/>
        </div>
        <div className="description">
            <h3>Your drummer forgot the amps...again!</h3>
            <h5>Take this puppy on stage and rock the show. Twin 12" Jensen N12Ks in the Tone Master deliver a massive, defined low end and a sweet top-end sparkle at a greatly reduced weight. Around back, a 5-way power attenuator transparently reduces wattage to let you achieve just the right tube-flavored cluck and breakup for any live and studio setting. You also get an XLR balanced output with your choice of flat-response or two onboard cab simulations for silent performance and recording.</h5>
        </div>
        <h1>Select the day/s you would like to rent below:</h1>
        <div className='calendar'> 
        <MyCalendar /> 
        </div>
        </>

    )

    };

    
