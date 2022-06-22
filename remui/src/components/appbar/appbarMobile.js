import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import Actions from "./actions";

export default function AppbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant='h4'>
        My Bags
      </AppbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
