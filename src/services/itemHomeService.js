const getItemHome = (urlBase) => {
   const url = urlBase + '/getitemhome';

   return fetch(url).then((res) => res.json());
};

export default getItemHome;
