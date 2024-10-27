import { Heading, Divider, Link } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header>
      <Heading textAlign="center" my={3} style={{ position: "relative" }}>
        {location.pathname !== "/" && (
          <Link
            as={NavLink}
            to="/"
            color="blue.500"
            style={{
              fontSize: 14,
              fontWeight: 400,
              position: "absolute",
              top: "50%",
              left: "20px",
              transform: "translateY(-50%)",
              height: 40,
              display: "flex",
              alignItems: "center",
            }}
          >
            Home page
          </Link>
        )}
        Todo list
      </Heading>
      <Divider />
    </header>
  );
}

export default Header;
