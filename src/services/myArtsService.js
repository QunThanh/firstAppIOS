const getMyArts = (urlBase) => {
   const url = urlBase + '/getmyarts';

   return fetch(url).then((res) => res.json());
};

export default getMyArts;
