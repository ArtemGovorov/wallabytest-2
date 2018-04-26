import axios from 'axios';

export const validateAge = async yearOfBirth => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_HOST}/age/${yearOfBirth}`,
  );
  return data;
};

export const validatePostcode = async postCode => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_HOST}/postcode?q=${postCode}`,
  );
  return data;
};

export const initiateSession = async person => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(person),
    url: `${process.env.REACT_APP_API_HOST}`,
  };

  let data;
  try {
    data = await axios(options);
  } catch (error) {
    console.log('ERROR!!!', error);
  }
  return data;
};

export const initiateSessionViaPincode = async pinCode => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_HOST}/session/${pinCode}/insurableperson`,
  );
  return data;
};

export const getGrandTotal = async pinCode => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_HOST}/session/${pinCode}`,
  );
  return data;
};

export const getInsuranceNeeds = async (pinCode, personId) => {
  let data;
  try {
    data = await axios.get(
      `${
        process.env.REACT_APP_API_HOST
      }/session/${pinCode}/insurableperson/${personId}/insuranceneeds/`,
    );
  } catch (error) {
    console.log('I am an error', error);
  }
  return data;
};

export const setInsuranceNeeds = async (pinCode, personId, needs) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(needs),
    url: `${
      process.env.REACT_APP_API_HOST
    }/session/${pinCode}/insurableperson/${personId}/insuranceneeds/`,
  };

  let data;
  try {
    data = await axios(options);
  } catch (error) {
    console.log('ERROR!!!', error);
  }
  return data;
};

export const getProductProposal = async (pinCode, personId) => {
  const { data } = await axios.get(
    `${
      process.env.REACT_APP_API_HOST
    }/session/${pinCode}/insurableperson/${personId}/insuranceneeds/productproposal`,
  );
  return data;
};

export const getProductGroups = async (pinCode, personId) => {
  const { data } = await axios.get(
    `${
      process.env.REACT_APP_API_HOST
    }/session/${pinCode}/insurableperson/${personId}/productGroup`,
  );
  return data;
};

// eslint-disable-next-line
export const modifySelectedProducts = async (
  pinCode,
  personId,
  type,
  selectedProducts,
) => {
  const { data } = await axios.put(
    `${
      process.env.REACT_APP_API_HOST
    }/session/${pinCode}/insurableperson/${personId}/productGroup/group.${type}.insurance`,
    selectedProducts,
  );
  return data;
};

export const setPersonalData = async (pinCode, personId, personalData) => {
  const { data } = await axios.post(
    `${
      process.env.REACT_APP_API_HOST
    }/session/${pinCode}/insurableperson/${personId}/`,
    personalData,
  );
  return data;
};

export const setHealthQuestionaireAnswers = async (
  pinCode,
  personId,
  answers,
) => {
  const { data } = await axios.post(
    `${
      process.env.REACT_APP_API_HOST
    }/session/${pinCode}/insurableperson/${personId}/answers`,
    answers,
  );
  return data;
};

export const setCurrentState = async (pinCode, state) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_HOST}/session/${pinCode}/store`,
    state,
  );
  return data;
};

export const getOptions = async () => {
  const { data } = await axios.options(`${process.env.REACT_APP_API_HOST}`);
  return data;
};
