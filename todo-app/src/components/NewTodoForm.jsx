import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const NewTodoForm = ({ addTodo }) => {

    const INIT_STATE = {
        text: ""
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
        console.log("Data:", formData);
        addTodo({ ...formData });
        setFormData(INIT_STATE);
    }

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
                label="text"
                name="text"
                value={formData.text}
                onChange={handleChange}
                variant="outlined"
                color="success"
                required
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "green", // Default outline color
                        },
                        "&:hover fieldset": {
                            borderColor: "blue", // Outline color on hover
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "red", // Outline color when focused
                        },
                    },
                    "& .MuiInputBase-input": {
                        color: "white", // Text color
                    },
                    "& .MuiInputLabel-root": {
                        color: "gray", // Label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "red", // Label color when focused
                    },
                }}
            />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Box>
    )

}


export default NewTodoForm;
