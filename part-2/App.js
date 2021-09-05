// App Component 
const App = () => {
    return (
        <div>
            {/* Components */}
            {/* pass key="value" for props Object */}
            <Tweet username="dan069" name="Daniel" date="09-04-2021" message="This is my first tweet!"/> 
            <Tweet username="sparky" name="Sora" date="09-06-2021" message="Sparky!" /> 
            <Tweet username="smartypants11933" name="Jess" date="09-10-2021" message="React.js all the way"/> 
        </div>
    )
}
// Render on DOM 
ReactDOM.render(<App />,
    document.getElementById('root'));