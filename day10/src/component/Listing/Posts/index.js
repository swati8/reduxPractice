import React,{ Component} from 'react';

export default class Post extends Component {
    constructor() {
        super();
        this.POST = "post";
        this.state = {
            post : {}
        }
    }

    setValue = (key,value) => {
        this.setState({
            [`${key}`] : value
        });
    };

    componentWillMount() {
        this.setValue(this.POST,this.props.post);
    }

    render() {
        let post = this.state.post;
        return (
            <li>
                {post.email} - {post.comment}
            </li>
        )
    }
}