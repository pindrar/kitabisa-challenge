import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TodayIcon from "@mui/icons-material/Today";
import DoneIcon from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";

export interface customDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function CustomDialog(props: customDialogProps) {
  const { onClose, selectedValue, open } = props;

  const isNewestSortActive = selectedValue === "newest";
  const isGoalsSortActive = selectedValue === "goals";

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Urutkan berdasarkan?</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleListItemClick("newest");
            }}
            sx={{
              backgroundColor: isNewestSortActive
                ? "rgb(121 218 255)"
                : "transparent",
            }}
          >
            <ListItemIcon sx={{ minWidth: "35px" }}>
              <TodayIcon />
            </ListItemIcon>
            <Typography sx={{ fontWeight: isNewestSortActive ? "400" : "300" }}>
              Terbaru
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleListItemClick("goals");
            }}
            sx={{
              backgroundColor: isGoalsSortActive
                ? "rgb(121 218 255)"
                : "transparent",
            }}
          >
            <ListItemIcon sx={{ minWidth: "35px" }}>
              <DoneIcon />
            </ListItemIcon>
            <Typography sx={{ fontWeight: isGoalsSortActive ? "400" : "300" }}>
              Goals
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}
