import * as React from "react";
import {
  GoogleViz,
  GoogleChartWrapper,
  ReactGoogleChartPropsWithDefaults,
  GoogleChartControlProp,
  GoogleChartControl,
  GoogleChartDashboard
} from "../types";
import { generateUniqueID } from "../generate-unique-id";
import { GoogleChartDataTable } from "./GoogleChartDataTable";
import { GoogleChartEvents } from "./GoogleChartEvents";

export type GoogleChartProps = {
  google: GoogleViz;
  graphID?: string | null;
  graph_id?: string | null;
  options?: ReactGoogleChartPropsWithDefaults["options"];
  chartWrapperParams?: {};
  chartType: ReactGoogleChartPropsWithDefaults["chartType"];
  width?: ReactGoogleChartPropsWithDefaults["width"];
  height?: ReactGoogleChartPropsWithDefaults["height"];
  style?: ReactGoogleChartPropsWithDefaults["style"];
  className?: ReactGoogleChartPropsWithDefaults["className"];
  rootProps?: ReactGoogleChartPropsWithDefaults["rootProps"];
} & ReactGoogleChartPropsWithDefaults;

export type GoogleChartState = {
  googleChartWrapper: GoogleChartWrapper | null;
  isReady: boolean;
  googleChartDashboard: GoogleChartDashboard | null;
  googleChartControls:
    | { control: GoogleChartControl; controlProp: GoogleChartControlProp }[]
    | null;
};

let controlCounter = 0;
export class GoogleChart extends React.Component<
  GoogleChartProps,
  GoogleChartState
> {
  state = {
    googleChartWrapper: null as GoogleChartWrapper | null,
    googleChartDashboard: null as GoogleChartDashboard | null,
    googleChartControls: null as
      | { control: GoogleChartControl; controlProp: GoogleChartControlProp }[]
      | null,
    isReady: false
  };
  graphID: null | string = null;
  private dashboard_ref: React.RefObject<HTMLDivElement> = React.createRef();
  private getGraphID = () => {
    const { graphID, graph_id } = this.props;
    let instanceGraphID: string;
    if (graphID === null && graph_id === null) {
      if (this.graphID === null) {
        instanceGraphID = generateUniqueID();
      } else {
        instanceGraphID = this.graphID;
      }
    } else if (graphID !== null && graph_id === null) {
      instanceGraphID = graphID as string;
    } else if (graph_id !== null && graphID === null) {
      instanceGraphID = graph_id as string;
    } else {
      instanceGraphID = graphID as string;
    }
    this.graphID = instanceGraphID;
    return this.graphID as string;
  };
  private getControlID = (id: undefined | string, index: number) => {
    controlCounter += 1;
    let controlID: string;
    if (typeof id === "undefined") {
      controlID = `googlechart-control-${index}-${controlCounter}`;
    } else {
      controlID = id;
    }
    return controlID;
  };

  componentDidMount() {
    const {
      options,
      google,
      chartType,
      chartWrapperParams,
      controls
    } = this.props;

    const googleChartControlsMap = new Map();
    // for (let i = 0; i < )
    const googleChartControls =
      controls === null
        ? null
        : controls.map((control, i) => {
            const {
              controlID: controlIDMaybe,
              controlType,
              options: controlOptions,
              controlWrapperParams
            } = control;
            const controlID = this.getControlID(controlIDMaybe, i);
            return {
              controlProp: control,
              control: new google.visualization.ControlWrapper({
                containerId: controlID,
                controlType,
                options: controlOptions,
                ...controlWrapperParams
              })
            };
          });
    const chartConfig = {
      chartType,
      options,
      containerId: this.getGraphID(),
      ...chartWrapperParams
    };
    const googleChartWrapper = new google.visualization.ChartWrapper(
      chartConfig
    );
    googleChartWrapper.setOptions(options);
    const googleChartDashboard = new google.visualization.Dashboard(
      this.dashboard_ref
    );
    if (googleChartControls !== null) {
      googleChartDashboard.bind(
        googleChartControls.map(({ control }) => control),
        googleChartWrapper
      );
    }
    this.setState({
      googleChartControls: googleChartControls,
      googleChartDashboard: googleChartDashboard,
      googleChartWrapper,
      isReady: true
    });
  }
  shouldComponentUpdate(
    nextProps: GoogleChartProps,
    nextState: GoogleChartState
  ) {
    return this.state.isReady !== nextState.isReady;
  }
  renderTopControls = () => {
    return this.state.isReady && this.state.googleChartControls !== null ? (
      <React.Fragment>
        {this.state.googleChartControls
          .filter(({ controlProp }) => {
            return controlProp.controlPosition !== "bottom";
          })
          .map(({ control, controlProp }) => {
            return (
              <div
                key={control.getContainerId()}
                id={control.getContainerId()}
              />
            );
          })}
      </React.Fragment>
    ) : null;
  };
  renderBottomControls = () => {
    return this.state.isReady && this.state.googleChartControls !== null ? (
      <React.Fragment>
        {this.state.googleChartControls
          .filter(({ controlProp }) => {
            return controlProp.controlPosition === "bottom";
          })
          .map(({ control, controlProp }) => {
            return (
              <div
                key={control.getContainerId()}
                id={control.getContainerId()}
              />
            );
          })}
      </React.Fragment>
    ) : null;
  };
  renderChart = () => {
    const {
      width,
      height,
      options,
      style,
      className,
      rootProps,
      google,
      chartEvents
    } = this.props;

    const divStyle = {
      height: height || (options && options.height),
      width: width || (options && options.width),
      ...style
    };
    return (
      <div
        id={this.getGraphID()}
        style={divStyle}
        className={className}
        {...rootProps}
      >
        {this.state.isReady && this.state.googleChartWrapper !== null ? (
          <React.Fragment>
            <GoogleChartDataTable
              googleChartWrapper={this.state.googleChartWrapper}
              google={google}
              googleChartDashboard={this.state.googleChartDashboard}
            />
            <GoogleChartEvents
              googleChartWrapper={this.state.googleChartWrapper}
              google={google}
            />
          </React.Fragment>
        ) : null}
      </div>
    );
  };
  renderControl = (
    filter = ({
      control,
      controlProp
    }: {
      control: GoogleChartControl;
      controlProp: GoogleChartControlProp;
    }) => true
  ) => {
    return this.state.isReady && this.state.googleChartControls !== null ? (
      <React.Fragment>
        {this.state.googleChartControls
          .filter(({ controlProp, control }) => {
            return filter({ control, controlProp });
          })
          .map(({ control, controlProp }) => {
            return (
              <div
                key={control.getContainerId()}
                id={control.getContainerId()}
              />
            );
          })}
      </React.Fragment>
    ) : null;
  };
  render() {
    const { width, height, options, style } = this.props;
    const divStyle = {
      height: height || (options && options.height),
      width: width || (options && options.width),
      ...style
    };
    // const render = this.props.render !== null ? ({}) => null : () => null;
    if (this.props.render !== null) {
      return (
        <div ref={this.dashboard_ref}>
          {this.props.render({
            renderChart: this.renderChart,
            renderControl: this.renderControl
          })}
        </div>
      );
    } else {
      return (
        <div ref={this.dashboard_ref}>
          {this.renderTopControls()}
          {this.renderChart()}
          {this.renderBottomControls()}
        </div>
      );
    }
  }
}
