import React from "react";
import { Box } from "native-base";
const AppScreen = ({ children }) => {
  return (
    <Box flex="1" safeArea>
      {children}
    </Box>
  );
};

export default AppScreen;
