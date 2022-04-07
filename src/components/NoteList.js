import './NoteList.css';
import NoteCard from './NoteCard';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

function NoteList() {

    const [notes, setNotes] = useState([])

    const setNote = (id, text) => {
        const newNotes = [...notes];

        const index = newNotes.findIndex(el => el.id === id);

        newNotes[index].text = text;
        setNotes(newNotes);
    }

    const addNote = () => {
        const newNotes = [...notes];
        newNotes.unshift({
            id: Math.floor(Math.random() * 78),
            text: '',
        })
        setNotes(newNotes);
    }
    
    const deleteNote = (id) => {

        const newNotes = notes.filter(el => el.id !== id)
        setNotes(newNotes)
    }

    return (
        <>
            <button className='add-btn' onClick={() => addNote()}><PlusOutlined /> Add note</button>
            <div className='note-list'>
                {notes.map(({ text, id }) => {
                    return (
                        <NoteCard
                            text={text}
                            setNote={setNote}
                            id={id}
                            key={id}
                            deleteNote={deleteNote}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default NoteList