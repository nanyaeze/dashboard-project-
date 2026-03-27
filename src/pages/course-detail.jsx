import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Clock, Users } from "lucide-react";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Course not found");
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-red-600 text-lg">{error}</p>
        <Link to="/dashboard">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    );
  }

  if (!course) return null;

  // Helper to map product category to course category
  const getCourseCategory = (category) => {
    const map = {
      "men's clothing": "Fashion Design",
      "women's clothing": "Fashion Design",
      jewelery: "Accessories & Crafts",
      electronics: "Technology & Coding",
    };
    return map[category] || "General";
  };

  // Format rating as stars (e.g., 4.5 → ★★★★½)
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
        {halfStar && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-gray-300" />
        ))}
        <span className="ml-2 text-gray-600">{rate.toFixed(1)} ({course.rating.count} reviews)</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex items-center">
      <div className="container mx-auto max-w-4xl">
        <Link to="/dashboard" className="inline-flex items-center text-green-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </Link>

        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <img
                src={course.image}
                alt={course.title}
                className="max-h-80 object-contain"
              />
            </div>

            {/* Details Section */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{getCourseCategory(course.category)}</Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Self-paced
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {Math.floor(Math.random() * 500) + 50} students
                </Badge>
              </div>

              <CardTitle className="text-3xl font-bold mb-4">{course.title}</CardTitle>
              <CardDescription className="text-gray-600 mb-6">
                {course.description}
              </CardDescription>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-green-600">${course.price}</span>
                  <span className="text-gray-500 ml-2">enrollment fee</span>
                </div>
                {renderStars(course.rating.rate)}
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/dashboard">Browse More Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}