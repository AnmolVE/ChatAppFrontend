import {
  Avatar,
  ImageList,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import ImageIcon from "@mui/icons-material/Image";

function UserItem(props) {
  const userProfileUrl = `/user/${props.id}`;
  return (
    <Link to={userProfileUrl}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageList></ImageList>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={props.email}
        ></ListItemText>
      </ListItem>
    </Link>
  );
}

export default UserItem;
