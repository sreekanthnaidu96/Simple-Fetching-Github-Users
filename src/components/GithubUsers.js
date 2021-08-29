import React, { useState, useEffect } from "react";
import "./GithubUsers.css";

const GithubUsers = () => {
  const Url = "https://api.github.com/users";
  const [UsersData, setUsersData] = useState([]);

  const GetUsers = async () => {
    const Response = await fetch(Url);
    const MyData = await Response.json();
    setUsersData(MyData);
  };

  useEffect(() => {
    return GetUsers();
  }, []);

  return (
    <div>
      <h1 className="special">GitHUB USERS</h1>
      <ul className="myclass2">
        {UsersData.map((oneguy) => {
          const { id, login, avatar_url, html_url } = oneguy;
          return (
            <li className="myclass1" key={id}>
              <img src={avatar_url} alt={login} />
              <h1>{login}</h1>
              <a target="_blank" rel="noreferrer" href={html_url}>
                ProfileLink
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GithubUsers;
