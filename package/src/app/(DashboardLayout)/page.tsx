"use client";
import { Grid, Box, Typography, Button } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
// components
import SalesOverview from "@/app/(DashboardLayout)/components/dashboard/SalesOverview";
import YearlyBreakup from "@/app/(DashboardLayout)/components/dashboard/YearlyBreakup";
import RecentTransactions from "@/app/(DashboardLayout)/components/dashboard/RecentTransactions";
import ProductPerformance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";
import Blog from "@/app/(DashboardLayout)/components/dashboard/Blog";
import MonthlyEarnings from "@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3} mt={8}>
          <Grid item xs={12} lg={8}>
            <HeroSection />
          </Grid>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};
const HeroSection = () => {
  const text = "Smart Solar-Powered Irrigation System for Greenhouses";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => text.slice(0, i + 1)); // Slice instead of appending
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "90%",
        minHeight: { xs: "40vh", sm: "60vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        px: 3,
        // bgcolor: "#121212", // Single clean background
      }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: "900px",
          px: 4,
          bgcolor: "#121212", // Better contrast
          p: { xs: 2, sm: 3 },
          borderRadius: "12px",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            fontWeight={700}
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, // More compact
              lineHeight: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
              letterSpacing: "0.04em",
            }}
            gutterBottom
          >
            {displayedText}
          </Typography>
        </motion.div>
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            color: "#ddd",
            fontWeight: "400",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, // Adjusted for readability
            lineHeight: { xs: "1.4rem", sm: "1.6rem", md: "2rem" },
            letterSpacing: "0.02em",
          }}
        >
          Empowering a 100-acre potato farm in Fayoum, Egypt, with renewable
          energy and automation. This project integrates cutting-edge smart
          technologies to enhance efficiency, optimize resources, and drive
          sustainable farming—aligned with Egypt Vision 2030.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
