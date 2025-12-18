import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../config/theme";
import Sidebar from "../components/cards/Sidebar";
import MiniBarChartGraph from "../components/graphs/MiniBarChartGraph";
import InfoCard from "../components/cards/InfoCard";
import {
  Menu as MenuIcon,
  Download as DownloadIcon,
  ChevronLeft,
  ChevronRight,
  Notifications as NotificationsIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  GridView as GridViewIcon,
  ArrowBack as ArrowBackIcon,
  CalendarToday as CalendarTodayIcon,
} from "@mui/icons-material";
import BarChartGraph from "../components/graphs/BarChartGraph";
import Grid from "@mui/material/Grid";
import AssetPieChart from "../components/graphs/AssetPieChart";
import VajraLogo from "../assets/icons/orange-logo.png";
import HealthMetricsIcon from "../assets/icons/health_metrics.svg";
import LocationIcon from "../assets/icons/distance.svg";
import DepartmentSection from "../components/sections/DepartmentSection";
import Logo from "../assets/icons/logo.png";

interface Asset {
  name: string;
  code: string;
  startDate: string;
  clearDate: string;
}

interface Department {
  name: string;
  incidents: number;
  open?: number;
  incidentsReported?: number;
  incidentsOpen?: number;
  totalDowntime?: string;
  assets: Asset[];
}

const Dashboard: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    setDrawerOpen(!isMobile);
  }, [isMobile]);

  const departments: Department[] = [
    {
      name: "Anesthesiology",
      incidents: 5,
      open: 20,
      incidentsReported: 5,
      incidentsOpen: 20,
      totalDowntime: "7 min 22 sec",
      assets: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
    {
      name: "Radiology",
      incidents: 4,
      assets: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
    {
      name: "Dermatology",
      incidents: 3,
      open: 4,
      incidentsReported: 5,
      incidentsOpen: 20,
      totalDowntime: "7 min 22 sec",
      assets: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
    {
      name: "Gynacology",
      incidents: 3,
      assets: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
  ];

  const incidentData = [
    { name: "Neonatal Intensive care", open: 20, closed: 7 },
    { name: "Radiology", open: 6, closed: 8 },
    { name: "Nursing Department", open: 13, closed: 9 },
    { name: "Trauma and Emergency care", open: 4, closed: 4 },
    { name: "Oncology", open: 2, closed: 3 },
  ];

  const workOrderData = [
    { name: "Neonatal intensive care", open: 20, closed: 7 },
    { name: "Radiology", open: 6, closed: 8 },
    { name: "Nursing Department", open: 13, closed: 9 },
    { name: "Trauma and Emergency care", open: 6, closed: 4 },
    { name: "Oncology", open: 2, closed: 3 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <CssBaseline />
      {(!isMobile || drawerOpen) && (
        <Sidebar
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          isMobile={isMobile}
        />
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - 280px)` },
        }}
      >
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            bgcolor: isMobile ? "#1e293b" : "white",
            color: "#1e293b",
            borderBottom: "1px solid #E0E0E0",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: "70px !important",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {!isMobile && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <IconButton
                    size="small"
                    sx={{ color: "#3b82f6", bgcolor: "#eff6ff", mr: 1 }}
                  >
                    <ArrowBackIcon fontSize="small" />
                  </IconButton>

                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: "#0f172a" }}
                  >
                    Reports
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "#3b82f6", fontWeight: 400, mx: 0.5 }}
                  >
                    /
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "#3b82f6", fontWeight: 600 }}
                  >
                    Bio Medical
                  </Typography>
                </Box>
              )}
            </Box>

            {isMobile ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <img src={Logo} alt="vajra" style={{ height: 32 }} />
                </Box>
                <IconButton
                  onClick={() => setDrawerOpen(true)}
                  sx={{ ml: "auto", color: "white" }}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "white",
                    border: "1px solid #E2E8F0",
                    borderRadius: "50px",
                    pl: 0.5,
                    pr: 2,
                    py: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 28,
                      height: 28,
                      bgcolor: "#1e293b",
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "white",
                      mr: 1,
                    }}
                  >
                    NB
                  </Avatar>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    color="text.primary"
                  >
                    Non Bio Medical
                  </Typography>
                </Box>

                <Button
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    bgcolor: "white",
                    color: "#1e293b",
                    border: "1px solid #E2E8F0",
                    borderRadius: "50px",
                    px: 2,
                    py: 1,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#f1f5f9" },
                  }}
                >
                  Vijayanagar
                </Button>

                <IconButton
                  sx={{ bgcolor: "white", border: "1px solid #E2E8F0" }}
                >
                  <GridViewIcon sx={{ color: "#1e293b" }} />
                </IconButton>
                <IconButton
                  sx={{ bgcolor: "white", border: "1px solid #E2E8F0" }}
                >
                  <Badge color="error" variant="dot">
                    <NotificationsIcon sx={{ color: "#1e293b" }} />
                  </Badge>
                </IconButton>
                <Avatar
                  sx={{ bgcolor: "#1e293b", color: "white", cursor: "pointer" }}
                >
                  A
                </Avatar>
              </Stack>
            )}
          </Toolbar>
        </AppBar>

        <Container maxWidth="xl" sx={{ py: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: 2,
              mb: 4,
              background: "#fff",
              p: 2,
            }}
          >
            {!isMobile && (
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={VajraLogo} alt="vajra" style={{ height: 32 }} />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    textAlign: { xs: "left", md: "center" },
                    fontSize: { xs: "1.2rem", md: "2rem" },
                  }}
                >
                  Monthly Report
                </Typography>
              </>
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                alignItems: "center",
                justifyContent: { xs: "space-between", sm: "center" },

                width: { xs: "100%", md: "auto" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #E2E8F0",
                  borderRadius: "50px",
                  px: 1,
                  py: 1,
                  width: { xs: "100%", sm: "180px" },
                }}
              >
                <ChevronLeft sx={{ cursor: "pointer", color: "#94a3b8" }} />

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body1" fontWeight={500} pr={1}>
                    June 2025
                  </Typography>
                  <CalendarTodayIcon sx={{ fontSize: 16, color: "#64748b" }} />
                </Box>

                <ChevronRight sx={{ cursor: "pointer", color: "#94a3b8" }} />
              </Box>

              <Button
                variant="contained"
                endIcon={<DownloadIcon />}
                fullWidth
                sx={{
                  bgcolor: "#3b82f6",
                  textTransform: "none",
                  borderRadius: "50px",
                  px: 3,
                  py: 1,
                  boxShadow: "none",
                  fontWeight: 600,
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": { bgcolor: "#2563eb", boxShadow: "none" },
                }}
              >
                Download PDF
              </Button>
            </Box>
          </Box>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
              <Card
                sx={{
                  bgcolor: "#0b3a78",
                  color: "white",
                  height: "100%",
                  borderRadius: 3,
                  display: "flex",
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 2,
                    px: 3,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        borderRadius: 2,
                      }}
                    >
                      <img src={HealthMetricsIcon} />
                    </Box>

                    <Box>
                      <Typography fontSize={25} lineHeight={1.3}>
                        Sri siddhartha institute
                      </Typography>
                      <Typography fontSize={22} sx={{ opacity: 0.9 }}>
                        of medical science
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <img
                      src={LocationIcon}
                      alt="location"
                      style={{ paddingLeft: 8 }}
                    />
                    <Typography fontSize={25}>Vijayanagar</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
              <AssetPieChart />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
              <MiniBarChartGraph />
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  background:
                    "linear-gradient(135deg, #f3437b 0%, #f9759d 100%)",
                  borderRadius: "15px",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "110px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 2.5,
                  border: "none",
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
                <Box
                  sx={{
                    position: "absolute",
                    right: "25px",
                    bottom: "10px",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.08)",
                    zIndex: 1,
                  }}
                />

                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      mb: 1.5,
                      lineHeight: 1,
                    }}
                  >
                    Total Asset
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 500,
                      fontSize: "1.7rem",
                      lineHeight: 1,
                    }}
                  >
                    200
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                title="Check outs"
                items={[
                  { label: "Checked In", value: 0 },
                  { label: "Checked Out", value: 25 },
                ]}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                title="Incidents"
                items={[
                  { label: "Incidents", value: "22 Reported" },
                  { label: "Total Downtime", value: "12 mins 10 sec" },
                  { label: "Closed", value: 19 },
                  { label: "Open", value: 3 },
                  {
                    label: "Budget spent",
                    value: "₹ 3,00,000",
                    highlight: true,
                  },
                ]}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <InfoCard
                title="Work Order"
                items={[
                  { label: "Work order", value: "17 requested" },
                  { label: "Closed", value: 14 },
                  { label: "Open", value: 3 },
                  {
                    label: "Budget spent",
                    value: "₹ 3,00,000",
                    highlight: true,
                  },
                ]}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid size={{ xs: 12 }}>
              <BarChartGraph
                title="Incident Reported - 12"
                data={incidentData}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <BarChartGraph
                title="Work Order Reported - 12"
                data={workOrderData}
              />
            </Grid>
          </Grid>
          <DepartmentSection
            departments={departments.slice(0, 2)}
            color="#60a5fa"
            isIncident={true}
          />

          <DepartmentSection
            departments={departments.slice(2, 4)}
            color="#1e3a8a"
            isIncident={false}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
