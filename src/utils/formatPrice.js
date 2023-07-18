const formatPrice = (number) => {
  return new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
  }).format((number / 100).toFixed(2));
};

export default formatPrice;
