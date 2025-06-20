import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import axios from "axios"
export function attemptsNumber(result) {
  return result.filter((r) => r !== undefined).length;
}

export function earnPointsNumber(result, answers, point) {
  return result
    .map((element, i) => answers[i] === element)
    .filter((i) => i)
    .map(() => point)
    .reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints) {
  return (totalPoints * 50) / 100 < earnPoints; /** earn 50% marks */
}

// check user auth
export function CheckUserExist({ children }) {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace={true}></Navigate>;
}


// Get server data

export async function getServerData(url, callback) {
  const data = await (await axios.get(url))?.data;
  // console.log(data);
  return callback ? callback(data) : data;
}

// post server data
export async function postServerData(url, result, callback) {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
}
