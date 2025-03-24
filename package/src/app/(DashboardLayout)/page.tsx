"use client";
import { Grid, Box, Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import SalesOverview from "@/app/(DashboardLayout)/components/dashboard/SalesOverview";
import YearlyBreakup from "@/app/(DashboardLayout)/components/dashboard/YearlyBreakup";
import RecentTransactions from "@/app/(DashboardLayout)/components/dashboard/RecentTransactions";
import ProductPerformance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";
import MonthlyEarnings from "@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <PageContainer
      title="Solar Water Flow"
      description="Smart Solar-Powered Irrigation System for Greenhouses"
    >
      <Box>
        <Grid container spacing={3} mt={8}>
          {/* Hero Section */}
          <Grid item xs={12}>
            <HeroSection />
          </Grid>

          {/* Main Dashboard Content */}
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
    const typeText = () => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i < text.length) setTimeout(typeText, 30);
    };
    typeText();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "40vh", sm: "60vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        px: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: "250px",
            sm: "400px",
            md: "600px",
            lg: "800px",
            xl: "900px",
          },
          px: 4,
          bgcolor: "#121212",
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
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
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
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            lineHeight: { xs: "1.4rem", sm: "1.6rem", md: "2rem" },
            letterSpacing: "0.02em",
            whiteSpace: "pre-line",
          }}
        >
          We’re transforming a 100-acre potato farm in Fayoum, Egypt, with
          renewable energy and smart automation. Our AI-powered system analyzes
          potatoes in real time, detecting rotten ones with 92.7% accuracy. You
          can even try our AI tool right here on our website! By combining
          technology with sustainable farming, we’re optimizing resources,
          improving efficiency, and supporting Egypt’s Vision 2030.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
