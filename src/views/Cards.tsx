import { Typography } from "@mui/material"

export interface CardProps{
    name: string,
    time: string
}

export default function Cards(props: CardProps) {
    return (
        <li  style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '16px 50px',
            borderBottom: '1px solid #ddd',
            borderTop: '1px solid #ddd',
            borderRadius: '25px',
            borderStyle: 'solid',
            alignItems: 'center',
            marginRight: '20px',
            backgroundColor: 'black',
            borderStartEndRadius: '30px'
            }}>
                <Typography
                    variant="h6"
                    sx={{
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    marginBottom: '4px', // Space between name and time
                }}
            >
                    {props.name}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'gray' }}>
                    {props.time}
                </Typography>
        </li>
    )
}