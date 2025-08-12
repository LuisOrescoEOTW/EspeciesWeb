import { List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import type { Iespecies } from '../Models/Iespecies';
import type { Ireportes } from '../Models/Ireportes';
import { Grass, Pets, Yard } from '@mui/icons-material';
import moment from 'moment';

const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 600,
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
    p: 4,
};

interface props {
    especie: Iespecies | null,
    reporte: Ireportes | null,
}

export const PrincipalModal = ({ especie, reporte }: props) => {
    // console.log(especie);
    // console.log(reporte);
    return (
        <>
            <List
                sx={{
                    ...style2,
                    width: reporte ? 600 : 'fit-content',
                    minWidth: 400
                }}
            >
                <ListItem alignItems="flex-start">
                    {especie &&
                        <>
                            <ListItemAvatar>
                                {especie.reino == 'PLANTAE' && <Yard />}
                                {especie.reino == 'FUNGI' && <Grass />}
                                {especie.reino == 'ANIMALIA' && <Pets />}
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <p>
                                        {especie?.nombre_cientifico}
                                    </p>
                                }
                                secondary={
                                    <React.Fragment>
                                        <span style={{ display: 'block' }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary' }}
                                            >
                                                Reino
                                            </Typography>
                                            {" — "}{especie.reino}
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary' }}
                                            >
                                                Phydiv
                                            </Typography>
                                            {" — "}{especie.phydiv}
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary' }}
                                            >
                                                Clase
                                            </Typography>
                                            {" — "}{especie.clase}
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary' }}
                                            >
                                                Orden
                                            </Typography>
                                            {" — "}{especie.orden}
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary' }}
                                            >
                                                Familia
                                            </Typography>
                                            {" — "}{especie.familia}
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary' }}
                                            >
                                                Origen
                                            </Typography>
                                            {" — "}{especie.origen}
                                        </span>
                                    </React.Fragment>
                                }
                            />
                        </>
                    }
                    {reporte &&
                        <>
                            <ListItemText
                                primary={
                                    <p>
                                        Avistaje
                                    </p>
                                }
                                secondary={
                                    <React.Fragment>
                                        <span style={{ display: 'block' }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary' }}
                                            >
                                                Fecha
                                            </Typography>
                                            {" — "}{moment(reporte.fecha).format('DD/MM/YYYY')}
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary' }}
                                            >
                                                Hora
                                            </Typography>
                                            {" — "}{reporte.hora}
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary' }}
                                            >
                                                Latitud
                                            </Typography>
                                            {" — "}{reporte.latitud}
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary' }}
                                            >
                                                Longitud
                                            </Typography>
                                            {" — "}{reporte.longitud}
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary' }}
                                            >
                                                Descripción
                                            </Typography>
                                            {" — "}{reporte.descripcion}
                                        </span>
                                    </React.Fragment>
                                }
                            />
                        </>
                    }
                </ListItem>
            </List>
        </>
    )
}
