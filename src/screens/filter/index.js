import React, { useState } from "react";
import { RestartAlt, FilterList } from "@mui/icons-material";
import SelectedFilter from "../../components/selectedFilter";
import {
  FilterWrapper,
  Wrapper,
  FilterButton,
  Container,
  FilterDataWithReset,
  ResetButton,
} from "./styles";
import FilterBy from "../../components/filterBy";

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  const onFilterClick = () => {
    setShowFilters(!showFilters);
    setSelectedFilters({});
  };

  const removeFilters = (name, value) => {
    if (selectedFilters[name].length === 1) {
      let newFilter = selectedFilters;
      delete newFilter[name];
      setSelectedFilters({ ...newFilter });
    } else {
      const removeIndex = selectedFilters[name].indexOf(value);
      selectedFilters[name].splice(removeIndex, 1);
      setSelectedFilters({
        ...selectedFilters,
        [name]: [...selectedFilters[name]],
      });
    }
  };

  const onOptionClick = (name, value, type) => {
    if (value) {
      if (type === "radio") {
        setSelectedFilters({ ...selectedFilters, [name]: value });
      } else if (
        selectedFilters[name] &&
        selectedFilters[name].includes(value)
      ) {
        removeFilters(name, value);
      } else {
        let newArry = [];
        if (selectedFilters[name]) {
          newArry = [...selectedFilters[name], value];
        } else {
          newArry = [value];
        }
        setSelectedFilters({
          ...selectedFilters,
          [name]: newArry,
        });
      }
    }
  };

  const removeFilter = (name, value) => {
    let newFilter = selectedFilters;
    delete newFilter[name];
    setSelectedFilters({ ...newFilter });
  };

  return (
    <FilterWrapper>
      <Wrapper>
        <FilterButton showFilters={showFilters} onClick={onFilterClick}>
          <FilterList sx={{ paddingRight: "5px" }} />
          Filter
        </FilterButton>
        <SelectedFilter
          selectedFilters={selectedFilters}
          onClose={removeFilter}
        />
      </Wrapper>

      {showFilters ? (
        <Container>
          <FilterDataWithReset>
            <div>Filter data by</div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => setSelectedFilters({})}
            >
              <RestartAlt sx={{ color: "#4785FF", height: 18 }} />{" "}
              <ResetButton>Reset</ResetButton>
            </div>
          </FilterDataWithReset>

          <FilterBy onOptionClick={onOptionClick} selected={selectedFilters} />
        </Container>
      ) : null}
    </FilterWrapper>
  );
};

export default Filter;
