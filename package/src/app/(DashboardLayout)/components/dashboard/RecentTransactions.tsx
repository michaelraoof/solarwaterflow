import React from "react";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { Typography } from "@mui/material";

// Define the structure of the solar milestone data
interface SolarMilestone {
  year: string;
  description: string;
  color: "primary" | "secondary" | "success" | "warning" | "error";
}

// Solar milestones data
const solarMilestones: SolarMilestone[] = [
  {
    year: "2018",
    description: "Benban Solar Park construction started.",
    color: "primary",
  },
  {
    year: "2019",
    description: "Egypt reached 1.6 GW solar capacity.",
    color: "secondary",
  },
  {
    year: "2020",
    description: "Installed 500 MW new solar capacity.",
    color: "success",
  },
  {
    year: "2021",
    description: "Benban Solar Park fully operational.",
    color: "warning",
  },
  {
    year: "2022",
    description: "Total solar capacity surpassed 2 GW.",
    color: "error",
  },
  {
    year: "2023",
    description: "Largest solar project announced.",
    color: "success",
  },
];

const SolarEnergyStatistics: React.FC = () => {
  return (
    <DashboardCard title="Solar Energy Statistics">
      <Timeline
        className="theme-timeline"
        sx={{
          p: 0,
          mb: "-40px",
          "& .MuiTimelineConnector-root": {
            width: "1px",
            backgroundColor: "#efefef",
          },
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.5,
            paddingLeft: 0,
          },
        }}
      >
        {solarMilestones.map((milestone, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>{milestone.year}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={milestone.color} variant="outlined" />
              {index !== solarMilestones.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontWeight="600">{milestone.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </DashboardCard>
  );
};

export default SolarEnergyStatistics;
