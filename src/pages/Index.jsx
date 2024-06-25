import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="w-full py-6 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-gray-800">SaaS Startup</h1>
          <nav>
            <Button variant="outline" className="mr-4">Login</Button>
            <Button>Sign Up</Button>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our SaaS Solution</h2>
          <p className="text-lg text-gray-600 mb-8">We provide the best solutions for managing your phone services efficiently and effectively.</p>
          <Button size="lg">Get Started</Button>
        </section>
        <Separator className="my-12" />
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
              <CardDescription>Manage your phone services with ease.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our platform provides an intuitive interface to manage all your phone services in one place.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
              <CardDescription>Seamless Integration</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Integrate our services with your existing systems effortlessly.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
              <CardDescription>24/7 Support</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our support team is available around the clock to assist you with any issues.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>
        </section>
        <Separator className="my-12" />
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">Subscribe to our newsletter to get the latest updates and news.</p>
          <div className="max-w-md mx-auto">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email" className="mb-4" />
            <Button>Subscribe</Button>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2023 SaaS Startup. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;