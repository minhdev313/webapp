import { setBreadCrumb } from "@/store/slice/app";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, CardContent, Typography, Avatar, Box, Button, Grid } from "@mui/material";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBreadCrumb([
        { title: "Home", link: "/" },
        { title: "Profile", link: "/profile" },
      ])
    );
  }, [dispatch]);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f0f2f5" padding={2}>
      <Grid container spacing={3} maxWidth="90%">
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              padding: 4,
              boxShadow: 6,
              borderRadius: 4,
              bgcolor: "#ffffff",
              height: "100%",
              transition: "0.3s",
              "&:hover": {
                boxShadow: 12,
              },
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/455092502_1804243283437831_8600967763519704709_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFG5zG6nQoPiTOhzwsnXcpJPkrVF6qLh_c-StUXqouH9yOlr_wUqnaZHyYhK0FuesUDw7GY0csrCDpVhxZJoN7y&_nc_ohc=vhOtOpWWBJMQ7kNvgEgBSft&_nc_ht=scontent.fdad3-6.fna&_nc_gid=ApplKXQpLmEMuXUeJRDx2Pq&oh=00_AYA50FtwXRRfpyN0YzwYxoRVgYTUtmzRl2hhDduz5ocYOA&oe=671C4FB8"
                alt="Profile"
                sx={{ width: 160, height: 160, marginBottom: 2, border: "4px solid #1976d2" }}
              />
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#1976d2" }}>
                Võ Đức Minh
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={3} sx={{ height: "100%" }}>
            <Grid item xs={12}>
              <Card
                sx={{
                  padding: 4,
                  boxShadow: 6,
                  borderRadius: 4,
                  bgcolor: "#ffffff",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 12,
                  },
                }}
              >
                <Typography variant="h5" fontWeight="bold" marginBottom={2} color="#1976d2">
                  Group Capstone Project
                </Typography>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                  <Typography variant="body1" fontWeight="bold" color="text.secondary">
                    Name Group
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    Đom Đóm
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                  <Typography variant="body1" fontWeight="bold" color="text.secondary">
                    Mentor
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    Trần Văn Hoàng
                  </Typography>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card
                sx={{
                  padding: 4,
                  boxShadow: 6,
                  borderRadius: 4,
                  bgcolor: "#ffffff",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 12,
                  },
                }}
              >
                <Typography variant="h5" fontWeight="bold" marginBottom={2} color="#1976d2">
                  Information
                </Typography>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                  <Typography variant="body1" fontWeight="bold" color="text.secondary">
                    Student ID
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    DE160118
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                  <Typography variant="body1" fontWeight="bold" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    minhvdde160118@fpt.edu.vn
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                  <Typography variant="body1" fontWeight="bold" color="text.secondary">
                    Major
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    Software Engineer
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body1" fontWeight="bold" color="text.secondary">
                    Sub Major
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    Node JS
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
