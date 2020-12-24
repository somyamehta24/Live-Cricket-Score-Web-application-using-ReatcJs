const API_KEY="4zmAbGte3ja8XHP1NevpptRROyA2";

export const getMatches=()=>{
    const url =`https://cricapi.com/api/matches/?apikey=${API_KEY}`;
    return (fetch(url)
            .then((response)=> response.json())
    .catch((error)=>{
        console.log('Error:',error);
    }));
}
export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };