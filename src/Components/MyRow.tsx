import { ReactDOM } from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import '../index.css'
import { Card, Space, Row, Col } from 'antd';

interface rowType {
    obj : {Inhalt : string [] }
}

// Array die alle angezeigten Karten enthält
 const components : JSX.Element [] = [];

// i Karten erstellen
 let showCards = (content: rowType)  => {
     for(let i=0; i<content.obj.Inhalt.length; i++){
         console.log("it works")
         components[i] = 
         <>
            <Row>
            <Col span={8}></Col>
            <Col span={8}>
                <Card style={{ width: 200, margin: 15 }}>{content.obj.Inhalt[i]}</Card>
            </Col>
            <Col span={8}></Col>
            </Row>
         </>
     }
    return components;
}

export default function MyRow (props : rowType) {
    return (<>
    {showCards(props)}
    </>)
}