import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Container from './Container';

interface LayoutProps {
  children: ReactNode;
}

const FullLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default FullLayout;