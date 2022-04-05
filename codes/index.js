let count = document.querySelector(`.count`);
let buttonFive = document.querySelector(`.button-5`);
let buttonTen = document.querySelector(`.button-10`);
let buttonFifteen = document.querySelector(`.button-15`);
let buttonMax15 = document.querySelector(`.button-max-15`); 
let buttonMax100 = document.querySelector(`.button-max-100`); 
let buttonMax200 = document.querySelector(`.button-max-200`);
let increment = document.querySelector(`.increment`); 
let decrement = document.querySelector(`.decrement`); 
let reset = document.querySelector(`.reset`);
let store = Redux.createStore(reducer);
let fixSteps = 1;
let maxValue = Infinity;


function reducer(state = 0,action){
    if(action.type === 'increment'){
        if(state + action.step <= maxValue){
            return state + action.step;
        }else{
            return state;
        }
    }else if(action.type === 'decrement'){
        if(state - action.step >= 0 ){
            return state - action.step;
        }else{
            return state;
        }
    }else if(action.type === 'reset'){
        return state = 0;
    }else{
        return state;
    }
}


store.subscribe(() => {
    count.innerText = store.getState()
})
increment.addEventListener(`click`,() => {
    // console.log("inc");
    store.dispatch({type:"increment",step: fixSteps});
})
decrement.addEventListener(`click`,() => {
    // console.log("dec")
    store.dispatch({type:"decrement",step:fixSteps});
})
reset.addEventListener(`click`,() => {
    // console.log("reset")
    store.dispatch({type:"reset"});
    buttonFive.classList.remove(`active`);
    buttonTen.classList.remove(`active`);
    buttonFifteen.classList.remove(`active`);
    buttonMax15.classList.remove(`active`);
    buttonMax100.classList.remove(`active`);
    buttonMax200.classList.remove(`active`);
    fixSteps = 1;
    maxValue = Infinity;
    
})
buttonFive.addEventListener(`click`,() => {
    // console.log("five");
    buttonFive.classList.add(`active`);
    buttonTen.classList.remove(`active`);
    buttonFifteen.classList.remove(`active`);
    fixSteps = 5;
})
buttonTen.addEventListener(`click`,() => {
    // console.log("ten");
    buttonFive.classList.remove(`active`);
    buttonTen.classList.add(`active`);
    buttonFifteen.classList.remove(`active`);
    fixSteps = 10;
})
buttonFifteen.addEventListener(`click`,() => {
    // console.log("fifteen");
    buttonFive.classList.remove(`active`);
    buttonTen.classList.remove(`active`);
    buttonFifteen.classList.add(`active`);
    fixSteps = 15;
    
})
buttonMax15.addEventListener(`click`,() => {
    // console.log("five");
    buttonMax15.classList.add(`active`);
    buttonMax100.classList.remove(`active`);
    buttonMax200.classList.remove(`active`);
    maxValue = 15;
})
buttonMax100.addEventListener(`click`,() => {
    // console.log("ten");
    buttonMax15.classList.remove(`active`);
    buttonMax100.classList.add(`active`);
    buttonMax200.classList.remove(`active`);
    maxValue = 100;
})
buttonMax200.addEventListener(`click`,() => {
    // console.log("fifteen");
    buttonMax15.classList.remove(`active`);
    buttonMax100.classList.remove(`active`);
    buttonMax200.classList.add(`active`);
    maxValue = 200;
    
})

// console.log(store);




/* 
    let root = document.getElementById(`root`);
      class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            count: 0,
            steps: 1,
            maxValue: Infinity,
          };
        }
        handleIncrement = () => {
            
            if (this.state.steps !== 1) {
            this.setState({
              count: this.state.count  + this.state.steps <= this.state.maxValue ? this.state.count + this.state.steps : this.state.count,
            });
          } else {
            this.setState({
              count: this.state.count  + this.state.steps <= this.state.maxValue ? this.state.count + 1 : this.state.count , 
            });
          }
        };
        handleDecrement = () => {
          if (this.state.steps !== 1) {
            this.setState({
              count: this.state.count - this.state.steps,
            });
          } else {
            this.setState({
              count: this.state.count - 1,
            });
          }
        };
        handleReset = () => {
          this.setState({
            count: 0,
            steps: 1,
            maxValue: Infinity,
          });
        };
        handleSteps = (value = 1) => {
          this.setState({
            steps: value,
          });
        };
        handleMaxValue = (value = 0) => {
          this.setState({
            maxValue: value,
          });
        };
        render() {
          return (
            <>
              <header className="header">{this.state.count}</header>
              <div className="values">
                <div className="steps-value">
                <p className="p">Steps</p>
                <div className="step-btns">
                  {
                    [5,10,15].map(value => <button className={(this.state.steps === value) ? 'active' : ""} onClick={() => this.handleSteps(value)}>{value}</button>)
                  }
                </div>
              </div>
              <div className="max-value">
                <p className="p">Max Value</p>
                <div className="step-btns">
                  {
                    [15,100,200].map(value =><button className={(this.state.maxValue === value) ? 'active' : ""}  onClick={() => this.handleMaxValue(value)}>{value}</button> )
                  }
                </div>
              </div>
            </div>
              <div className="inc-dec-btns">
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>decrement</button>
                <button onClick={this.handleReset}>Reset</button>
              </div>
            </>
          );
        }
      }

      ReactDOM.render(<App />, root);
*/