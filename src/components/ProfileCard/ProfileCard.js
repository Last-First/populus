import React from 'react';
import { Box, Card, Typography, Avatar, Link, Divider } from '@material-ui/core';
import classes from './ProfileCard.module.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import moment from 'moment';
import { connect } from 'react-redux';

const ProfileCard = (props) => {
  let renderLogic = () => {
    if (props.profileSummary && props.profile) {
      let profile = props.profile
      let profileSummary = props.profileSummary
      let dname = profile[Object.keys(profile)[0]].map((obj, key) => obj.fieldName === "dname" ? 
        <Typography>
          <Link href="#" className={classes.Name}
            tabIndex="0" aria-label={"display name = " + obj.value}>{obj.value}</Link>
        </Typography>
        : null)
      return (
        <Box className={classes.CustomWidth}>
          <Card className={classes.Card} align="center">
            <Avatar alt="Profile Image" className={classes.Avatar}
              src={"../../assets/" + profileSummary.fname + ".jpg"}
              tabIndex="0" aria-label={"profile image"} />
            {dname}
            <Typography>
              <Link href="#" className={classes.Role}
                tabIndex="0" aria-label={"position = " + profileSummary.position}>{profileSummary.position}</Link>
            </Typography>
          </Card>
          <Divider />
          <Card className={classes.Card} align="start">
            <Box className={classes.Box}>
              <LocationOnIcon className={classes.Icon} />
              <Typography className={classes.ProfileDetails}
                tabIndex="0" aria-label={"location = " + profileSummary.city + ', ' + profileSummary.country}>
                {profileSummary.city}, {profileSummary.country}
              </Typography>
            </Box>
            <Box className={classes.Box}>
              <AccessTimeIcon className={classes.Icon} />
              <Link href="#" className={classes.ProfileDetails}
                tabIndex="0" aria-label="timezone">
                {moment().format('LT')} (GMT+08:00) Kuala Lumpur, Singapore
              </Link>
            </Box>
            <Box className={classes.Box}>
              <MailOutlineIcon className={classes.Icon} />
              <Link href="#" className={classes.ProfileDetails}
                tabIndex="0" aria-label={"email = " + profileSummary.email}>{profileSummary.email}</Link>
            </Box>
          </Card>
        </Box>
      )
    } else return <Box className={classes.Loader} />
  }
  let profileCard = renderLogic()

  return (
    <Box className={classes.CustomWidth}>
      {profileCard}
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    profileSummary: state.profileSummary,
    profile: state.profile
  }
}

export default connect(mapStateToProps)(ProfileCard);