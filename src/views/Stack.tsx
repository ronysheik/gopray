import { Divider, Stack, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  

const SimpleStack = (items: string[]) => {

    return (
        <div>
            <Stack 
                direction={'row'}
                divider={<Divider orientation="vertical" flexItem/>}
                spacing={2}>
                <Item>
                    {items.map((items) => items)}
                </Item>
            </Stack>
        </div>
    );
}

export default SimpleStack;