// App Component 
const App = () => {
    return (
        <div>
            {/* Components */}
            <FirstComponent /> 
        </div>
    )
}
// Render on DOM 
ReactDOM.render(<App />,
    document.getElementById('root'));