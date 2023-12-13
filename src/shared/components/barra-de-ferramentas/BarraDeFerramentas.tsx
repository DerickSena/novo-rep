import { Search } from '@mui/icons-material';
import { Box, Button, Icon, InputAdornment, Paper, TextField, useTheme } from '@mui/material';

interface IBarraDeFerramentasProps {
    textoDaBusca?:string;
    mostrarInputBusca?: boolean;
    aoMudarTextDeBusca?:(novoTexto: string) => void;
    textoBotaoNovo?:string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?:() => void;
}

export const BarraDeFerramentas :React.FC<IBarraDeFerramentasProps> = ({
  aoMudarTextDeBusca,
  mostrarInputBusca= false,
  textoDaBusca= ' ',
  aoClicarEmNovo,
  mostrarBotaoNovo= true,
  textoBotaoNovo='Novo',

}) => {
  const theme = useTheme();

  return(
    <Box 
      gap={1} 
      padding={1} 
      paddingX={2} 
      display="flex" 
      alignItems="center" 
      height={theme.spacing(5)} 
      component={Paper}
    >
      {mostrarInputBusca &&(
        <TextField 
          value={textoDaBusca}
          onChange={(e) => aoMudarTextDeBusca?.(e.target.value)}
          variant='standard'
          size='small'
          placeholder='Pesquisar...'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      )}

      <Box 
        flex={1}
        display="flex"
        justifyContent="end"
      >
        {mostrarBotaoNovo &&(
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}
          >{textoBotaoNovo}</Button>
        )}
      </Box>
      
    </Box>
  );
};