const theme = {
  colors: {
    primary: "#412F86",
    secondary: "#6F4A9E",
    black: "#000000",
    gray: "#7a838f",
    lightGray: "#d5d9dc",
    green: "#12cb87",
    white: "#ffffff",
    hover: {
      primary: "#3732A0",
      green: "#48D69F",
      darkGreen: "#00C57A",
    },
    focus: {
      primary: "#25216F",
      green: "#009A5F",
    },
  },
  unit: {
    getRem(px) {
      return `${px / 16}rem`
    },
  },
}

export default theme
