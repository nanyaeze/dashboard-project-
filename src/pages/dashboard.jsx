// src/pages/Dashboard.jsx (updated)

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LogOut, Menu, Home, BookOpen, Clock } from "lucide-react";

// Helper function to map product categories to course categories
const getCourseCategory = (category) => {
  const map = {
    "men's clothing": "Fashion Design",
    "women's clothing": "Fashion Design",
    jewelery: "Accessories & Crafts",
    electronics: "Technology & Coding",
  };
  return map[category] || "General";
};

// Helper to generate random course level / duration
const getCourseDuration = () => {
  const durations = ["4 weeks", "8 weeks", "12 weeks", "Self-paced"];
  return durations[Math.floor(Math.random() * durations.length)];
};

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleLogout = () => {
    // Clear auth tokens if any, then navigate to login
    navigate("/login");
  };

  const renderRating = (rate) => (
    <div className="flex items-center">
      <span className="text-yellow-500">★</span>
      <span className="ml-1 text-sm text-gray-600">{rate}</span>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (same as before) */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r shadow-sm">
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="flex items-center justify-center h-16 px-4 border-b">
            <h1 className="text-xl font-bold text-green-700">SlothUI</h1>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link
              to="/dashboard"
              className="flex items-center px-2 py-2 text-gray-700 rounded-md hover:bg-gray-100"
            >
              <Home className="w-5 h-5 mr-3 text-gray-500" />
              Dashboard
            </Link>
            <Link
              to="/dashboard/courses"
              className="flex items-center px-2 py-2 text-gray-700 rounded-md bg-gray-100"
            >
              <BookOpen className="w-5 h-5 mr-3 text-gray-500" />
              Courses
            </Link>
          </nav>
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-2 py-2 text-red-600 rounded-md hover:bg-red-50"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <aside className="relative flex-1 flex flex-col w-64 max-w-xs bg-white shadow-xl">
            <div className="flex-1 flex flex-col overflow-y-auto">
              <div className="flex items-center justify-center h-16 px-4 border-b">
                <h1 className="text-xl font-bold text-green-700">SlothUI</h1>
              </div>
              <nav className="flex-1 px-2 py-4 space-y-1">
                <Link
                  to="/dashboard"
                  className="flex items-center px-2 py-2 text-gray-700 rounded-md hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Home className="w-5 h-5 mr-3 text-gray-500" />
                  Dashboard
                </Link>
                <Link
                  to="/dashboard/courses"
                  className="flex items-center px-2 py-2 text-gray-700 rounded-md bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <BookOpen className="w-5 h-5 mr-3 text-gray-500" />
                  Courses
                </Link>
              </nav>
              <div className="p-4 border-t">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-2 py-2 text-red-600 rounded-md hover:bg-red-50"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Logout
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-500 hover:text-gray-600"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Ifunanya Eze</span>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Courses Grid */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
            <p className="text-gray-600">Explore our collection of learning opportunities</p>
          </div>

          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              Error: {error}
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={`/course/${course.id}`}
                  className="group transition-transform hover:scale-105"
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader className="p-4 pb-0">
                      <div className="aspect-square relative overflow-hidden rounded-md bg-gray-100">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="object-contain w-full h-full p-4"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-4">
                      <CardTitle className="text-base line-clamp-2 mb-2">
                        {course.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">
                          {getCourseCategory(course.category)}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {getCourseDuration()}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-lg font-bold text-green-600">
                          ${course.price} <span className="text-sm font-normal">enrollment fee</span>
                        </span>
                        {renderRating(course.rating.rate)}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" className="w-full">
                        View Course
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}