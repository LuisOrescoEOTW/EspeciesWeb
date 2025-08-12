import "../Styles/Principal.css"; // Estilos
import fotoCelu from "../Images/fotoCelu.svg";
import guardaparque from "../Images/sombrero.png";
import titulo from "../Images/SIB-APP.png";
import todos from "../Images/Todos.png";
import animalia from "../Images/Animalia.png";
import fungi from "../Images/Fungi.png";
import plantae from "../Images/Plantae.png";
import noImage from '../Images/noImage.jpg';

import { useEffect, useState } from "react";
import { Edit, LocationOn, Person, School } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { getEspecies, getEspeciesByReinoTodos } from "../../redux/slices/especies/especiesThunks";
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Modal, Paper, Tab, TablePagination, Tabs, Typography, useTheme } from "@mui/material";
import { getReportes, getReportesByReinoTodos } from "../../redux/slices/reportes/reportesThunks";
import { PrincipalModal } from "../Components/PrincipalModal";
import type { Iespecies } from "../Models/Iespecies";
import type { Ireportes } from "../Models/Ireportes";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export const Principal = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Lista de Especies
  const { especies = [] } = useSelector((state: RootState) => state.especies);

  // Lista de Reportes
  const { reportes = [] } = useSelector((state: RootState) => state.reportes);

  //General al inicio trae todas las especies
  useEffect(() => {
    dispatch(getEspecies());
    dispatch(getReportes());
  }, [])


  // Selecciono Contenido de Especies
  const [select, setSelect] = useState<string>("TODOS");
  const handleClick = (a: string) => {
    setSelect(a);
    dispatch(getEspeciesByReinoTodos(a));
    dispatch(getReportesByReinoTodos(a));
  };

  //Paginación
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const pageChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4); // cantidad inicial por página
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Cargar las tablas segun opcion
  const cargarTabla = (imagen: string, nombre: string, index: number, item: any) => {
    return (
      <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
        <Card
          sx={{
            maxWidth: 300,
            bgcolor: "#000000",
            color: "#ffffff",
            boxShadow: 20,
            borderRadius: 2,
            border: "3px solid #ffffff"
          }}
        >
          <CardActionArea onClick={() => handleOpen(item)}>
            <CardMedia
              component="img"
              height="230"
              image={imagen}
              alt="imagen no disponible"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  height: '3rem',
                  lineHeight: 1,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {nombre}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleOpen(item)}>
              Detalle
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
  const tablaPagination = () => {
    return (
      <TablePagination
        component="div"
        count={especies.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[4, 8, 12, 16]}
      />
    )
  }

  //Clase Modal
  const [open, setOpen] = useState(false);
  const [selectedEspecie, setSelectedEspecie] = useState<Iespecies | null>(null);
  const [selectedReporte, setSelectedReporte] = useState<Ireportes | null>(null);
  const handleOpen = (item: any) => {
    if (item.latitud) {
      // REPORTES
      setSelectedEspecie(item.especie);
      setSelectedReporte(item);
    } else {
      // ESPECIES
      setSelectedEspecie(item);
      setSelectedReporte(null);
    }
    setOpen(true);
  }
  const handleClose = () => {
    setSelectedEspecie(null);
    setSelectedReporte(null);
    setOpen(false);
  }

  return (
    <>
      <div className="page-container">
        <div className="content-wrap">

          {/* Encabezado con botones */}
          <div className="contenedor-grid">
            <div className="item-grid">
              <img src={titulo} alt="titulo" />
            </div>

            <div className="item-grid guardaparque">
              <img src={guardaparque} alt="guardaparque" />
            </div>

            <div className="item-grid">
              <div
                className={`boton-wrapper ${select === "TODOS" ? "boton-wrapper-select" : ""
                  }`}
              >
                <img
                  src={todos}
                  alt="Botón Todos"
                  className="boton-imagen"
                  onClick={() => handleClick("TODOS")}
                />
              </div>
            </div>

            <div className="item-grid">
              <div
                className={`boton-wrapper ${select === "ANIMALIA" ? "boton-wrapper-select" : ""
                  }`}
              >
                <img
                  src={animalia}
                  alt="Botón Animalia"
                  className="boton-imagen"
                  onClick={() => handleClick("ANIMALIA")}
                />
              </div>
            </div>

            <div className="item-grid">
              <div
                className={`boton-wrapper ${select === "FUNGI" ? "boton-wrapper-select" : ""
                  }`}
              >
                <img
                  src={fungi}
                  alt="Botón Fungi"
                  className="boton-imagen"
                  onClick={() => handleClick("FUNGI")}
                />
              </div>
            </div>

            <div className="item-grid">
              <div
                className={`boton-wrapper ${select === "PLANTAE" ? "boton-wrapper-select" : ""
                  }`}
              >
                <img
                  src={plantae}
                  alt="Botón Plantae"
                  className="boton-imagen"
                  onClick={() => handleClick("PLANTAE")}
                />
              </div>
            </div>
          </div>

          {/* Título */}
          <div className="titulo">
            <h1>AVISTAJES EN</h1>
            <h1>PARQUES NACIONALES</h1>
            <img src={fotoCelu} alt="decoración" className="decoracion" />
          </div>

          {/* Tarjetas */}
          <div className="tarjeta">
            <Box sx={{ bgcolor: 'Scrollbar', width: '100%' }}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={pageChange}
                  indicatorColor="primary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                  sx={{ bgcolor: 'slategrey' }}
                >
                  <Tab label="ESPECIES" {...a11yProps(0)} />
                  <Tab label="REPORTES" {...a11yProps(1)} />
                </Tabs>
              </AppBar>

              {/* Especies */}
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Box>
                  <Grid container spacing={6}>
                    {especies
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((item, index) => (
                        cargarTabla(item.imagen ? encodeURI(String(item.imagen)) : noImage, item.nombre_cientifico, index, item)
                      ))}
                  </Grid>
                  {tablaPagination()}
                </Box>
              </TabPanel>

              {/* Reportes */}
              <TabPanel value={value} index={1} dir={theme.direction}>
                <Box>
                  <Grid container spacing={6}>
                    {reportes
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((item, index) => (
                        cargarTabla(item.imagen ? `${item.imagen}` : noImage, item.especie.nombre_cientifico, index, item)
                      ))}
                  </Grid>
                  {tablaPagination()}
                </Box>
              </TabPanel>
            </Box>
          </div>
        </div>

        {/* Pie de página */}
        <Paper sx={{ bottom: 0, left: 0, right: 0 }} elevation={10}>
          <BottomNavigation
            showLabels
            style={{ backgroundColor: "black" }}
          >
            <BottomNavigationAction style={{ color: 'darkgray' }} label="UNTDF" icon={<School />} />
            <BottomNavigationAction style={{ color: 'darkgray' }} label="Luis Orescovich" icon={<Person />} />
            <BottomNavigationAction style={{ color: 'darkgray' }} label="Laboratorio de Software" icon={<Edit />} />
            <BottomNavigationAction style={{ color: 'darkgray' }} label="Ushuaia - TDF" icon={<LocationOn />} />
          </BottomNavigation>
        </Paper>
      </div>

      {/* Clae Modal */}
      <Modal
        open={open}
        onClose={handleClose}
      >
        <PrincipalModal especie={selectedEspecie} reporte={selectedReporte}/>
      </Modal>
    </>

  );
};
