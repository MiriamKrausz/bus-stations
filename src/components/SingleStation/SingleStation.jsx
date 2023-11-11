import './SingleStation.css'
import PropTypes from 'prop-types';

function SingleStation({ station }) {
    return (
        <>
            <div className='tab-container'>
            city:{station.city}<br></br>
            street:{station.street}<br></br>
            stationNumber:{station.stationNumber}<br></br>
            lines:{station.lines.map((line,i)=>
            <span key={i}>{line},</span>)}<br></br>
            address:{station.address}<br></br>
            </div><br>
            </br>
            <br>
            </br>
        </>
    )
}


SingleStation.propTypes = {
    station: PropTypes.shape({
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        stationNumber: PropTypes.number.isRequired,
        lines: PropTypes.array.isRequired,
        address: PropTypes.string.isRequired,
    }).isRequired,

};
export default SingleStation