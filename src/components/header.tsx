import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SortIcon from "@mui/icons-material/Sort";
import Image from "next/image";
import CustomDialog from "./customDialog";
import { headerContainer, headerBox, flex1 } from "../../styles/style";

interface headerProps {
  sortType: (value: string | "newest" | "goals") => void;
}

export default function Header(props: headerProps) {
  const [open, setOpen] = React.useState(false);
  const [sortType, setSortType] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    props.sortType(value);
    setSortType(value);
  };

  return (
    <Container sx={headerContainer}>
      <Box sx={headerBox}>
        <Box sx={flex1}>
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
          <CustomDialog
            selectedValue={sortType}
            open={open}
            onClose={handleClose}
          />
        </Box>
      </Box>
    </Container>
  );
}
