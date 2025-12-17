import React from "react";
import { Paper, Typography, Box } from "@mui/material";

interface StatCardProps {
  title: string;
  value: string | number;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        background: color,
        borderRadius: "15px",
        color: "white",
        position: "relative",
        overflow: "hidden",
        minHeight: "115px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: 2.5,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: "-5%",
          top: "-10%",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: "-15px",
          bottom: "-20px",
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.12)",
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}
        >
          {title}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 500, fontSize: "1.8rem" }}>
          {value}
        </Typography>
      </Box>
    </Paper>
  );
};

export default StatCard;
