const formatPrice = (price) => {
  let formatedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);

  return formatedPrice;
};

export { formatPrice };
