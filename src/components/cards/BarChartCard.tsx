import { Box, Card, CardContent, Typography } from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarChartCard: React.FC<{
  title: string;
  data: { name: string; open: number; closed: number }[];
}> = ({ title, data }) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 600 }}>
            {title}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  bgcolor: "#3b82f6",
                  borderRadius: 1,
                }}
              />
              <Typography variant="caption">Open</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  bgcolor: "#93c5fd",
                  borderRadius: 1,
                }}
              />
              <Typography variant="caption">Closed</Typography>
            </Box>
          </Box>
        </Box>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="open" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="closed" fill="#93c5fd" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 2,
            color: "text.secondary",
          }}
        >
          Total No.of{" "}
          {title.toLowerCase().includes("incident")
            ? "incidents"
            : "work order"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BarChartCard;
