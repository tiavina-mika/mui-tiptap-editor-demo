import React from "react";
import { Box, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" display="flex" justifyContent="center">
      <Stack direction="row" spacing={3}>
        <a href="https://github.com/tiavina-mika/mui-tiptap-editor">GitHub</a>
        <a href="https://www.npmjs.com/package/mui-tiptap-editor">npm</a>
        <a href="https://www.linkedin.com/in/tiavina-michael-ralainirina/">
          LinkedIn
        </a>
      </Stack>
    </Box>
  );
};

export default Footer;
