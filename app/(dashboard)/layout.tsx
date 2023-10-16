import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>Hi I am from dashboard layout</p>
      {children}
    </div>
  );
}
