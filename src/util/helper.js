export const randomMax = (data, maxnumber) => {
  const mainData = data.sort(() => 0.5 - Math.random()).slice(0, maxnumber);

  return mainData;
};
