import React, { useState } from "react";
import { Icon, Popup } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./CodeBox.css";

const COPY_CHECK_TIMEOUT = 1500;

const CodeBox = ({text}) => {
  const [copied, setCopied] = useState(false);

  const handleCopied = () => {
    setCopied(true);

    const timeout = setTimeout(() => {
      setCopied(false);
      clearTimeout(timeout);
    }, COPY_CHECK_TIMEOUT);
  };

  return (
    <div className="container">
      <div
        className="content">
      </div>
      {text}
        <Popup
          trigger={
            <CopyToClipboard
              text={text.join("")}
              onCopy={handleCopied}
            >
              <Icon name="copy outline" className="copy-icon" />
            </CopyToClipboard>
          }
          content="Copied!"
          open={copied}
          inverted
        />
    </div>
  );
}

export default CodeBox;