import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
    render() {
        return (
            <div className={css(bodystyle.bodymargin)}> 
                <BodySection {...this.props} />
            </div>
        );
    }
}

const bodystyle = StyleSheet.create({
    bodymargin: {
        marginBottom: 40
       }
})

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom;