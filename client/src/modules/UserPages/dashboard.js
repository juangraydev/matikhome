import React from "react";
import Header from "../../shared/component/header";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeviceChannel from "./component/Channel";
import Paper from '@mui/material/Paper';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


const HouseList = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      if(event.target.value == 0){
        createHouse();
      }else {
          
        setAge(event.target.value);
      }
    };

    const createHouse = () => {
        alert("wqeqwe");
    }
  
    return (
      <div>
        <FormControl sx={{ mt: 2, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-autowidth-label">House List</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="House List"
          >
            <MenuItem value={10}>House 1</MenuItem>
            <MenuItem value={21}>Mansion 2</MenuItem>
            <MenuItem value={22}>Village 3</MenuItem>
            <MenuItem value={0}>Build a House</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
}

export default function UserDashboard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Container style={{paddingTop: 10, paddingBottom: 10 }} maxWidth="false" >
                <Header/>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <HouseList/>
                    </Grid>
                    <Grid item xs={6} style={{justifyContent: "right", display: 'flex'}}>
                        <SettingsApplicationsIcon sx={{ fontSize: 40, mt: 2}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <DeviceChannel/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Item Two
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Item Three
                            </TabPanel>
                        </Box>
                    </Grid>
                </Grid>
                

            </Container>
        </React.Fragment>
    );
};