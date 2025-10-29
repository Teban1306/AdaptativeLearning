import React from 'react';

const Dashboard = () => {
  const user = {
    name: 'Alex',
    role: 'Systems Engineering',
    progress: 72,
    progressChange: '+5%'
  };

  const proficiencyData = [
    { name: 'Req. Analysis', value: 85 },
    { name: 'Sys. Design', value: 65 },
    { name: 'V&V', value: 90 },
    { name: 'Modeling', value: 75 },
    { name: 'Architecture', value: 80 }
  ];

  const recommendedModules = [
    {
      title: 'Introduction to MBSE',
      description: 'Learn the fundamentals of Model-Based Systems Engineering and its core principles.',
      duration: '45 mins',
      module: 'MODULE'
    },
    {
      title: 'Advanced Requirements Elicitation',
      description: 'Master techniques for gathering and managing complex system requirements from stakeholders.',
      duration: '1.5 hours',
      module: 'MODULE'
    },
    {
      title: 'Failure Mode Analysis',
      description: 'Understand how to proactively identify and mitigate potential system failures.',
      duration: '1 hour',
      module: 'MODULE'
    }
  ];

  const upcomingDeadlines = [
    {
      title: 'Quiz 3: System Integration',
      dueDate: 'Oct 28, 11:59 PM',
      type: 'quiz'
    },
    {
      title: 'Project Milestone 1',
      dueDate: 'Nov 5, 11:59 PM',
      type: 'project'
    },
    {
      title: 'Assessment: V&V Principles',
      dueDate: 'Nov 12, 11:59 PM',
      type: 'assessment'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-300">
      {/* Barra lateral */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-dark-200 p-6 space-y-8">
        <div className="flex items-center space-x-3">
          <svg className="w-8 h-8 text-primary-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="text-xl font-bold text-white">SE Learn</span>
        </div>

        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center space-x-3 text-primary-500 bg-dark-400/50 p-3 rounded-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-primary-500 p-3 rounded-lg hover:bg-dark-400/50 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>My Courses</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-primary-500 p-3 rounded-lg hover:bg-dark-400/50 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Skill Tree</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-primary-500 p-3 rounded-lg hover:bg-dark-400/50 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Assessments</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Welcome back, {user.name}!</h1>
            <p className="text-gray-400">Here is an overview of your progress and what to work on next.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-dark-400/50">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-dark-400/50">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <div className="flex items-center space-x-3 bg-dark-400/50 p-2 rounded-lg">
              <img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Alex&background=0D8ABC&color=fff" alt="User" />
              <div>
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-gray-400">{user.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de contenido */}
        <div className="grid grid-cols-3 gap-8">
          {/* Competency Overview */}
          <div className="bg-dark-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Competency Overview</h2>
            <div className="flex items-end space-x-4">
              <div className="text-5xl font-bold text-white">{user.progress}%</div>
              <div className="text-sm font-medium text-green-500">{user.progressChange} this month</div>
            </div>
            <div className="mt-6 h-48 bg-dark-400/50 rounded-lg"></div>
          </div>

          {/* Proficiency Breakdown */}
          <div className="bg-dark-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Proficiency Breakdown</h2>
            <div className="space-y-4">
              {proficiencyData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>{item.name}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 bg-dark-400 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-dark-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Upcoming Deadlines</h2>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="flex items-start space-x-4 bg-dark-400/50 p-4 rounded-lg">
                  <div className="p-2 bg-dark-300 rounded-lg">
                    <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {deadline.type === 'quiz' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      )}
                      {deadline.type === 'project' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      )}
                      {deadline.type === 'assessment' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">{deadline.title}</h3>
                    <p className="text-xs text-gray-400">Due {deadline.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Modules */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-white mb-6">Recommended for You</h2>
          <div className="grid grid-cols-3 gap-6">
            {recommendedModules.map((module, index) => (
              <div key={index} className="bg-dark-200 rounded-xl p-6 hover:bg-dark-400/50 transition-colors cursor-pointer">
                <div className="text-xs font-medium text-gray-400 mb-2">{module.module}</div>
                <h3 className="text-lg font-medium text-white mb-2">{module.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{module.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{module.duration}</span>
                  </div>
                  <button className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;