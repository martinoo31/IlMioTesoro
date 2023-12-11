class Config extends React.Component {
    constructor() {
        super();
        this.start = this.start.bind(this);
    }

    start(e) {
       const dim = document.getElementById("dimension").value;
       if(dim<3){
        window.alert("Valore troppo basso");
       }
       else{
        
       }
    };

    render() {
        return (
            <div id='Config'>
                <input type="number" id="dimension" placeholder='3' />
                <button onClick={this.start}>Inizia Partita</button>
            </div>);


    }
}