/**
 * Init data player volume in local storage
 * @param {integer} volume
 * @param {boolean} muted
 */
export const initDataPlayerVolume = (volume = 100, muted = false) => {
  const creation = new Date().getTime();
  const expiration =
    creation +
    +process.env.REACT_APP_EXPIRATION_HOURS_PLAYER_VOLUME * 60 * 60 * 1000;

  let dataPlayerVolume = getDataPlayerVolume();
  let newData = { creation, expiration };

  if (dataPlayerVolume && validData(dataPlayerVolume)) {
    newData.data = {
      volume: dataPlayerVolume.data.volume,
      muted: dataPlayerVolume.data.muted,
    };
  } else {
    newData.data = {
      volume,
      muted,
    };
  }

  localStorage.setItem("player-volume", JSON.stringify(newData));
};

/**
 * Get data player volume in local storage
 * @returns {object | null}
 */
export const getDataPlayerVolume = () => {
  try {
    return JSON.parse(localStorage.getItem("player-volume"));
  } catch (err) {
    return null;
  }
};

/**
 * Update data player volume in local storage and return object data
 * @param {integer} volume
 * @param {boolean} muted
 * @returns {object}
 */
export const saveDataPlayerVolume = (volume, muted) => {
  const creation = new Date().getTime();
  const expiration =
    creation +
    +process.env.REACT_APP_EXPIRATION_HOURS_PLAYER_VOLUME * 60 * 60 * 1000;

  const newData = {
    creation,
    data: {
      volume,
      muted,
    },
    expiration,
  };

  localStorage.setItem("player-volume", JSON.stringify(newData));

  return newData;
};

/**
 * Validate data player volume
 * @returns {boolean}
 */
const validData = (data) => {
  try {
    const { data: innerData } = data;
    const condition =
      Number.isInteger(innerData?.volume) &&
      innerData?.volume >= 0 &&
      innerData?.volume <= 100 &&
      typeof innerData?.muted === "boolean";
    return condition;
  } catch (err) {
    return false;
  }
};
