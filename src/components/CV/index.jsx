import React from 'react';
import './EitelMbanyaTchapdeuCV.pdf';
import "./style.css";

const DownloadCV = (props) => {
    const handleDownload = () => {
        window.open('./src/components/CV/EitelMbanyaTchapdeuCV.pdf', '_blank'); // Open the PDF file in a new tab
    };

    return (
        <div>
            <h3>{props.children}</h3>
            <button type="button" className="btn btn-primary px-4 btn-lg" onClick={handleDownload}>My CV</button>
        </div>
    );
};

export default DownloadCV;