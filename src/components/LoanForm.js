import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import dropdownIcon from "../assets/ic_dropdown.png";
import { InputAdornment, TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import { LoanTable } from "./LoanTable";
import editIcon from "../assets/ic_edit.png";

const arrowIcon = () => {
  return (
    <img
      src={dropdownIcon}
      alt="select"
      style={{ width: 14, height: 14, cursor: "pointer" }}
    />
  );
};
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="₮ "
    />
  );
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const LoanForm = () => {
  const [state, setState] = React.useState({
    loanAmount: "",
    loanType: "",
    yearlyIncome: "",
    otherLoans: "",
    loanPurpose: "",
    propertyPrice: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <>
      <FormControl className="loan-form">
        <InputLabel className="loan-form-title">
          Танд хэдэн төгрөгийн хэрэгцээ байна вэ?
        </InputLabel>
        <Select
          IconComponent={arrowIcon}
          value={state.loanAmount}
          onChange={handleChange}
          inputProps={{
            name: "loanAmount",
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
        >
          <option value="₮ 5’000’000 – ₮ 10’000’000">
            ₮ 5’000’000 – ₮ 10’000’000
          </option>
          <option value="₮ 10’000’000 – ₮ 40’000’000">
            ₮ 10’000’000 – ₮ 40’000’000
          </option>
          <option value="₮ 40’000’000 – ₮ 100’000’000">
            ₮ 40’000’000 – ₮ 100’000’000
          </option>
          <option value="₮ 100’000’000 – ₮ 150’000’000">
            ₮ 100’000’000 – ₮ 150’000’000
          </option>
          <option value="₮ 150’000’000 – ₮ 200’000’000">
            ₮ 150’000’000 – ₮ 200’000’000
          </option>
          <option value="₮ 200’000’000 – ₮ 250’000’000">
            ₮ 200’000’000 – ₮ 250’000’000
          </option>
          <option value="₮ 250’000’000 – ₮ 300’000’000">
            ₮ 250’000’000 – ₮ 300’000’000
          </option>
        </Select>
      </FormControl>
      <FormControl className="loan-form">
        <InputLabel className="loan-form-title">
          Зээлийн төрлөө сонгоно уу?
        </InputLabel>
        <Select
          IconComponent={arrowIcon}
          value={state.loanType}
          onChange={handleChange}
          inputProps={{
            name: "loanType",
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
        >
          <option value={"Эргэлтийн хөрөнгө барьцаалсан зээл"}>
            Эргэлтийн хөрөнгө барьцаалсан зээл
          </option>
          <option value={"Үл хөдлөх хөрөнгө барьцаалсан зээл"}>
            Үл хөдлөх хөрөнгө барьцаалсан зээл
          </option>
        </Select>
      </FormControl>
      {state.loanType === "Үл хөдлөх хөрөнгө барьцаалсан зээл" ? (
        <FormControl className="loan-form">
          <TextField
            label="Үл хөдлөх хөрөнгийн үнийн дүн"
            autoComplete="off"
            onChange={handleChange}
            name="propertyPrice"
            value={state.propertyPrice}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            endAdornment={
              <InputAdornment position="end">
                <img
                  src={editIcon}
                  alt="editIcon"
                  style={{ width: 14, height: 14 }}
                />
              </InputAdornment>
            }
          />
        </FormControl>
      ) : null}
      <FormControl className="loan-form">
        <TextField
          label="Жилийн борлуулалтын орлого"
          autoComplete="off"
          onChange={handleChange}
          name="yearlyIncome"
          value={state.yearlyIncome}
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
          InputLabelProps={{
            style: { color: "#000" },
          }}
        />
      </FormControl>
      <FormControl className="loan-form">
        <InputLabel className="loan-form-title">
          Та бусад байгууллагад зээлтэй юу?
        </InputLabel>
        <Select
          IconComponent={arrowIcon}
          value={state.otherLoans}
          onChange={handleChange}
          inputProps={{
            name: "otherLoans",
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
        >
          <option value={true}>Тийм</option>
          <option value={false}>Үгүй</option>
        </Select>
      </FormControl>
      {state.otherLoans === true ? <LoanTable /> : null}
      <FormControl className="loan-form">
        <InputLabel className="loan-form-title">
          Зээлийн зарцуулалтаа сонгоно уу?
        </InputLabel>
        <Select
          IconComponent={arrowIcon}
          value={state.loanPurpose}
          onChange={handleChange}
          inputProps={{
            name: "loanPurpose",
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
        >
          <option value="Эргэлтийн хөрөнгө санхүүжилт">
            Эргэлтийн хөрөнгө санхүүжилт
          </option>
          <option value="Үндсэн хөрөнгийн санхүүжилт">
            Үндсэн хөрөнгийн санхүүжилт
          </option>
          <option value="Үл хөдлөх хөрөнгө худалдан авах">
            Үл хөдлөх хөрөнгө худалдан авах
          </option>
          <option value="Автомашин худалдан авах">
            Автомашин худалдан авах
          </option>
          <option value="Бусад хувийн хэрэгцээ">Бусад хувийн хэрэгцээ</option>
        </Select>
      </FormControl>
    </>
  );
};
