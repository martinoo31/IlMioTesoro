class App extends React.Component {
  constructor(){
        super();
        this.state = {
        result: ""
        }
        this.onClick = this.onClick.bind(this); 
  }

  onClick(e) {
        let button = e.target.value
        if(button === "="){

            this.calculate()
        }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }

      else {
          this.setState({
        result: this.state.result + button
          })
      }
  };


  render() {
      return (

        <div className="Section">
            <h1>CampoFiorito</h1>
            <button onClick={this.onClick(this)}>Configurazione</button>
            <button onClick={this.onClick(this)}>Griglia</button>
            <button onClick={this.onClick(this)}>Conteggio</button>
            <div id="Contenuto"></div>
        </div>
      );
  }
}
