export const defaultOptions = {
  isMulti: false,
  isSearchable: false,
  isDisabled: false,
  styles: {
    container: (styles) => ({
      ...styles,
      // marginRight: "16px",
    }),
    singleValue: (style) => ({
      ...style,
      fontFamily: "Gilroy-Regular",
    }),
    control: (styles) => ({
      ...styles,
      width: "100%",
      outline: "none",
      fontSize: "20px",
      //       marginRight: "20px",
      color: "#3F48CC",
      borderRadius: "0px",
      backgroundColor: "#edeeff",
      border: 0,
      borderRight: "3px solid #3F48CC",
      height: "32px",
      fontFamily: "Gilroy-Regular",
      // border: "1px solid #2A2C35",
      borderColor: "#edeeff",
      boxShadow: "none",
      "&:focus": {
        borderColor: "#edeeff",
      },
      "&hover": {
        borderRight: "2px solid #3F48CC",
      },
    }),

    valueContainer: (styles) => ({
      ...styles,
      color: "black",
      padding: "0px!important",
      // marginRight: "100px",
      fontWeight: 500,
      //       display: "flex",
      fontSize: "14px",
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      backgroundColor: "#edeeff",
      with: "0px",
    }),

    indicatorsContainer: (styles) => ({
      ...styles,
      marginRight: "20px",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#3F48CC",
      padding: "0px",
      //       marginLeft: "5px",
      "&:hover": {
        color: "#2A2C35",
      },
    }),

    placeholder: (styles) => ({
      ...styles,
      color: "#3F48CC",
      fontFamily: "Gilroy-Medium",
      fontSize: "20px",
    }),
  },
};
