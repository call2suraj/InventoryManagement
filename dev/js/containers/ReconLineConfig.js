import React, {Component} from 'react';
import {connect} from 'react-redux';
import PDFViewer from 'mgr-pdf-viewer-react';
import { Document, Page } from 'react-pdf';
class ReconLineConfig extends Component {

  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }

  onDocumentLoad ({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div style={{width:110,height:380 , marginRight:42} }>
        <PDFViewer document={{
          url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf' 
        }} scale={1.2}/>
      </div>
    );
  }
}

export default ReconLineConfig;
