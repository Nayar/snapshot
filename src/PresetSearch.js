function PresetSearch(props) {
    return (<div>
        {props.preselectedwords.map((word) => <button onClick={props.onclick}>{word}</button>)}
    </div>)
}

export default PresetSearch