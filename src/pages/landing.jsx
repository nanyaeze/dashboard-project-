import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  LayoutDashboard,
  Library,
  Sparkles,
  TrendingUp,
  Leaf,
  Users,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-700">
            <Link to="/">AceUP</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-600 transition">Home</Link>
            <Link to="#features" className="hover:text-green-600 transition">Features</Link>
            <Link to="#about" className="hover:text-green-600 transition">About</Link>
            <Link to="#contact" className="hover:text-green-600 transition">Contact</Link>
          </div>
          <div className="space-x-2">
            <Link to="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-linear-to-br from-green-50 via-white to-emerald-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
                Unleash Your Inner <span className="text-green-600">Prowess</span>
              </h1>
              <p className="text-lg h-30 text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
                Discover the ultimate dashboard experience – manage your courses, track progress,
                and achieve your goals with style.
              </p>
              <div className="space-x-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 shadow-lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="#features">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dashboard Illustration"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto md:max-w-full"
              />
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#10b981"></path>
            <path d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,12.44,142.44,11.53,212.41,0,70-11.52,139-29.11,208.78-36.6,69.48-7.45,138.27,7.56,207.17,20.86,69.28,13.37,138.29,19.19,207.78,7.9,69.05-11.18,136.2-33.77,205.11-48.13,27.72-5.77,55.85-9.58,84.15-11.25V0Z" opacity=".5" fill="#10b981"></path>
          </svg>
        </div>
      </section>

      {/* Features Section with Icons */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose AceUP?</h2>
            <p className="text-gray-600 mt-2">Designed for modern learners and creators</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <LayoutDashboard className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Smart Dashboard</CardTitle>
                <CardDescription>Real-time analytics and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Track your courses, assignments, and progress in one intuitive interface.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Library className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Course Library</CardTitle>
                <CardDescription>Access hundreds of lessons</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Browse our curated collection of courses from – learn at your own pace.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Personalized Experience</CardTitle>
                <CardDescription>Tailored recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Get course suggestions based on your interests and learning history.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section with Image and Stats */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team working"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About AceUP</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                AceUP is a modern dashboard application designed to help learners manage their
                educational journey. We combine elegant design with powerful features to make
                learning enjoyable. Our platform integrates public APIs to bring you real-world
                content and a seamless experience.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">10k+</div>
                  <div className="text-sm text-gray-600">Active Learners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AceUP</h3>
              <p className="text-sm text-gray-400">
                Unleash your inner prowess with a modern dashboard experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="#features" className="hover:text-white">Features</Link></li>
                <li><Link to="#about" className="hover:text-white">About</Link></li>
                <li><Link to="#contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@aceup.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+(234) 679-465-1137</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
            Copyright 2026 AceUP ©. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}