import React, { PureComponent } from "react";
import axios from 'axios';

class PresentationScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      presentationId: props.match.params.presentationId,
      slides: [],
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.presentationId);
    axios.get(`/presentations/${this.props.match.params.presentationId}`)
      .then(res => {
        this.setState({ slides: res.data.slides })
      });
  }

  listOfUrls(state) {
    return state.slides.map(slide =>
      <div>
        { slide.title }<br></br>
        { slide.urls }
      </div>
    );
  }

  render() {
    return(
      <div>
        <div>Hello!!!!!</div>
        <div>
          {this.listOfUrls(this.state)}
        </div>
      </div>
    );
  }
}

export default PresentationScreen;
