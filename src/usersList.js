// This function returns an array with all the usernames of all the existing users
export default async function usersList() {
  let existingUsers = [];

  let promise = await fetch("https://village-simulator.herokuapp.com/users");
  let data = await promise.json();

  for (let user in data) {
    existingUsers.push(data[user].username.toLowerCase());
  }
  // console.log(existingUsers);
  return await existingUsers;
}
