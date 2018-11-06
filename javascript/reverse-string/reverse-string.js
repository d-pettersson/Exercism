export const reverseString = (string) => {
  if (string === "") {
    return "";
  } else {
    return string.split("").reverse().join("");
  }
};
