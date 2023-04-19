import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const RepoItems = ({issue}) => {

  return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent draggable={true}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {issue.title}
            </Typography>
            <Typography variant="h5" component="div">
                {issue.created_at}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {issue.comments}
            </Typography>
            <Typography variant="body2">
                {issue.author_association}
            </Typography>
        </CardContent>
  </Card>
  )
}

export default RepoItems;
