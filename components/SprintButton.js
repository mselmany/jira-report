import React from "react";
import styled, { css } from "@emotion/native";
import { Platform } from "react-native";
import PropTypes from "prop-types";

export default function SprintButton({ value, index = null, selected = false }) {
  const isFirst = index === 0;
  return (
    <Sprint isFirst={isFirst} selected={selected} onPress={null /* () => updatePage(startAt + 1) */}>
      <SprintText>{value.name}</SprintText>
      <DateContainer isFirst={isFirst} selected={selected}>
        <DateText isFirst={isFirst}>{value.__computed.completeDate}</DateText>
      </DateContainer>
    </Sprint>
  );
}

SprintButton.defaultProps = {
  index: null,
  selected: false
};

SprintButton.propTypes = {
  value: PropTypes.object.isRequired,
  index: PropTypes.number,
  selected: PropTypes.bool
};

const Sprint = styled.TouchableOpacity`
  background-color: ${(props) => (props.selected ? "#ddd" : "#f0f0f0")};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 80px;
  padding: 10px;
  margin: 10px 10px 10px ${(props) => (props.isFirst ? "25px" : "0")};
`;
const SprintText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;
const DateContainer = styled.View`
  background-color: ${(props) => (props.isFirst ? "#24c92b36" : props.selected ? "transparent" : "#e5e5e5")};
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 2px 3px;
  border-radius: 3px;
`;
const DateText = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: ${(props) => (props.isFirst ? "#007107" : "#000")};
`;
