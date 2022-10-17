import React, { useState } from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import {
  Container,
  ExpandableTitle,
  Title,
  OptionContainer,
  Input,
  Label,
} from "./styles";
import { FilterData } from "./data";

const FilterBy = ({ onOptionClick, selected }) => {
  const [hideOptions, setHideOptions] = useState({});

  const hideContaier = (key) => {
    setHideOptions({ ...hideOptions, [key]: !hideOptions[key] });
  };

  return (
    <>
      {FilterData.length &&
        FilterData.map((val, key) => {
          return (
            <Container key={key}>
              <ExpandableTitle>
                <Title>{val.name}</Title>
                {!hideOptions[key] ? (
                  <KeyboardArrowUp
                    sx={{ color: "#1967FF", height: 20, cursor: "pointer" }}
                    onClick={() => hideContaier(key)}
                  />
                ) : (
                  <KeyboardArrowDown
                    sx={{ color: "#1967FF", height: 20, cursor: "pointer" }}
                    onClick={() => hideContaier(key)}
                  />
                )}
              </ExpandableTitle>

              {!hideOptions[key] ? (
                <>
                  {val.options.length &&
                    val.options.map((v, k) => {
                      return (
                        <OptionContainer key={k}>
                          <Input
                            type={val.type}
                            id={v}
                            name={val.type === "radio" ? val.defaultName : v}
                            value={v}
                            onClick={(e) =>
                              onOptionClick(val.name, e.target.value, val.type)
                            }
                            checked={
                              selected[val.name] &&
                              selected[val.name].includes(v)
                            }
                          />
                          <Label
                            onClick={(e) =>
                              onOptionClick(val.name, e.target.value, val.type)
                            }
                          >
                            {" "}
                            {v}
                          </Label>
                          <br />
                        </OptionContainer>
                      );
                    })}
                </>
              ) : null}
            </Container>
          );
        })}
    </>
  );
};

export default FilterBy;
