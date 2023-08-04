function Header({title}) {
    return <h1>{title}</h1>;
}
function Page() {
    return <Header title="Hello World"/>;
}
ReactDOM.render(<Page/>, document.getElementById('app'));