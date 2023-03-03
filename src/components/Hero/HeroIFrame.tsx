import React from "react";

class HeroIFrame extends React.Component {
    state = {
        iframeMouseOver: false
    };

    componentDidMount() {
        window.focus();
        window.addEventListener("blur", this.onWindowBlur);
    }

    componentWillUnmount() {
        window.removeEventListener("blur", this.onWindowBlur);
    }

    onWindowBlur = () => {
        const { iframeMouseOver } = this.state;
        if (iframeMouseOver) {
            alert("I Am Clickable!");
        }
    };

    handleOnMouseOver = () => {
        this.setState({ iframeMouseOver: true });
    };

    handleOnMouseOut = () => {
        window.focus();
        this.setState({ iframeMouseOver: false });
    };

    render() {
        return (
            <>
                <div
                    onMouseOver={this.handleOnMouseOver}
                    onMouseOut={this.handleOnMouseOut}
                    className='relative w-[100%]'
                >
                    <iframe
                        width={600} height={415}
                        src="https://www.youtube.com/embed/sDJtzVOB8Jo"
                        title="W3Schools Free Online Web Tutorials" loading="lazy"
                    ></iframe>
                </div>
            </>
        );
    }
}

export default HeroIFrame;
