function PresetSearch(props) {
    return (<div>
        {props.preselectedwords.map((word) => <button>{word}</button>)}
    </div>)
}

export default PresetSearch