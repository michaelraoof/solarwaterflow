import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";

// Solar panel performance data
const solarPerformance = [
  {
    id: "1",
    location: "Benban Solar Park",
    capacity: "1650 MW",
    status: "Operational",
    statusColor: "success.main",
    efficiency: "85%",
  },
  {
    id: "2",
    location: "Kom Ombo Solar Plant",
    capacity: "200 MW",
    status: "Under Construction",
    statusColor: "warning.main",
    efficiency: "-",
  },
  {
    id: "3",
    location: "Aswan Solar Farm",
    capacity: "120 MW",
    status: "Operational",
    statusColor: "success.main",
    efficiency: "88%",
  },
  {
    id: "4",
    location: "Hurghada Solar Plant",
    capacity: "100 MW",
    status: "Planned",
    statusColor: "secondary.main",
    efficiency: "-",
  },
];

const SolarPerformance = () => {
  return (
    <DashboardCard title="Solar Energy Performance">
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="solar energy table"
          sx={{ whiteSpace: "nowrap", mt: 2 }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  ID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Location
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Capacity
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Status
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Efficiency
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {solarPerformance.map((solar) => (
              <TableRow key={solar.id}>
                <TableCell>
                  <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                    {solar.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {solar.location}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    {solar.capacity}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      px: "4px",
                      backgroundColor: solar.statusColor,
                      color: "#fff",
                    }}
                    size="small"
                    label={solar.status}
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{solar.efficiency}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default SolarPerformance;
