const getAllArt = async (urlBase) => {
   const url = urlBase + '/getallitem';

   return await fetch(url).then((res) => res.json());
};

export default getAllArt;
