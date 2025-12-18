import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Button,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ContactSupport as ContactSupportIcon,
  ExitToApp as ExitToAppIcon,
  ExpandLess,
  ExpandMore,
  ChevronRight,
} from "@mui/icons-material";
import VajraLogo from "../../assets/icons/logo.png";
import DashboardIcon from "../../assets/sidebaricons/dashboard-icon.svg?react";
import AssetIcon from "../../assets/sidebaricons/asset_icon.svg?react";
import IncidentsIcon from "../../assets/sidebaricons/incidents-icon.svg?react";
import ReportstsIcon from "../../assets/sidebaricons/reports-icon.svg?react";
import RequestsIcon from "../../assets/sidebaricons/request-icon.svg?react";
import ServicesIcon from "../../assets/sidebaricons/services-icon.svg?react";
import UsersIcon from "../../assets/sidebaricons/users-icon.svg?react";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems?: MenuItem[];
}

const Sidebar: React.FC<{
  open: boolean;
  onClose: () => void;
  isMobile: boolean;
}> = ({ open, onClose, isMobile }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const menuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <DashboardIcon width={18} height={18} />,
    },
    {
      id: "assets",
      label: "Assets",
      icon: <AssetIcon width={18} height={18} />,
      subItems: [
        {
          id: "all-assets",
          label: "All Assets",
          icon: <AssetIcon width={18} height={18} />,
        },
      ],
    },
    {
      id: "incidents",
      label: "Incidents",
      icon: <IncidentsIcon width={18} height={18} />,
    },
    {
      id: "services",
      label: "Services",
      icon: <ServicesIcon width={18} height={18} />,
    },
    {
      id: "request",
      label: "Request",
      icon: <RequestsIcon width={18} height={18} />,
    },
    {
      id: "users",
      label: "Users",
      icon: <UsersIcon width={18} height={18} />,
      subItems: [
        {
          id: "all-users",
          label: "All Users",
          icon: <UsersIcon width={18} height={18} />,
        },
      ],
    },
    {
      id: "reports",
      label: "Reports",
      icon: <ReportstsIcon width={18} height={18} />,
      subItems: [
        {
          id: "monthly-reports",
          label: "Monthly Reports",
          icon: <ReportstsIcon width={18} height={18} />,
        },
      ],
    },
  ];

  const handleToggle = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const drawerContent = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "space-between" : "center",
          gap: 1,
        }}
      >
        {isMobile && (
          <IconButton onClick={onClose} sx={{ color: "white", mr: 1 }}>
            <ChevronRight />
          </IconButton>
        )}

        {VajraLogo ? (
          <img src={VajraLogo} alt="vajra" style={{ maxHeight: 40 }} />
        ) : (
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            VAJRA
          </Typography>
        )}
      </Box>

      <List sx={{ flexGrow: 1, px: 2 }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => item.subItems && handleToggle(item.id)}
                sx={{
                  borderRadius: 2,
                  color: "rgba(255, 255, 255, 0.8)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    color: "white",
                  },
                }}
                selected={item.id === "reports"}
              >
                <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
                {item.subItems &&
                  (openItems[item.id] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>
            {item.subItems && (
              <Collapse in={openItems[item.id]} timeout="auto" unmountOnExit>
                <List disablePadding sx={{ pl: 2 }}>
                  {item.subItems.map((subItem) => (
                    <ListItem key={subItem.id} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemButton
                        sx={{
                          borderRadius: 2,
                          color: "rgba(255, 255, 255, 0.7)",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            color: "white",
                          },
                        }}
                      >
                        <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={subItem.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <Box
        sx={{
          p: 2,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Button
          startIcon={<ContactSupportIcon />}
          sx={{
            color: "white",
            textTransform: "none",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            border: "1px solid white",
            borderRadius: 5,
            width: 150,
            justifyContent: "center",
          }}
        >
          Contact us
        </Button>

        <Button
          startIcon={<ExitToAppIcon />}
          sx={{
            color: "white",
            textTransform: "none",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            border: "1px solid white",
            borderRadius: 5,
            width: 150,
            justifyContent: "center",
          }}
        >
          Log Out
        </Button>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      anchor={isMobile ? "right" : "left"}
      open={open}
      onClose={onClose}
      sx={{
        width: 280,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 280,
          boxSizing: "border-box",
          backgroundColor: "#1e293b",
          color: "white",
          borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.1)",
          borderLeft: isMobile ? "1px solid rgba(255,255,255,0.1)" : "none",
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
