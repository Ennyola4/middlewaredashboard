import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
    Tooltip,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    BarChart,
    Bar
} from 'recharts';

import type { PieLabelRenderProps } from 'recharts';

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from '../ui/Card';

type TransactionData = {
    hour: string;
    successful: number;
    pending: number;
    failed: number;
};

const transactionData: TransactionData[] = [
    { hour: '00:00', successful: 100, pending: 50, failed: 15 },
    { hour: '02:00', successful: 200, pending: 180, failed: 22 },
    { hour: '04:00', successful: 350, pending: 227, failed: 33 },
    { hour: '06:00', successful: 430, pending: 235, failed: 65 },
    { hour: '08:00', successful: 590, pending: 145, failed: 85 },
    { hour: '10:00', successful: 600, pending: 105, failed: 95 },
];

const apiPerformanceData = [
  { hour: '00:00', performance: 95.2 },
  { hour: '02:00', performance: 98.1 },
  { hour: '04:00', performance: 97.5 },
  { hour: '06:00', performance: 96.8 },
  { hour: '08:00', performance: 94.3 },
  { hour: '10:00', performance: 99.0 },
  { hour: '12:00', performance: 98.7 },
  { hour: '14:00', performance: 97.2 },
  { hour: '16:00', performance: 96.5 },
  { hour: '18:00', performance: 95.8 },
  { hour: '20:00', performance: 98.4 },
  { hour: '22:00', performance: 97.9 },
];

type TooltipProps = {
    active?: boolean;
    payload?: {
        value: number;
        name: string;
        color: string;
    }[];
    label?: string;
};

const pieData = [
    { name: 'Business Banking', value: 45, color: '#3b82f6' },
    { name: 'POS System', value: 3, color: '#ef4444' },
    { name: 'E-Cam', value: 5, color: '#8b5cf6' },
    { name: 'Gold Bucks', value: 12, color: '#f59e0b' },
    { name: 'Mobile Banking', value: 35, color: '#10b981' },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx = 0,
    cy = 0,
    midAngle = 0,
    innerRadius = 0,
    outerRadius = 0,
    percent = 0,
}: PieLabelRenderProps) => {
    const numCx = Number(cx);
    const numCy = Number(cy);
    const numMidAngle = Number(midAngle);
    const numInnerRadius = Number(innerRadius);
    const numOuterRadius = Number(outerRadius);
    const numPercent = Number(percent);

    const radius = numInnerRadius + (numOuterRadius - numInnerRadius) * 0.5;
    const x = numCx + radius * Math.cos(-numMidAngle * RADIAN);
    const y = numCy + radius * Math.sin(-numMidAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={10}
            fontWeight="bold"
        >
            {`${(numPercent * 100).toFixed(0)}%`}
        </text>
    );
};

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (!active || !payload || payload.length === 0) return null;

    return (
        <div className="shadow-sm bg-gray-200 dark:bg-gray-950  rounded-lg p-3  dark:border-gray-700">
            <p className="font-medium">{label}</p>
            {payload.map((entry, index) => (
                <p
                    key={`tooltip-${index}`}
                    className="text-sm dark:text-gray-200"
                    style={{ color: entry.color }}
                >
                    {`${entry.name}: ${entry.value}`}
                </p>
            ))}
        </div>
    );
};

export const Charts = () => {
    return (
        <div className='w-full  p-5 bg-white  dark:bg-gray-950 '>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Line Chart Card */}
                <Card className="bg-white dark:bg-gray-800 border-none shadow-lg h-[400px]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
                        <CardTitle className="text-lg font-semibold dark:text-white">
                            24-Hour Transaction Status Trend (Last 24 Hours)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-1 pt-0 h-[calc(100%-100px)]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={transactionData}
                                margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#e5e7eb"
                                    strokeOpacity={0.9}
                                />
                                <XAxis
                                    dataKey="hour"
                                    tick={{ fill: '#6b7280' }}
                                    axisLine={{ stroke: '#e5e7eb' }}
                                    tickLine={{ stroke: '#e5e7eb' }}
                                />
                                <YAxis
                                    tick={{ fill: '#6b7280' }}
                                    axisLine={{ stroke: '#e5e7eb' }}
                                    tickLine={{ stroke: '#e5e7eb' }}
                                />
                                <Tooltip
                                    content={<CustomTooltip />}
                                    cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="successful"
                                    name="Successful"
                                    stroke="#10B981" // Green
                                    strokeWidth={2}
                                    dot={{ r: 3 }}
                                    activeDot={{ r: 6 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="pending"
                                    name="Pending"
                                    stroke="#F59E0B" // Yellow
                                    strokeWidth={2}
                                    dot={{ r: 3 }}
                                    activeDot={{ r: 6 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="failed"
                                    name="Failed"
                                    stroke="#EF4444" // Red
                                    strokeWidth={2}
                                    dot={{ r: 3 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Pie Chart Card */}
                <Card className="bg-white dark:bg-gray-800 border-none shadow-lg h-[400px]">
                    <CardHeader className="flex flex-row items-center justify-between  p-6 pb-2">
                        <CardTitle className="text-lg font-semibold dark:text-white">
                            Transaction Distribution
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-1 pt-5 h-[calc(100%-80px)]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart margin={{ top: 0, right: 10, bottom: 10, left: 10 }}>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={100}
                                    innerRadius={30}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend
                                    layout="horizontal"
                                    verticalAlign="bottom"
                                    align="center"
                                    wrapperStyle={{
                                        paddingTop: '10px',
                                        fontSize: '12px'
                                    }}
                                    formatter={(value, entry: any) => (
                                        <span style={{ color: entry.color, fontSize: '12px' }}>
                                            {value} {entry.payload.value}%
                                        </span>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Bar Chart Card */}
                <Card className="bg-white dark:bg-gray-800 border-none shadow-lg h-[400px]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
                        <CardTitle className="text-lg font-semibold dark:text-white">
                            24-Hour Transaction Status Trend (Last 24 Hours)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-1 pt-0 h-[calc(100%-100px)]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={transactionData}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                barGap={4}
                                barCategoryGap={5}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#e5e7eb"
                                    strokeOpacity={0.9}
                                />
                                <XAxis
                                    dataKey="hour"
                                    tick={{ fill: '#6b7280' }}
                                    axisLine={{ stroke: '#e5e7eb' }}
                                    tickLine={{ stroke: '#e5e7eb' }}
                                />
                                <YAxis
                                    tick={{ fill: '#6b7280' }}
                                    axisLine={{ stroke: '#e5e7eb' }}
                                    tickLine={{ stroke: '#e5e7eb' }}
                                />
                                <Tooltip
                                    content={<CustomTooltip />}
                                    cursor={{ fill: '#f3f4f6', fillOpacity: 0.3 }}
                                />
                                <Legend />
                                <Bar
                                    dataKey="successful"
                                    name="Successful"
                                    fill="#10B981" // Green
                                    radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                    dataKey="pending"
                                    name="Pending"
                                    fill="#F59E0B" // Yellow
                                    radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                    dataKey="failed"
                                    name="Failed"
                                    fill="#EF4444" // Red
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* API Performance Line Chart Card */}
                <Card className="bg-white dark:bg-gray-800 border-none shadow-lg h-[400px]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
                        <CardTitle className="text-lg font-semibold dark:text-white">
                            API Performance (Last 24 Hours)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-1 pt-0 h-[calc(100%-60px)]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={apiPerformanceData}
                                margin={{ top: 10, right: 5, left: 20, bottom: 0 }}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#e5e7eb"
                                    strokeOpacity={0.9}
                                />
                                <XAxis
                                    dataKey="hour"
                                    tick={{ fill: '#6b7280' }}
                                    axisLine={{ stroke: '#e5e7eb' }}
                                    tickLine={{ stroke: '#e5e7eb' }}
                                />
                                <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    domain={[90, 100]}
                                    tick={{ fill: '#6b7280' }}
                                    axisLine={{ stroke: '#e5e7eb' }}
                                    tickLine={{ stroke: '#e5e7eb' }}
                                    tickFormatter={(value) => `${value}%`}
                                />
                                <Tooltip
                                    content={<CustomTooltip />}
                                    cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }}
                                    formatter={(value) => [`${value}%`, "Performance"]}
                                />
                                <Legend />
                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="performance"
                                    name="API Performance"
                                    stroke="#3b82f6" // Blue
                                    strokeWidth={2}
                                    dot={{ r: 3 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}