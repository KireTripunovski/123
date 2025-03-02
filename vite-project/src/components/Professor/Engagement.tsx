"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export function EngagementChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Sample data based on the image
    const labels = Array.from({ length: 21 }, (_, i) => `Day ${i + 1}`);

    // Generate data that resembles the line in the image
    const data = [
      15, 22, 20, 25, 22, 20, 25, 30, 32, 30, 28, 32, 30, 35, 38, 35, 30, 35,
      38, 40, 42,
    ];

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Engagement",
            data,
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              maxTicksLimit: 3,
              callback: (value, index) => {
                if (index === 0) return "Week 1";
                if (index === 10) return "Week 2";
                if (index === 20) return "Week 3";
                return "";
              },
            },
          },
          y: {
            beginAtZero: true,
            max: 50,
            ticks: {
              stepSize: 10,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
}
