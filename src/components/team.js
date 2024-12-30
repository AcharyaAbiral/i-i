import React from 'react';
import '../styles/team.css';

const Team = () => {
    const teamMembers = [
        { name: "Abiral Acharya", role: "Project Lead" },
        { name: "John Doe", role: "AI Developer" },
        { name: "Jane Smith", role: "UI/UX Designer" },
    ];

    return (
        <section id="team" className="team">
            <h2>Meet Our Team</h2>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className="avatar"></div>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
