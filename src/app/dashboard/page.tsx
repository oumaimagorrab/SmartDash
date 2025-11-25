"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";
import { Search } from "lucide-react";

export default function JobOffersPage() {
  const [filters, setFilters] = useState({
    title: "All",
    location: "Paris",
    contract: "All",
    salary: "30-50",
  });

  const jobData = [
    { title: "Frontend Developer", company: "Tech Corp", location: "Paris", contract: "CDI" },
    { title: "Data Scientist", company: "Data Inc.", location: "Lyon", contract: "CDI" },
    { title: "UX Designer", company: "Design", location: "Paris", contract: "CDD" },
    { title: "Backend Developer", company: "Web Solutions", location: "Marseille", contract: "Freelance" },
  ];

  const contractStats = [
    { name: "CDI", value: 60 },
    { name: "CDD", value: 25 },
    { name: "Freelance", value: 15 },
  ];

  const topJobTitles = [
    { name: "Frontend Developer", value: 4 },
    { name: "Data Scientist", value: 3 },
    { name: "UX Designer", value: 2 },
    { name: "Backend Developer", value: 1 },
  ];

  return (
    <div className="p-6 w-full min-h-screen bg-gray-50">

      {/* HEADER ABOVE FILTER + SEARCH */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold mb-6">Job Offers</h2>
        <div className="relative w-60">
          <Input placeholder="Search..." className="pl-10" />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-blue-600" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">

        {/* FILTERS */}
        <Card className="col-span-3 p-4">
          <h2 className="text-xl font-semibold mb-4">Filter</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <Select value={filters.title}>
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                  <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <Select value={filters.location}>
                <SelectTrigger>
                  <SelectValue placeholder="Paris" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Paris">Paris</SelectItem>
                  <SelectItem value="Lyon">Lyon</SelectItem>
                  <SelectItem value="Marseille">Marseille</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contract Type</label>
              <Select value={filters.contract}>
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="CDI">CDI</SelectItem>
                  <SelectItem value="CDD">CDD</SelectItem>
                  <SelectItem value="Freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Salary Range</label>
              <Select value={filters.salary}>
                <SelectTrigger>
                  <SelectValue placeholder="30-50k" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30-50">€30,000 - €50,000</SelectItem>
                  <SelectItem value="50-70">€50,000 - €70,000</SelectItem>
                  <SelectItem value="70-100">€70,000 - €100,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Search
            </Button>
          </div>
        </Card>

        {/* JOB TABLE */}
        <Card className="col-span-5 p-4">
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Title</th>
                  <th className="text-left py-2">Company</th>
                  <th className="text-left py-2">Location</th>
                  <th className="text-left py-2">Contract</th>
                </tr>
              </thead>
              <tbody>
                {jobData.map((job, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                    <td>{job.contract}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* GRAPHS */}
        <div className="col-span-4 space-y-6">
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Job Offers by Contract Type</h2>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={contractStats} dataKey="value" nameKey="name" innerRadius={60} outerRadius={80} fill="#3b82f6">
                  {contractStats.map((entry, index) => (
                    <Cell key={index} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Top Job Titles</h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={topJobTitles}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6"/>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

      </div>
    </div>
  );
}
