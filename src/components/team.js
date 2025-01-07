import React from 'react';
import '../styles/team.css';
import abiralImage from '../assets/abiral.png'; 
import ashreemImage from '../assets/ashreem.png';
import kashishImage from '../assets/kashish.png';

const Team = () => {
    const teamMembers = [
        { name: "Abiral Acharya", role: "Developer", image: abiralImage },
        { name: "Ashreem Pandey", role: "Developer", image: ashreemImage },
        { name: "Kashish Bataju", role: "Developer", image: kashishImage },
    ];

    return (
        <section id="team" className="team">
            <h2>Meet Our Team</h2>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className="avatar">
                            <img src={member.image} alt={`${member.name}'s avatar`} />
                        </div>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;