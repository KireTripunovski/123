import { MoreHorizontal } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui";
import { EngagementChart } from "./Engagement";
import { CompletionChart } from "./CompletetionChart";

export default function ProfDashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Lessons"
          value="35"
          change="+5%"
          changeType="positive"
        />
        <MetricCard
          title="Total Students"
          value="1200"
          change="+10%"
          changeType="positive"
        />
        <MetricCard
          title="Average number of visits"
          value="4.8"
          change="-0.2%"
          changeType="negative"
        />
        <MetricCard
          title="Active Students"
          value="150"
          change="+15%"
          changeType="positive"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">
              Student Engagement
            </CardTitle>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <h2 className="text-3xl font-bold text-gray-900">75%</h2>
              <span className="text-sm font-medium text-green-600">+5%</span>
            </div>
            <div className="mt-4 h-[200px]">
              <EngagementChart />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">
              Lesson Completion
            </CardTitle>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <h2 className="text-3xl font-bold text-gray-900">80%</h2>
              <span className="text-sm font-medium text-green-600">+8%</span>
            </div>
            <div className="mt-4 h-[200px]">
              <CompletionChart />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
}

function MetricCard({ title, value, change, changeType }: MetricCardProps) {
  return (
    <Card style={{ border: "1px solid #green" }}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-2">
          <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
          <span
            className={`text-sm font-medium ${
              changeType === "positive"
                ? "text-green-600"
                : changeType === "negative"
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {change}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
