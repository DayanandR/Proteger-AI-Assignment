import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface AssetData {
  [key: string]: string | number;
  name: string;
  value: number;
  color: string;
}

const AssetPieChart: React.FC = () => {
  const data: AssetData[] = [
    { name: "Working Assets", value: 193, color: "#1a367e" },
    { name: "Not working Assets", value: 7, color: "#c6637e" },
    { name: "Discarded", value: 25, color: "#4dabf5" },
  ];

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 250,
          }}
        >
          {/* Left Side: The Chart */}
          <Box sx={{ width: "50%", height: 250 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  dataKey="value"
                  stroke="none"
                  paddingAngle={2}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Box>

          {/* Right Side: Labels (Legend) */}
          <Box
            sx={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {data.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: item.color,
                    borderRadius: 1, // Matches the slightly rounded squares in image
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#1e293b",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AssetPieChart;
