class DataApi {
constructor(rawData){
  this.rawData = rawData;
}

mapIntoObject(arr){
  return arr.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
}

  getArticles(){
    return this.mapIntoObject(this.rawData.articles);
  };
  getAuthors(){
    return this.mapIntoObject(this.rawData.authors);
  };
  getPlayers(){
    return this.mapIntoObject(JSON.parse(this.rawData).data.players);
  };
  getCoaches(){
    return this.mapIntoObject(JSON.parse(this.rawData).data.coaches);
  };

}

export default DataApi;
