// import './presetsearch.css'
// function PresetSearch(props) {
//     return (<div class='presetsearch'>
//         {props.preselectedwords.map((word) => <button onClick={props.onclick}>{word}</button>)}
//     </div>)
// }

// export default PresetSearch


import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './presetsearch.css';

function PresetSearch(props) {
    return (
        <div className='presetsearch'>
            {props.preselectedwords.map((word) => (
                <Button onClick={props.onclick}>{word}</Button>
            ))}
        </div>
    );
}
export default PresetSearch