import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import * as React from 'react';

export interface ModelSummaryProps {
  model: tf.Model;
}

export class ModelSummary extends React.Component<ModelSummaryProps, {}> {

  componentDidMount() {
    const modelSummaryElement = this.refs.summary as HTMLElement;
    return tfvis.show.modelSummary(modelSummaryElement, this.props.model);
  }

  public render() {
    return (
      <React.Fragment>
        <div ref='summary'></div>
      </React.Fragment>
    );
  }
}
