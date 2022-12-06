import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile({ matches }) {

  const { setDrawerOpen } = useUIContext();

  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)} >
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
