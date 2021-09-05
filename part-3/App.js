// App Component 
const App = () => {
    return (
        <div>
            {/* Components */}
            {/* pass key="value" for props Object */}
            <Person name="Daniel" age={30} hobbies={['walking the dog', 'watching Netflix', 'eating tacos']}/> 
            <Person name="Alexandra" age={16} hobbies={['cooking', 'tennis']}/> 
            <Person name="Paul" age={77} hobbies={['golf', 'cooking', 'cleaning']}/> 
        </div>
    )
}
// Render on DOM 
ReactDOM.render(<App />,
    document.getElementById('root'));