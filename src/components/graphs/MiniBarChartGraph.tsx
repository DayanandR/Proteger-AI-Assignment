import { Box, Card, CardContent } from "@mui/material";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

const MiniBarChartGraph: React.FC = () => {
  const data = [
    { name: "Incidents", open: 35, closed: 20 },
    { name: "Work Order", open: 5, closed: 0 },
    { name: "Check outs", open: 10, closed: 7 },
  ];

  return (
    <Card sx={{ height: "100%", display: "flex" }}>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <Bar dataKey="open" fill="#3b82f6" />
              <Bar dataKey="closed" fill="#93c5fd" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MiniBarChartGraph;
