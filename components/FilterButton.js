import React from "react";
import styled, { css } from "@emotion/native";
import { Platform } from "react-native";
import PropTypes from "prop-types";

export default function FilterButton({ tag, index = null, selected = false }) {
  const isFirst = index === 0;

  return (
    <Filter isFirst={isFirst} selected={selected} onPress={null /* () => updatePage(startAt + 1) */}>
      {selected ? <Close /> : null}
      <Text>{tag}</Text>
    </Filter>
  );
}

FilterButton.defaultProps = {
  index: null,
  selected: false
};

FilterButton.propTypes = {
  tag: PropTypes.string.isRequired,
  index: PropTypes.number,
  selected: PropTypes.bool
};

const Filter = styled.TouchableOpacity`
  background-color: ${(props) => (props.selected ? "#ddd" : "#f0f0f0")};
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 0 10px 0 ${(props) => (props.isFirst ? "25px" : "0")};
`;
const Text = styled.Text`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
const Close = styled.View`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: #888;
`;
