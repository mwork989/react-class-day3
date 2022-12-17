import { Component } from "react";
import './Stocks.css';

class Stocks extends Component {
    constructor() {
        super();
        this.state = {
            stocks: []
        }
    }

    render() {
        const stocksRecords = this.state.stocks.map((stock,index) => {
            return (
                <div className="stock-container" id={stock.id} key={index}>
                    <div>{stock.stockName}</div>
                    <p>{stock.stockMarketCap}</p>
                    <p>{stock.stockMSector}</p>
                    <p>{stock.symbol}</p>
                </div>
            )
        })

        return (
            <div>
                <h2>Stocks Info</h2>
                <section className="stock-section"> {stocksRecords} </section>
            </div>

        )
    }

    componentDidMount() {
        fetch('http://localhost:3000/stocks', { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    stocks: data
                })
            })

    }
}

export default Stocks;