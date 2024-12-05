import { Divider, Stack, Paper, Typography, Box } from "@mui/material";

interface SimpleStackProps{
    items: string[]
}

const SimpleStack: React.FC<SimpleStackProps> = ({items}) => {
    return (
        <div>
            <Box sx={{ width: '100%', backgroundColor: 'white' }}>
                <Stack
                    direction={"row"}
                    divider={<Divider orientation="vertical" color='white' flexItem />}
                    spacing={1}
                >
                    {items.map((item, index) => (
                        <Typography key={index} variant="body1" color="black">
                            {item}
                        </Typography>
                    ))}
                </Stack>
            </Box>
        </div>
    );
}

export default SimpleStack;