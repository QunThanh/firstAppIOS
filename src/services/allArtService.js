const getAllArt = (urlBase) => {
   const url = urlBase + '/getallitem';

   return fetch(url).then((res) => res.json());
};

export default getAllArt;
