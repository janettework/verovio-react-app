import React from "react"

class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/music-encoding/sample-encodings/master/MEI_3.0/Music/Complete_examples/Aguado_Walzer_G-major.mei"
    )
      .then(serverResponse => serverResponse.text())
      .then(data => {
        console.log(data)

        var vrv = new window.verovio.toolkit()

        this.ref.current.innerHTML = vrv.renderData(data, {})
      });
  }

  render() {
    return <div ref={this.ref}>MEI</div>;
  }
}

export default Viewer;
