

class Griglia extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let rows = [];
        for (let i = 0; i < this.props.dim; i++) {
            let cells = [];
            for (let j = 0; j < this.props.dim; j++) {
                cells.push(<td key={j}><ColorChangingButton color="blue" /></td>);
            }
            rows.push(<tr key={i}>{cells}</tr>);
        }
        return <table>{rows}</table>;
    }

}