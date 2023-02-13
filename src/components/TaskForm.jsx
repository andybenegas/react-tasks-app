import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export const TaskForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });
    setTitle('');
    setDescription('');
  };

  return (
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-800 p-10 mb-4' onSubmit={handleSubmit}>
        <h1 className='text-white text-2xl font-bold mb-3 '>Crea tu tarea</h1>
        <input 
          placeholder="Escribe tu tarea"
          onChange={ (e) => setTitle(e.target.value) }
          value={title}
          autoFocus
          className='bg-slate-300 p-3 w-full mb-2'
        />
        <textarea 
          placeholder='Escribe la descripción de la tarea'
          onChange={e => setDescription(e.target.value)}
          value={description}
          className='bg-slate-300 p-3 w-full mb-2'
        >

        </textarea>
        <button className='bg-blue-600 px-2 py-1 rounded-md mt-4 hover:bg-blue-400 text-white'>
            Guardar
        </button>
      </form>
    </div>
  );
};