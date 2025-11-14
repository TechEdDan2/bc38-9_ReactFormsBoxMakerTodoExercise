import React, { useState } from "react";
import { TextField, Button, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const BoxMakerForm = ({ addBox }) => {

    const INIT_STATE = {
        width: "",
        height: "",
        color: ""
    }

    const [formData, setFormData] = useState(INIT_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Box Data:", formData);
        addBox({ ...formData });
        setFormData(INIT_STATE);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 400,
                margin: "0 auto",
            }}
        >
            <TextField
                label="Width"
                name="width"
                value={formData.width}
                onChange={handleChange}
                variant="outlined"
                color="success"
                required
            />
            <TextField
                label="Height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                variant="outlined"
                required
            />
            <TextField
                label="Color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                variant="outlined"
                color="warning"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Create Box
            </Button>
        </Box>
    );


}

export default BoxMakerForm;