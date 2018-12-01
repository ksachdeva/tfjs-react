import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import * as React from 'react';

export interface ModelSummaryProps {
  model: tf.Model;
}

export class ModelSummary extends React.Component<ModelSummaryProps, {}> {

  private _summaryElement: React.RefObject<HTMLDivElement>;

  constructor(props: ModelSummaryProps) {
    super(props);
    this._summaryElement = React.createRef();
  }

  componentDidMount() {
    return tfvis.show.modelSummary(this._summaryElement.current, this.props.model);
  }

  public render() {
    return (
      <React.Fragment>
        <div ref={this._summaryElement} />
      </React.Fragment>
    );
  }
}
