const getAllPayment = (urlBase) => {
   const url = urlBase + '/getpayment';
   return fetch(url).then((res) => res.json());
};

const postPayment = (urlBase, data = {}) => {
   const url = urlBase + '/postpayment';
   return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
   }).then((res) => res.json());
};

export { postPayment, getAllPayment };
