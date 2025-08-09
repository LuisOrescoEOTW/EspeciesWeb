import { Box, Typography } from '@mui/material'
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid white',
    boxShadow: 24,
    p: 4,
    color: 'white',
};

export const PrincipalModal = ({ item }: { item: any }) => {
    console.log(item);
    return (
        <>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Estoy en la pagina Modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </>
    )
}
