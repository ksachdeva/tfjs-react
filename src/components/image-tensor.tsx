import * as React from 'react';
import * as tf from '@tensorflow/tfjs';

export interface ImageTensorProps {
    tensor: tf.Tensor<tf.Rank.R3> | tf.Tensor<tf.Rank.R2>;
    width: number;
    height: number;
}

export class ImageTensor extends React.Component<ImageTensorProps> {

    componentDidMount() {
        const canvas = this.refs.canvas as HTMLCanvasElement;
        return tf.toPixels(this.props.tensor, canvas);
    }

    render() {
        return (
            <React.Fragment>
                <canvas ref="canvas" width={this.props.width} height={this.props.height} />
            </React.Fragment>
        )
    }
}