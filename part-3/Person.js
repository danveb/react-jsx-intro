const Person = (props) => {
    // ternary operator 
    let vote = props.age >= 18 ? "please go vote!" : "you must be 18"
    // map an array 
    let hobbies = props.hobbies.map(h => <li>{h}</li>)
    
    return (
        // return multiple elements within a <div> 
        <div>
            <p>Learn some information about this {props.person}</p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
            </ul>
            <ul>
                Hobbies: {hobbies}
            </ul>
            <h3>{vote}</h3>
        </div>
    )
}