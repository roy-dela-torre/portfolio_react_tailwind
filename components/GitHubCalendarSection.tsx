import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubCalendarSection: React.FC = () => (
  <section className="wrapper">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">GitHub Contribution Calendar</h2>
      <div className="flex justify-center">
        <div className="text-slate-200 max-md:overflow-x-scroll">
          <GitHubCalendar
            username="roy-dela-torre"
            colorScheme="dark"
          />
        </div>
      </div>
  </section>
);

export default GitHubCalendarSection;
