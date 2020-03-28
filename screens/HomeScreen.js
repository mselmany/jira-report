import React from "react";
import styled from "@emotion/native";

import { useStore } from "../Providers/StoreProvider";

import SprintButton from "../components/SprintButton";
import FilterButton from "../components/FilterButton";

export default function HomeScreen() {
  const { pending, filters, sprints, selecteds, selectFilter, selectSprint } = useStore();

  return (
    <MainContainer>
      <Header>{pending ? "Yükleniyor..." : "Jira Report"}</Header>
      {!pending ? (
        <Container>
          <FilterContainer
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filters}
            renderItem={({ item, index }) => (
              <FilterButton tag={item} index={index} selected={selecteds.filter === item} onPress={selectFilter} />
            )}
            keyExtractor={(tag) => tag}
          />

          <SprintsContainer
            horizontal
            showsHorizontalScrollIndicator={false}
            data={sprints.filter((s) => (selecteds.filter ? s.__computed.filterTag === selecteds.filter : true))}
            renderItem={({ item, index }) => (
              <SprintButton value={item} index={index} selected={selecteds.sprint === item.id} onPress={selectSprint} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </Container>
      ) : null}
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
  height: 100%;
`;

const Header = styled.Text`
  margin: 40px 0 0 40px;
  font-size: 25px;
  font-family: "Rubik-Light";
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const ScrollViewContainer = styled.FlatList`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const FilterContainer = styled(ScrollViewContainer)`
  padding: 10px 0;
`;

const SprintsContainer = styled(ScrollViewContainer)`
  padding: 10px 0;
`;
