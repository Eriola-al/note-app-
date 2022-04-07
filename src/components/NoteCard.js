import { FormOutlined, DeleteOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import { useState } from 'react';

import './NoteCard.css';

const NoteCard = ({ id, text, setNote, deleteNote }) => {

    const { TextArea } = Input;

    const [noteText, setNoteText] = useState(text);
    const [edit, setEdit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNote(id, noteText)
        setEdit(false)
    }

    return (
        <form className='note' onSubmit={handleSubmit}>

            <div className='note-header'>
                <FormOutlined
                    className={`hover:cursor-pointer ${edit ? 'scale-0' : 'scale-100'}`}
                    style={{ marginRight: '10px' }}
                    onClick={() => setEdit(true)}
                />
                <DeleteOutlined onClick={() => deleteNote(id)} />
            </div>
            {
                !edit ? (
                    <TextArea style={{ height: '260px' }}>{text}</TextArea>
                ) : (
                    <TextArea style={{ height: '250px' }}
                        onChange={(e) => setNoteText(e.target.value)}
                        defaultValue={noteText}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                    ></TextArea>
                )
            }
        </form>
    );

};

export default NoteCard;

