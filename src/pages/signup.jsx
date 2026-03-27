import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Sign Up For Free.</CardTitle>
          <CardDescription>Unleash your inner prowess right now.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullname">Full Name</Label>
              <Input id="fullname" defaultValue="Ifunanya Eze" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="ifunanyaeze@gmail.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" defaultValue="***********" />
              <p className="text-sm text-green-600">Password strength: Strong</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" defaultValue="***********" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Sign Up </Button>
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">Sign In</Link>
          </p>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">OR</span>
            </div>
          </div>
          <Button variant="outline" className="w-full flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.44-1.92 4.68-1.2 1.4-2.88 2.32-5.08 2.32-4.08 0-7.2-3.2-7.2-7.2 0-4 3.12-7.2 7.2-7.2 2.28 0 4.08.88 5.4 2.16l2.4-2.4C18.08 4.08 15.36 2.4 12 2.4 6.48 2.4 2 6.88 2 12s4.48 9.6 10 9.6c5.36 0 9.2-3.68 9.2-9.2 0-.64-.08-1.28-.2-1.92h-9z"/>
            </svg>
            Sign Up With Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}