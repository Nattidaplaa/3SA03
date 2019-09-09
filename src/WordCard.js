import React, {Component} from 'react' ;
import Content from './Content';

export default class WordCard extends Component {
    render() {
        return(
        <div>
            {
                Array.from(this.props.value).map((c, i) => <Content value={c}/>)
            }
        </div>
        );
    }
}