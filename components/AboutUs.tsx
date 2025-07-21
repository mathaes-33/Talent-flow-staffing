
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { IconUsers } from './icons';

const teamMembers = [
  {
    name: 'Kyle Banks',
    title: 'Chief Operating Officer',
    imageUrl: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Mathais Daniel',
    title: 'Lead Talent Strategist',
    imageUrl: 'https://images.unsplash.com/photo-1549637642-90187f64f420?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Diane Novas',
    title: 'Head of AI Development',
    imageUrl: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const AboutUs = () => {
  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
          <IconUsers className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-3xl md:text-4xl font-extrabold text-primary">Meet Our Team</CardTitle>
        <CardDescription className="max-w-3xl mx-auto text-lg">
          The brilliant minds behind TalentFlow AI, dedicated to revolutionizing recruitment.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  className="rounded-full w-full h-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
              <p className="text-primary font-medium">{member.title}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutUs;
