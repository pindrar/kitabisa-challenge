import { SxProps } from "@mui/system";

export const cardMediaSx: SxProps = {
  height: {
    xs: 160,
    md: 200,
  },
};

export const cardSx: SxProps = {
  minHeight: {
    xs: 320,
    sm: 380,
    md: 420,
  },
};

export const cardContainerSx: SxProps = {
  paddingTop: 10,
};

export const headerContainer: SxProps = {
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
};

export const headerBox: SxProps = {
  width: {
    xs: "100vw",
    md: "1200px",
  },
  display: "flex",
  margin: "auto",
};

export const flex1: SxProps = { flex: 1 };
