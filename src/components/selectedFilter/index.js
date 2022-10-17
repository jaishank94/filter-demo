import { Close } from "@mui/icons-material";
import { Container } from "./styles";

const Pill = ({ type, value, onClose }) => {
  return (
    <Container>
      <Close sx={{ height: 18, cursor:"pointer" }} onClick={() => onClose(type, value)} />
      {type}: {value}
    </Container>
  );
};

const SelectedFilter = ({ selectedFilters, onClose }) => {
  return (
    <>
      {Object.keys(selectedFilters).map((item, k) => {
        return (
          <Pill
            type={item}
            value={selectedFilters[item].toString()}
            onClose={onClose}
          />
        );
      })}
    </>
  );
};

export default SelectedFilter;
