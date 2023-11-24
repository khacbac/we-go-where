export const checkEmail = (email: string) => {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg.test(email)) return false;
  return true;
};

export const checkCardExpiryDate = (text: string) => {
  var reg = /^\d{2}\/\d{2}$/;
  if (!reg.test(text)) return false;
  return true;
};
