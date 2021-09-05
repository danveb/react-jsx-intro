// App Component 
const App = () => {
    return (
        <div>
            {/* Components */}
            <FirstComponent /> 
            <NamedComponent name="Daniel"/>
        </div>
    )
}
// Render on DOM 
ReactDOM.render(<App />,
    document.getElementById('root'));