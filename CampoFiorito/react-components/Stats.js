class Stats extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <p>Numero di percorsi completati: {percorsiCompletati}</p>
                <p>Numero di percorsi non completati: {percorsiIncompleti}</p>                    
            </div>
        )
    }
}

function getRandomInt(dim) {
    return Math.floor(Math.random() * (dim));
}