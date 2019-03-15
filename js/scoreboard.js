

// function name in react always have capital in the first letter
function Header(props) {
    //return always go with ()
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayer}</span>
        </header>
    );
}

// The Header can be written as a variable returned from the function
/*
const Header = ()=>(

        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
*/
// const Counter = (props) => {
//     return (
//         <div className="counter">
//             <button className="counter-action decrement">-</button>
//             <span className="counter-score">{props.score}</span>
//             <button className="counter-action increment">+</button>
//         </div>
//     )
// }
// Generating the component by a function doesn't create any state for the component, because it only can access to the props
// To create the state for the component, we need to use class to create the component
// When using class, the component can be either state or stateless => You don't need to change the way the component defined when the need of state changing

class Counter extends React.Component{
    // constuctor(){
    //     super()
    //     // must set the name as state
    //     this.state={
    //         score=0
    //     };
    // }
   state={score:0};
    incrementScore(){
        //set State do two things: changing the score in the state, and ask to re-render the page when changes appear
        this.setState(prevState=>({
            // 'this' usually refer to the parents
            //because the class is extended
            // everything custom that define in the class is not bind by default => cannot reach state.score in this function
            // we will bind the data when calling the function (onclick event)
            // score: this.state.score +1
            // we can use preState to increase the performance of UI
                score: prevState.score+1
            
        }));
    }
    decrementScore=()=>{
        
        this.setState(prevState=>({
            score: prevState.score -1
        }));
    }
    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
                <span className="counter-score">{this.state.score}</span>
                {/* There are many ways to bound the component instance such as the following*/}
                {/* <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>+</button> */}
                <button className="counter-action increment" onClick={()=>this.incrementScore()}>+</button>
                {/* or when define the function we use arrow function: decrementScore=()=>{} */}
            </div>
        );
    };
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>x</button>
                {props.name}
            </span>
            {/* {Counter(props)} */}
            <Counter/>
        </div>
    )
}
class App extends React.Component{
    state={
        player:[
            {id: 1, name:"Tram", score:"100"},{id:2, name:"Dung", score:"80"},{id:3, name:"My", score:"60"},{id:4, name:"Thao", score:"40"}
        ]
    };
    handleRemovePlayer=(id)=>{
        this.setState(prevState=>{
            // filter will remove the player without affecting the array
            return{
                player: prevState.player.filter(p=>p.id!==id)
            }
            
        })
    }
    render(){
        
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayer={this.state.player.length} />
                {this.state.player.map(players=>
                    <Player name={players.name} score={players.score} id={players.id} key={players.id.toString()} removePlayer={this.handleRemovePlayer}/>
                
                    
                )}
                
            </div>
        )
    }
    
}

ReactDOM.render(
    <App/>, document.getElementById("root")
)