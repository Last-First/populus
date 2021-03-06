import React from 'react';
import { Box, Typography } from '@material-ui/core';
import classes from '../Content.module.scss';
import { withStyles } from "@material-ui/core/styles";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';

const CustomTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

const CustomCardHeader = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(CardHeader);

const Home = () => {
    return (
        <Box className={classes.Box}>
            {/* <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=1908403972707230"></script>
            <div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="500" data-show-text="true"><blockquote cite="https://developers.facebook.com/20531316728/posts/10154009990506729/" class="fb-xfbml-parse-ignore">Posted by <a href="https://www.facebook.com/facebookapp/">Facebook</a> on&nbsp;<a href="https://developers.facebook.com/20531316728/posts/10154009990506729/">Thursday, August 27, 2015</a></blockquote></div> */}
            <Card className={classes.Paper}>
                <CustomCardHeader
                    avatar={
                        <Avatar>RF</Avatar>
                    }
                    action={
                        <IconButton><MoreVertIcon className={classes.Icon} /></IconButton>
                    }
                    title="Richard Feynman (@ProfFeynman)"
                    subheader="November 7, 2020"
                />
                <CardContent>
                    <CustomTypography variant="body2" component="p">
                        If you want to master something, teach it. The more you teach, the better you learn. Teaching is a powerful tool to learning.
                    </CustomTypography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton><FavoriteIcon className={classes.Icon} /></IconButton>
                    <IconButton><ShareIcon className={classes.Icon} /></IconButton>
                </CardActions>
            </Card>
            <Divider />
            <Card className={classes.Paper}>
                <CustomCardHeader
                    avatar={
                        <Avatar>Je</Avatar>
                    }
                    action={
                        <IconButton><MoreVertIcon className={classes.Icon} /></IconButton>
                    }
                    title="Je (@Saez_uri)"
                    subheader="August 13, 2019"
                />
                <CardContent>
                    <CustomTypography variant="body2" component="p">
                        Your past-times, consisted of the strange<br />And twisted and deranged<br />And I hate that little game you had called<br />Crying
                    </CustomTypography>
                </CardContent>
                <img alt="post" src={'https://source.unsplash.com/IeAX5I9zff0'} className={classes.img} />
                <CardActions disableSpacing>
                    <IconButton><FavoriteIcon className={classes.Icon} /></IconButton>
                    <IconButton><ShareIcon className={classes.Icon} /></IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Home;