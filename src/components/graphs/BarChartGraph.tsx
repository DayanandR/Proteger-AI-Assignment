import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

const BarChartGraph: React.FC<{
  title: string;
  data: { name: string; open: number; closed: number }[];
}> = ({ title, data }) => {
  const isIncident = title.toLowerCase().includes("incident");

  const colors = isIncident
    ? { open: "#4dabf5", closed: "#e3f2fd" } 
    : { open: "#1a237e", closed: "#c5cae9" };

  return (
    <Card sx={{ borderRadius: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: 700 }}>
            {title}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  bgcolor: colors.open,
                  borderRadius: 0.5,
                }}
              />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Open
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  bgcolor: colors.closed,
                  borderRadius: 0.5,
                }}
              />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Closed
              </Typography>
            </Box>
          </Box>
        </Box>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            layout="vertical" 
            margin={{ left: 40, right: 30 }}
          >
            <CartesianGrid horizontal={false} stroke="#f1f5f9" />
            <XAxis
              type="number"
              domain={[0, 30]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#94a3b8" }}
            />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              width={150}
              tick={{ fontSize: 11, fontWeight: 500, fill: "#1e293b" }}
            />
            <Tooltip
              cursor={{ fill: "#f8fafc" }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />

            <Bar dataKey="open" stackId="a" fill={colors.open} barSize={28}>
              <LabelList
                dataKey="open"
                position="center"
                style={{
                  fill: isIncident ? "#000" : "#fff",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              />
            </Bar>
            <Bar
              dataKey="closed"
              stackId="a"
              fill={colors.closed}
              barSize={28}
              radius={[0, 4, 4, 0]}
            >
              <LabelList
                dataKey="closed"
                position="center"
                style={{ fill: "#000", fontSize: "11px", fontWeight: "bold" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 2,
            fontWeight: 700,
            color: "text.primary",
            letterSpacing: 0.5,
          }}
        >
          Total No.of {isIncident ? "Incidents" : "Work order"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BarChartGraph;
