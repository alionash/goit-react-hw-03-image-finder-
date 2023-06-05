import { Component } from 'react';
import { Overlay, ModalImg } from '../Modal/moldal.styled';

export class ModalOvelay extends Component {

componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
}
componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
}


handleKeyDown = e => {
    if (e.code === 'Escape') {
        this.props.onClick();
    }
};


handleClick = e => {
    if (e.target === e.currentTarget) {
        this.props.onClick();
    }
};

render() {
    return (
    <Overlay onClick={this.handleClick}>
        <ModalImg>
            <img src={this.props.largeImageURL} alt="" />
        </ModalImg>
    </Overlay>
    );
    }
}