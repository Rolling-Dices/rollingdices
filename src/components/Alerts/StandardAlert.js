import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useState } from 'react';

function StandardAlert() {
    const [open, setOpenState] = useState(true);

    const handleClose = () => {
        setOpenState(false)
    }

    return (
        <div>    
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    <AlertTitle>Sucesso</AlertTitle>
                    Login efetuado com sucesso!
               </Alert>
            </Snackbar>
        </div>
    );
}

export default StandardAlert;
