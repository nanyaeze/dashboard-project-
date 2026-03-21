import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-700">
            <Link to="/">SlothUI</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <Link to="#features" className="hover:text-green-600">Features</Link>
            <Link to="#about" className="hover:text-green-600">About</Link>
            <Link to="#contact" className="hover:text-green-600">Contact</Link>
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

      {/* Hero Section */}
      <section className="bg-linear-to-r from-green-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Unleash Your Inner Sloth 4.0
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the ultimate dashboard experience – manage your courses, track progress,
            and achieve your goals with style.
          </p>
          <div className="space-x-4">
            <Link to="/signup">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
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
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SlothUI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Smart Dashboard</CardTitle>
                <CardDescription>Real-time analytics and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Track your courses, assignments, and progress in one intuitive interface.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Course Library</CardTitle>
                <CardDescription>Access hundreds of lessons</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Browse our curated collection of courses from the Fake Store API – learn at your own pace.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
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

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About SlothUI</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              SlothUI is a modern dashboard application designed to help learners manage their
              educational journey. We combine elegant design with powerful features to make
              learning enjoyable. Our platform integrates public APIs to bring you real-world
              content and a seamless experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SlothUI</h3>
              <p className="text-sm text-gray-400">
                Unleash your inner sloth with a modern dashboard experience.
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
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
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
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@slothui.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
            Copyright 2025 SlothUI ©. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}