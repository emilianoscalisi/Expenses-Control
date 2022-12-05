import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import "./Graficos.css";
import GraficoPie from '../charts/GraficoPie';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Graficos = (props) => {

       

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return (

        <div className="graficos-content">
            <div className="title-seccion-item">
                <label>Gráficos</label>
            </div>

            <Button  variant="outlined" className="btn-graph" onClick={handleClickOpen}>
               <InsertChartIcon fontSize="large"/>
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle >{"Gráficos Resumen"}</DialogTitle>
                <DialogContent >
                    {/* <DialogContentText id="alert-dialog-slide-description">
                        
                    </DialogContentText> */}

                    <div className='content-grafico' >
                        <GraficoPie/>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </div>













    );
}

export default Graficos;