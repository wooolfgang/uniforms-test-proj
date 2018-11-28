import React from "react";
import { Component } from "react";
import schema from "./lib/schema";
import AutoForm from "uniforms-antd/AutoForm";
import DateRange from "./DateRange";
import TimeRange from "./TimeRange";
import Repeater from "./repeater/Repeater";

class App extends Component {
  onChange(...args) {
    console.log("model onChange", ...args);
  }

  render() {
    return (
      <div className="container">
        <AutoForm
          label={false}
          onChange={this.onChange}
          schema={schema}
          spacing={3}
          onSubmit={model => console.log("onSubmit", model)}
          onSubmitFailure={model => console.log("onSubmitFailure", model)}
          onSubmitSuccess={model => console.log("onSubmitSuccess", model)}
        >
          <section className="section">
            <DateRange name="dateRange" />
          </section>
          <section className="section"> 
            <TimeRange name="timeRange" />
          </section>
          <section className="section">
            <Repeater name="repeater" list={[]} />
          </section>
       </AutoForm>
      </div>
    );
  }
}

export default App;
