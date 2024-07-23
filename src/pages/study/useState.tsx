import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type Task = {
  id: number;
  text: string;
};

const TodoApp: React.FC = () => {
  // useStateを用いてタスクのリストと新しいタスク入力の状態を管理します。
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input) {
      // 新しいタスクをtasks配列に追加し、入力フィールドをクリアします。
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const handleDeleteTask = (taskId: number) => {
    // 指定されたIDを持つタスクをフィルターにかけ、除外します。
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>ToDo List</Typography>
      <Typography variant="h6" gutterBottom>useStateの解説</Typography>
      <Typography paragraph>
        useStateは、コンポーネントのローカル状態を管理するためのReactフックです。このアプリでは、
        <strong>tasks</strong>と<strong>input</strong>の二つの状態をuseStateで管理しています。<br />
        <strong>tasks</strong>はToDoリストの項目を配列で保持し、新しいタスクが追加されるたびに配列が更新されます。
        <strong>input</strong>はユーザーが入力フィールドに入力したテキストを保持し、エンターキーを押すか「追加」ボタンをクリックすると、
        このテキストが新しいタスクとして<strong>tasks</strong>に追加され、再レンダリングされます。<br />
      </Typography>
      <Typography variant="h6" gutterBottom>ToDoアプリ操作</Typography>
      <TextField
        label="新しいタスク"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <Button onClick={handleAddTask} variant="contained" color="primary" style={{ marginTop: '10px' }}>
        追加
      </Button>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={task.text} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoApp;
