import React from 'react';
import { CardContent, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import { Map } from './Map';
import { City } from '../types';

interface Props {
    ipSearchResults: City
}

export const ResultCard: React.FC<Props> = ({ipSearchResults}) => {
    return (
        <>
            <Map latitude={ipSearchResults?.location?.latitude || 0} longitude={ipSearchResults?.location?.longitude || 0} />
            <Card className="results-container">
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid container item spacing={3}>
                            <Grid item xs={4}>
                                <Grid item>
                                    <b>City: </b>
                                    {ipSearchResults?.city?.names?.en}
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid item>
                                    <b>Region: </b>
                                    {ipSearchResults?.subdivisions?.[0]?.names?.en}
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid item>
                                    <b>Latitude: </b>
                                    {ipSearchResults?.location?.latitude}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={3}>
                            <Grid item xs={4}>
                                <Grid item>
                                    <b>Country: </b>
                                    {ipSearchResults?.country?.names?.en}
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid item>
                                    <b>Continent: </b>
                                    {ipSearchResults?.continent?.names?.en}
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid item>
                                    <b>Longitude: </b>
                                    {ipSearchResults?.location?.longitude}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
};
