import  fetcher from "./fetcher";

const gamesApi ={
  getGames: () => {
    return fetcher.get("games");
  }
}
export default gamesApi;
