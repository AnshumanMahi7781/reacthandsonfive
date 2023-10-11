import { PureComponent } from "react";
import PureCompoSnap from './pureCompoSnap.png';
class PureCompo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            Count: 0,
        }
    }
    render() {
        console.log("Render Method From PureCompo")
        return (
            <div className="CompoBox">
                <div className="DescriptionBox">
                    <strong>1. Pure Component :</strong> Pure Component in react are a type of components that are optimized for performance. They are the way to reduce unneecessary re-rendering of the components and can help improve the overall performance of our react Application. For using the pure components, we have to extends the <strong>PureComponent</strong> class from 'react' library.
                </div>
                <div className="exampleBox">
                    <img src={PureCompoSnap} alt="codeSnap" className="codeSnap" />
                    <div className="exampleOutput">
                        <p> Counter Value : {this.state.Count}</p>
                        <button onClick={() => this.setState({ Count: 5 })}>Count Change</button>
                    </div>
                </div>
                <div className="explanationBox">
                    In the above example, when user click on the Count Change button the couter value change to 5 and if the user again click on that button the counter  replace its value  again and again with 5. In that case if we are not using the PureComponent,  the component will re-render again and again because it does not match the Previous Couter value with latest Value and after changing the state variable using setState method the components will re-renders.But When we use PureComponent, then it is the feature of PureComponent to auotmatically performs a shallow compariosn of their state and then deciding wherether to re-render or not.
                </div>
            </div>
        )
    }
}
export default PureCompo;