import React from 'react';
import Header from '../header/Header';
import './Layout.css';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content">{children}</main>
    </div>
  );
}
