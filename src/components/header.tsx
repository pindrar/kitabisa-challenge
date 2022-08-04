import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SortIcon from "@mui/icons-material/Sort";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import DoneIcon from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const isAlphabetSortActive = selectedValue === "alphabet";
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
              handleListItemClick("alphabet");
            }}
            sx={{
              backgroundColor: isAlphabetSortActive
                ? "rgb(121 218 255)"
                : "transparent",
            }}
          >
            <ListItemIcon sx={{ minWidth: "35px" }}>
              <SortByAlphaIcon />
            </ListItemIcon>
            <Typography
              sx={{ fontWeight: isAlphabetSortActive ? "400" : "300" }}
            >
              Alphabet
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

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [sortType, setSortType] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSortType(value);
  };

  return (
    <Container
      sx={{
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        position: "fixed",
        backdropFilter: "blur(20px)",
        borderStyle: "solid",
        borderColor: "#E7EBF0",
        borderWidth: 0,
        borderBottomWidth: "thin",
        background: "rgba(255,255,255,0.7)",
        color: "#2D3843",
        zIndex: 1,
        maxWidth: "100vw !important",
      }}
    >
      <Box sx={{
          width: {
              xs: '100vw',
              md: '1200px'
          },
          display: 'flex',
          margin: 'auto'
      }}>
        <Box sx={{ flex: 1 }}>
          <Image
            src="/logo.png"
            alt="Picture of the author"
            height={37}
            width={179}
          />
        </Box>
        <Box>
          <Button
            variant="outlined"
            startIcon={<SortIcon />}
            onClick={handleClickOpen}
          >
            Sort
          </Button>
          <SimpleDialog
            selectedValue={sortType}
            open={open}
            onClose={handleClose}
          />
        </Box>
      </Box>
    </Container>
  );
}
