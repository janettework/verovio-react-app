import React from 'react'
import './Viewer.css'

class Viewer extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/music-encoding/sample-encodings/master/MEI_3.0/Music/Complete_examples/Aguado_Walzer_G-major.mei'
    )
      .then(serverResponse => serverResponse.text())
      .then(data => {
        console.log(data)

        let vrv = new window.verovio.toolkit()

        const options = {
          scale: 50,
          adjustPageHeight: true
        }
        vrv.setOptions(options);

        this.ref.current.innerHTML = vrv.renderData(data, {})
      });
  }

  render() {
    return <div ref={this.ref}>MEI</div>
  }
}

export default Viewer
