import React,{useState} from 'react';
import { Note } from './models/notemodel';
import Header from './components/Header';
import './App.css';
import NotesList from './components/NotesList';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNotes from './components/CreateNotes';
function App() {
  const [notes,setNotes]=useState<Note[]>([{
    id:(new Date).toString(),
    title:"Welcome to Notes",
    text:"",
    color:"	#89F9CE",
    date:(new Date).toString()
  }]);
 
  return (
   <>
   <Header/>
   <div className='Container'>
   <Container className="mt-5 ">
     <Row>
       <Col>
       <NotesList notes={notes} setNotes={ setNotes}/>
       </Col>
     </Row>
     <Row>
       <Col>
       <CreateNotes notes={notes} setNotes={ setNotes}/>
       </Col>
     </Row>
   </Container>
   </div>
   </>
  );
}

export default App;
