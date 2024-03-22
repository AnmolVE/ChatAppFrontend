import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Box, LinearProgress, List } from "@mui/material";
import UserItem from "./UserItem";

function Sidebar() {
  const BASE_URL = "http://127.0.0.1:8000/";
  const [userList, setUserList] = useState([]);
  const [userLoader, setUserLoader] = useState(true);
  const { authTokens } = useSelector((store) => store.auth);

  useEffect(() => {
    if (authTokens) {
      axios
        .get(`${BASE_URL}api/users/`, {
          headers: {
            Authorization: `Bearer ${authTokens}`,
          },
        })
        .then((response) => {
          setUserList(response.data);
          setUserLoader(false);
        })
        .catch((error) => {
          console.log("Error making API request:", error);
        });
    }
  }, []);
  console.log(userList);

  return (
    <div className="flex-[1] bg-[#2c3e50] text-[#ffffff] p-[20px] overflow-y-auto">
      {userLoader ? (
        <Box sx={{ width: "100px" }}>
          <LinearProgress />
        </Box>
      ) : (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {userList.map((user) => (
            <UserItem
              key={user.id}
              email={user.email}
              name={user.username}
              id={user.id}
            />
          ))}
        </List>
      )}
    </div>
  );
}

export default Sidebar;
