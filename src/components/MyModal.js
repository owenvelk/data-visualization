import { useState } from 'react';
import { Button } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import Modal from 'react-modal';

export default function MyModal(props) {
    const [open, setOpen] = useState(false);

    const modalStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            width: '80%',
            height: '40%',
        },
    };

    function handleModal() {
        setOpen(!open);
    };

    return (
        <div>
            <Button 
                sx={{backgroundColor: 'white', '&:hover': {backgroundColor: 'lightgrey'}}}
                onClick={handleModal}
            >
                View Chart 1
            </Button>
            <Modal
                isOpen={open}
                onRequestClose={handleModal}
                style={modalStyles}
                ariaHideApp={false}
            >
                <ReactEcharts option={props.modalOptions} />
            </Modal>
        </div>
    );
}