import React from "react";

export function ModuleTable () {
    const ScheduleTable = () => {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

        const schedule = [
            {
                day: 'Monday',
                activities: [
                    {time: '9:00 AM', description: 'Meeting with team'},
                    {time: '11:00 AM', description: 'Call with client'},
                    {time: '2:00 PM', description: 'Presentation preparation'},
                ],
            },
            {
                day: 'Tuesday',
                activities: [
                    {time: '10:00 AM', description: 'Weekly check-in with boss'},
                    {time: '1:00 PM', description: 'Lunch with coworker'},
                    {time: '3:00 PM', description: 'Project review with team'},
                ],
            },
            {
                day: 'Wednesday',
                activities: [
                    {time: '9:30 AM', description: 'Client meeting'},
                    {time: '11:00 AM', description: 'Product brainstorming session'},
                    {time: '2:30 PM', description: 'Marketing presentation'},
                ],
            },
            {
                day: 'Thursday',
                activities: [
                    {time: '8:30 AM', description: 'Team building activity'},
                    {time: '11:00 AM', description: 'Call with vendor'},
                    {time: '3:00 PM', description: 'Project status update'},
                ],
            },
            {
                day: 'Friday',
                activities: [
                    {time: '9:00 AM', description: 'Product launch meeting'},
                    {time: '11:00 AM', description: 'Client follow-up'},
                    {time: '2:00 PM', description: 'Marketing strategy session'},
                ],
            },
        ];

        return (
            <table>
                <thead>
                <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {daysOfWeek.map((day, index) => (
                    <React.Fragment key={index}>
                        <tr>
                            <td rowSpan={schedule[index].activities.length}>{day}</td>
                            <td>{schedule[index].activities[0].time}</td>
                            <td>{schedule[index].activities[0].description}</td>
                        </tr>
                        {schedule[index].activities.slice(1).map((activity, idx) => (
                            <tr key={idx}>
                                <td>{activity.time}</td>
                                <td>{activity.description}</td>
                            </tr>
                        ))}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        )
    }
}
