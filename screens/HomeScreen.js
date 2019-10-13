import React from "react";
import styled, { css } from "@emotion/native";

import useSprint from "../hooks/useSprint";
import SprintButton from "../components/SprintButton";
import FilterButton from "../components/FilterButton";

export default function HomeScreen() {
  const { sprints, startAt, isLast, filters } = useSprint(0);

  console.log(sprints, startAt, isLast, filters);

  return (
    <MainContainer>
      <Container>
        <FilterContainer horizontal showsHorizontalScrollIndicator={false}>
          {filters.map((tag, index) => (
            <FilterButton tag={tag} index={index} selected={index === 1} key={tag} />
          ))}
        </FilterContainer>
        <SprintsContainer horizontal showsHorizontalScrollIndicator={false}>
          {sprints.map((value, index) => (
            <SprintButton value={value} index={index} selected={index === 1} key={value.id} />
          ))}
        </SprintsContainer>
      </Container>
    </MainContainer>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const MainContainer = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
`;
const Container = styled.View`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
const ScrollViewContainer = styled.ScrollView`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const FilterContainer = styled(ScrollViewContainer)`
  padding: 10px;
`;

const SprintsContainer = styled(ScrollViewContainer)`
  padding: 10px;
`;
