const getCategory = (urlBase) => {
   const url = urlBase + '/getcategory';

   return fetch(url).then((res) => res.json());
};

export default getCategory;
