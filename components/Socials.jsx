import React, { Component } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

import success from "../public/checkmark.svg";

class Socials extends Component {
  state = {
    value: "ewha0",
    copied: false,
  };

  render() {
    return (
      <>
        <motion.a
          href="https://twitter.com/ewha_dev"
          target="_blank"
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter style={{ fontSize: "25px" }} />
        </motion.a>
        <CopyToClipboard
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {this.state.copied ? (
              <Image src={success} alt="icone success" />
            ) : (
              <FaDiscord style={{ fontSize: "25px" }} />
            )}
          </motion.button>
        </CopyToClipboard>
      </>
    );
  }
}

export default Socials;
