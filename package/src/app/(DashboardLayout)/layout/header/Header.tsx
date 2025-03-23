import React from "react";
import { Box, AppBar, Toolbar, styled, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import Image from "next/image"; // Importing Next.js Image for optimized loading
import { IconMenu } from "@tabler/icons-react";
import { css, keyframes } from "@emotion/react";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const animatedBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const Header = ({ toggleMobileSidebar }: ItemType) => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px",
    },
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
  }));

  return (
    <AppBarStyled
      position="fixed"
      sx={[
        {
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          boxShadow: 2,
          animation: `${animatedBackground} 20s ease infinite`,
        },

        {
          height: "80px",
        },
      ]}
    >
      <ToolbarStyled>
        <Box
          flexGrow={1}
          display="flex"
          justifyContent="left"
          sx={{ pt: 12  }}
        >
          <Image
            src="/logo.png" // Update the path to your actual logo file
            alt="Smart Solar-Powered Irrigation System for Greenhouses"
            width={200} // Adjust the size as needed
            height={200} // Adjust the size as needed
            style={{ objectFit: "contain" }}
          />
        </Box>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
