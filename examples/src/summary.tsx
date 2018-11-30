import * as tf from '@tensorflow/tfjs';
import * as React from 'react';
import { ModelSummary } from '../../src/components/model-summary';
import { render } from 'react-dom';

class ModelSummaryExample extends React.Component<{}, {}> {

    public render() {
        const model = this.defineSampleModel();

        return (
            <React.Fragment>
                <ModelSummary model={model}></ModelSummary>
            </React.Fragment>
        );
    }

    private defineSampleModel() {
        const model = tf.sequential();
        model.add(tf.layers.flatten({ inputShape: [28, 28, 1] }));
        model.add(tf.layers.dense({ units: 42, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));
        return model;
    }
}

render(<ModelSummaryExample />, document.getElementById('demo'));