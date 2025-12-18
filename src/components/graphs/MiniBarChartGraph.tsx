import { Box, Card, CardContent, Typography } from "@mui/material";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MiniBarChartGraph: React.FC = () => {
  const data = [
    { name: "Incidents", open: 35, closed: 20 },
    { name: "Work Order", open: 5, closed: 0 },
    { name: "Check outs", open: 10, closed: 7 },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <Box
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            p: 1.5,
            borderRadius: 1,
            fontSize: "0.875rem",
          }}
        >
          <Typography sx={{ fontWeight: 600, mb: 0.5, color: "white" }}>
            {data.name}
          </Typography>
          <Typography sx={{ fontSize: "0.875rem", color: "white" }}>
            Open - {data.open}
          </Typography>
          <Typography sx={{ fontSize: "0.875rem", color: "white" }}>
            Closed - {data.closed}
          </Typography>
        </Box>
      );
    }
    return null;
  };

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 3,
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 16,
                height: 16,
                bgcolor: "#1e3a8a",
                borderRadius: 0.5,
              }}
            />
            <Typography sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
              Open
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 16,
                height: 16,
                bgcolor: "#60a5fa",
                borderRadius: 0.5,
              }}
            />
            <Typography sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
              Closed
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "100%", height: 240 }}>
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{ top: 20, right: 20, left: -10, bottom: 5 }}
            >
              <XAxis
                dataKey="name"
                tick={{ fontSize: 13, fontWeight: 500, fill: "#334155" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#64748b" }}
                axisLine={false}
                tickLine={false}
                domain={[0, 60]}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
              />
              <Bar
                dataKey="closed"
                stackId="a"
                fill="#60a5fa"
                barSize={60}
                label={{
                  position: "center",
                  fill: "white",
                  fontSize: 14,
                  fontWeight: 600,
                  formatter: (value: any) => (value > 0 ? value : ""),
                }}
                isAnimationActive={false}
              />
              <Bar
                dataKey="open"
                stackId="a"
                fill="#1e3a8a"
                radius={[8, 8, 0, 0]}
                barSize={60}
                label={{
                  position: "center",
                  fill: "white",
                  fontSize: 14,
                  fontWeight: 600,
                  formatter: (value: any) => (value > 0 ? value : ""),
                }}
                isAnimationActive={false}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MiniBarChartGraph;
