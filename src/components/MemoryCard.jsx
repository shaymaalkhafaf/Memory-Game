import React from "react";
import "./MemoryCard.css";

class MemoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }

  clickHandler() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    let memoryCardInnerClass = "MemoryCardInner";

    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div
          className={
            !this.state.isFlipped
              ? memoryCardInnerClass
              : "MemoryCardInner flipped"
          }
        >

          <div className="MemoryCardBack">
            <img
              className="logo"
              src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"
              alt="digitalcrafts-logo"
            />
          </div>

          <div className="MemoryCardFront">{this.props.symbol}</div>
        </div>
      </div>
    );
  }
}
export default MemoryCard;
