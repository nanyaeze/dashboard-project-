import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Sign In To Your Account.</CardTitle>
          <CardDescription>Unleash your inner sloth 4.0 right now.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" defaultValue="elementary221b@gmail.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" defaultValue="**********" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm text-gray-600">Remember For 30 Days</label>
                </div>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot Password</Link>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Sign In</Button>
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
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
            Sign In With Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}