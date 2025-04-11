import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SummarizeChart = ({ califications }) => {
  // Contar ocurrencias
  const counts = [1, 2, 3, 4, 5].map((val) => ({
    name: val === 5 ? 'Excellent' :
          val === 4 ? 'Very Good' :
          val === 3 ? 'Normal' :
          val === 2 ? 'Bad' :
          'Terrible',
    value: califications.filter(c => c === val).length
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={counts}>
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
