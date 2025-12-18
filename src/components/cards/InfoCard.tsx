import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const InfoCard: React.FC<{
  title: string;
  items: { label: string; value: string | number; highlight?: boolean }[];
}> = ({ title, items }) => (
  <Card
    sx={{
      height: "100%",
      borderRadius: 2,
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    }}
  >
    <Box
      sx={{
        bgcolor: "#D4EBFF",
        px: 2,
        py: 1.5,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e293b" }}
      >
        {title}
      </Typography>
    </Box>

    <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {items.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#1e293b" }}
            >
              {item.label}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: item.highlight ? "#22c55e" : "#1e293b",
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default InfoCard;
