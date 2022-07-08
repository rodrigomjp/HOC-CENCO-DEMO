import React from 'react';
import JsxParser from 'react-jsx-parser';
import { CardTitle } from './CardTitle'


export class ComponentDemo extends React.Component {
    render() {
      // html or jsx can fetch from back-end
      const html = `<CardTitle title="nuevo" />
      <CardTitle />
      `;
      return <JsxParser jsx={html} components={{CardTitle}} />;
    }
  }