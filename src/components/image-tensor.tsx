import * as React from 'react';
import * as tf from '@tensorflow/tfjs';

export interface ImageTensorProps {
    tensor: tf.Tensor<tf.Rank.R3> | tf.Tensor<tf.Rank.R2>;
    width: number;
    height: number;
}

export class ImageTensor extends React.Component<ImageTensorProps> {

    private _canvasElem: React.RefObject<HTMLCanvasElement>;

    constructor(props: ImageTensorProps) {
        super(props);
        this._canvasElem = React.createRef();
    }

    componentDidMount() {
        return tf.toPixels(this.props.tensor, this._canvasElem.current);
    }

    render() {
        return (
            <React.Fragment>
                <canvas ref={this._canvasElem} width={this.props.width} height={this.props.height} />
            </React.Fragment>
        );
    }
}
