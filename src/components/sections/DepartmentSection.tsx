import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import RightArrowIcon from "../../assets/icons/arrow_right_alt.svg";

interface Asset {
  name: string;
  code: string;
  startDate: string;
  clearDate: string;
}

interface Department {
  name: string;
  incidentsReported?: number;
  incidentsOpen?: number;
  totalDowntime?: string;
  assets: Asset[];
}

interface MultiDepartmentSectionProps {
  departments: Department[];
  color: string;
  isIncident: boolean;
}

const MultiDepartmentSection: React.FC<MultiDepartmentSectionProps> = ({
  departments,
  color,
  isIncident,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      sx={{
        mb: 3,
        borderRadius: 3,
        boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
        border: "1px solid",
        borderColor: "divider",
        overflow: "visible",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {departments.map((department, deptIdx) => (
          <Box
            key={deptIdx}
            sx={{ mb: deptIdx < departments.length - 1 ? 4 : 0 }}
          >
            <Box
              sx={{
                bgcolor: color,
                color: "white",
                p: (department.incidentsReported ?? 0) > 0 ? 3 : 1.5,
                borderRadius: 2,
                mb: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <Box>
                {(department.incidentsReported ?? 0) > 0 && (
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, lineHeight: 1.2, mb: 1 }}
                  >
                    {isIncident
                      ? "Incident Reported per department"
                      : "Work order Reported per department"}
                  </Typography>
                )}

                <Typography
                  sx={{ fontWeight: 600, opacity: 0.9,fontSize:18 }}
                >
                  Department :{" "}
                  <span style={{ fontWeight: 600 }}>{department.name}</span>
                </Typography>
              </Box>

              {(department.incidentsReported ?? 0) > 0 && (
                <Box sx={{ textAlign: "right" }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {isIncident ? "Incidents Reported" : "Work orders Reported"}{" "}
                    :{" "}
                    <span style={{ fontWeight: 400 }}>
                      {department.incidentsReported}
                    </span>
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {isIncident ? "Incidents Open" : "Work orders Open"} :{" "}
                    <span style={{ fontWeight: 400 }}>
                      {department.incidentsOpen ?? 0}
                    </span>
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Total Downtime :{" "}
                    <span style={{ fontWeight: 400 }}>
                      {department.totalDowntime ?? "0 min 0 sec"}
                    </span>
                  </Typography>
                </Box>
              )}
            </Box>

            <Grid container spacing={3}>
              {department.assets
                .slice(0, expanded ? undefined : 4)
                .map((asset, idx) => (
                  <Grid size={{ xs: 12, md: 6, sm: 6, lg: 3 }} key={idx}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        bgcolor: "white",
                        borderRadius: 3,
                        border: "1px solid #f1f5f9",
                        position: "relative",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        },
                      }}
                    >
                      <Box
                        component="button"
                        sx={{
                          position: "absolute",
                          right: 0,
                          top: 0,
                          width: 40,
                          height: 36,
                          borderTopRightRadius: 12,
                          borderBottomLeftRadius: 8,
                          bgcolor: "#e2e8f0",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          transition: "background-color 0.2s",
                          "&:hover": { bgcolor: "#cbd5e1" },
                        }}
                      >
                        <img
                          src={RightArrowIcon}
                          alt="arrow"
                          style={{ width: "18px", height: "18px" }}
                        />
                      </Box>

                      <Box sx={{ mt: 1, pr: 2 }}>
                        {[
                          { label: "Asset name", value: asset.name },
                          { label: "Asset code", value: asset.code },
                          { label: "Start Date", value: asset.startDate },
                          { label: "Clear Date", value: asset.clearDate },
                        ].map((row, i) => (
                          <Box
                            key={i}
                            sx={{
                              display: "flex",
                              alignItems: "baseline",
                              mb: 1,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 700,
                                color: "#0f172a",
                                minWidth: "90px",
                                fontSize: "0.85rem",
                              }}
                            >
                              {row.label} :
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 400,
                                color: "#334155",
                                fontSize: "0.85rem",
                              }}
                            >
                              {row.value}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </Box>
        ))}

        {departments.some((dept) => dept.assets.length > 4) && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              onClick={() => setExpanded(!expanded)}
              endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
              sx={{
                color: color,
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 20,
                px: 3,
                "&:hover": { bgcolor: "rgba(0,0,0,0.02)" },
              }}
            >
              {expanded ? "Show Less" : "Show More"}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default MultiDepartmentSection;
