import React from 'react';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import ParticipantsList from '../../components/ParticipantsList';

// import { Container } from './styles';

const Setting: React.FC = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <ParticipantsList />
        <Footer />
      </section>
    </Card>
  );
};

export default Setting;
