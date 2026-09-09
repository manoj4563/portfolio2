import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { label: "Home", id: "home" },
  { label: "Education", id: "education" },
  {label:"Experience",id:"experience"},
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(11,15,20,0.75)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(245,243,238,0.08)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        <Typography
          onClick={() => goTo("home")}
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "#f5f3ee",
            cursor: "pointer",
            letterSpacing: "-0.02em",
          }}
        >
          Manoj<span style={{ color: "#d4a24c" }}>.</span>
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {links.map((link) => (
            <Button
              key={link.id}
              onClick={() => goTo(link.id)}
              sx={{
                color: "#c7cdd3",
                textTransform: "none",
                fontSize: "0.95rem",
                "&:hover": { color: "#f5f3ee", backgroundColor: "transparent" },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "#f5f3ee" }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 240,
            height: "100%",
            backgroundColor: "#0b0f14",
            pt: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
            <IconButton onClick={() => setOpen(false)} sx={{ color: "#f5f3ee" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", px: 2, gap: 1, mt: 2 }}>
            {links.map((link) => (
              <Button
                key={link.id}
                onClick={() => goTo(link.id)}
                sx={{ color: "#f5f3ee", justifyContent: "flex-start", textTransform: "none" }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
